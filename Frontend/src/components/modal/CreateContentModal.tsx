
import { useRef } from "react";
import { CloseIcon } from "../../icons/Closeicon";
import { Input } from "../Input"
import { Button } from "../ui/Button";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
//controlled component
enum ContentType{
    Youtube = "youtube",
    Twitter = "twitter"
}
export function CreateContentModel({ open, onClose }:any) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);
    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type
        },{
            headers:{
                "Authorization":localStorage.getItem('token')
            }
        })
    }
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
                        <Input ref={titleRef} placeholder={"Enter Title"}></Input>
                        <Input ref={linkRef} placeholder={"Enter Link"}></Input>
                    </div>
                        <h1 className="pl-2">Type</h1>
                    <div className="flex justify-center">
                        <div className="p-2">
                        <Button size="sm" text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={()=>{
                            setType(ContentType.Youtube)
                        }}>
                        </Button> 
                        </div>
                        <div className="p-2">
                        <Button size="sm" text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={()=>{setType(ContentType.Twitter)}}></Button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <Button onClick={addContent} variant= {"primary"} size={"md"} text={"Submit"}></Button>
                    </div>
                </span>

            </div>
        </div>
        }
    </div>
}