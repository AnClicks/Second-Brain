import {Input} from "../../components/Input"
import { Button } from "../../components/ui/Button"
import {useRef} from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";
export const Signin = () =>{
        const usernameRef = useRef<HTMLInputElement>(null);
        const passwordRef = useRef<HTMLInputElement>(null);
        const navigate = useNavigate();
        async function signin() {
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;

           const response = await axios.post( `${BACKEND_URL}/api/v1/signin`,{
                username:username,
                password:password
            }) 
             const jwt = response.data.token;
             localStorage.setItem("token",jwt);
            // alert("you have signed in")
            navigate("/dashboard")
               
        }
    return <>
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-2xl shadow-sm min-w-48 p-10">
            <div className="">
            <Input ref={usernameRef} placeholder={"Enter Email"}></Input>
            </div>
            <div className="mt-2">
            <Input ref={passwordRef} placeholder={"Enter Password"}></Input>
            </div>
            <div className="flex justify-center mt-4">
            <Button onClick={signin} variant={"primary"} text={"Signin"} size={"md"} fullWidth={true} loading={false}>
            </Button>
            </div>
        </div>
    </div>
    </>
}