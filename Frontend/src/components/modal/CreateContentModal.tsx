
import { CloseIcon } from "../../icons/Closeicon";
import { Input } from "./Input"
import { Button } from "../ui/Button";
//controlled component
export function CreateContentModel({ open, onClose }:any) {
    return <div >
        {open && <div className='w-screen h-screen bg-black/60 fixed top-0 left-0 flex justify-center'>
            <div className="flex justify-center flex-col">
                <span className="bg-white p-4 rounded-xl">
                    <div className=" flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                        <CloseIcon size={"md"}  />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Input placeholder={"Enter Title"}></Input>
                        <Input placeholder={"Enter Link"}></Input>
                    </div>
                    <div className="flex justify-center">
                    <Button variant= {"primary"} size={"md"} text={"Submit"} onClick={()=>{}}></Button>
                    </div>
                </span>

            </div>
        </div>
        }
    </div>
}