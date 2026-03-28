import {Input} from "../../components/Input"
import { Button } from "../../components/ui/Button"

export const Signin = () =>{
    return <>
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-2xl shadow-sm min-w-48 p-10">
            <div className="">
            <Input placeholder={"Enter Email"}></Input>
            </div>
            <div className="mt-2">
            <Input placeholder={"Enter Password"}></Input>
            </div>
            <div className="flex justify-center mt-4">
            <Button variant={"primary"} text={"Signin"} size={"md"} fullWidth={true} loading={false}>
            </Button>
            </div>
        </div>
    </div>
    </>
}