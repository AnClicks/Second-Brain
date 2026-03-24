import type { ReactElement } from "react"

// type Size  = "sm" | "md" | "lg";
export interface ButtonProps {
    icon : ReactElement;
    onClick: () => void;
    isOpen:boolean;
    text?: string;
}
// const sizeStyles = {
//     "sm" : "py-1 px-2",
//     "md" : "py-2 px-4" ,
//     "lg" : "py-5 px-6",
// }

export const SidebarButton = (props : ButtonProps) =>{
    return (
        <>
        { !props.isOpen &&
        <div className="cursor-pointer">
            <button onClick={props.onClick} className={`p-1`}>{props.icon}</button>
        </div>
        }

        { props.isOpen && 
        <div className="flex mt-3 cursor-pointer" onMouseEnter={()=>{}}>
        <div>
            <button onClick={props.onClick} className="cursor-pointer" >{props.icon}</button>
        </div>
        <div className='font-medium pl-2 mt-1 text-blue-400'>
            {props.text}
        </div>
        </div>

        }
        </>
    )
}