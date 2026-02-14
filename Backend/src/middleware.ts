import type { NextFunction, Request , Response } from "express";
import jwt, { decode, type JwtPayload } from "jsonwebtoken";
import { JWT_USER_KEY } from "./config.js";

// declare global {
//     namespace Express {
//         export interface Request {
//             userId ?: string;
//         }
//     }
// }
export const userMiddleware = (req: Request,res:Response,next:NextFunction) =>{
    const header = req.headers['authorization'];
    const decoded = jwt.verify(header as string ,JWT_USER_KEY!);
    if(decoded){
        // @ts-ignore
       req.userId = (decoded as JwtPayload).id;
       next();
    }
    else{
        res.status(403).json({
            message:"User is not logged in"
        })
    }
}