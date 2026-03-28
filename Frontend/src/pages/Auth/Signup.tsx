
import { useRef } from "react"
import {Input} from "../../components/Input"
import { Button } from "../../components/ui/Button"
import axios from "axios"
import { BACKEND_URL } from "../../config"

export const Signup = () =>{
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                username:username,
                password:password
          });
          alert("You have signed in")
    }
    return <>
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-2xl shadow-sm min-w-48 p-10">
            <div className="">
            <Input ref={usernameRef} placeholder={"Enter username"}></Input>
            </div>
            <div className="mt-2">
            <Input ref={passwordRef} placeholder={"Enter Password"}></Input>
            </div>
            <div className="flex justify-center mt-4">
            <Button onClick={signup} variant={"primary"} text={"Signup"} size={"md"} fullWidth={true} loading={false}>
            </Button>
            </div>
        </div>
    </div>
    </>
}