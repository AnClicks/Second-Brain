// import * as dotenv from "dotenv";
// dotenv.config();
import express from "express";
import * as z from "zod";
import bcrypt from "bcrypt";
import { UserModel } from "./db.js"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { PORT } from "./config.js";
import { JWT_USER_KEY } from "./config.js";
import { MONGO_URL } from "./config.js";
import { userMiddleware } from "./middleware.js";
import { ContentModel } from "./db.js";
import { isAwaitExpression } from "typescript";

const app = express();
app.use(express.json());
// const PORT = 3000;
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Backend is UP"
    })
})
app.post("/api/v1/signup", async (req, res) => {
    const requireBody = z.object({
        username: z.email(),
        password: z.string()
            .min(8, "Password must be 8 character long")
            .max(32, "Password must be less than 32 characters")
            .regex(/[A-Z]/, "Password must have a upper letter")
            .regex(/[a-z]/, "Password must have a small case letter")
            .regex(/[A-Za-z0-9]/, "Password must have a special character")
    })

    const parsedDatawithSuccess = requireBody.safeParse(req.body);

    if (!parsedDatawithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parsedDatawithSuccess.error
        })
        return;
    }
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 5);

    try {
        await UserModel.create({
            username: username,
            password: hashedPassword
        })
    }
    catch (e) {
        res.status(402).json({
            error: "Your account already exists: " + e
        })
        return
    }
    res.status(200).json({
        message: "Account created"
    })
})
app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne(
        {username:username}
    )
    if(user){
        const passwordMatch = await bcrypt.compare(password,user.password);
        if(passwordMatch){
            const token = jwt.sign({
                id:user._id,
            },JWT_USER_KEY!);
            res.status(200).json({
                token:token
            })
            return;
        }
        else{
            res.status(401).json({
                message:"Incorrect Credentials"
            })
            return;
        }
    }
})
app.post("/api/v1/content",userMiddleware, async (req, res) => {
    const link  = req.body.link;
    const type = req.body.type;
    const title = req.body.title;
    // const {link , type, title} = req.body;
    try{
        await ContentModel.create({
            title:title,
            link:link, 
            //@ts-ignore
            type:type,
            tags:[],
            //@ts-ignore
            userId: req.userId
        })
        res.status(200).json({
            message:"Content added"
        })
        return;
    }
    catch(e){
        res.status(411).json({
            message:"Could not add the content "+e
        })
        return;
    }
})
app.get("/api/v1/content",userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId:userId
    }).populate("userId","username")
    res.json({
        content
    })
})
app.delete("/api/v1/content", async (req, res) => {
    const contentId = req.body.contentId;
    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId:req.userId
    })
    res.json({
        message: "Content deleted"
    })
})
app.post("api/v1/brain/share", (req, res) => {

})
app.get("api/v1/brain/shareLink", (req, res) => {

})

async function connect() {
    try {
        await mongoose.connect(MONGO_URL!);
        console.log("Database Connected");
        app.listen(PORT, () => {
            console.log("Backend is running at"+PORT);
        })

    }
    catch (e) {
        console.log(
            "Error connecting to Database"
        )
        console.log("Backend did not start")
    }
}
connect();

