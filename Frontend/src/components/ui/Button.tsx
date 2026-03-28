
import type { ReactElement } from "react";

type Variants = "primary" | "secondary";
type Size = "sm" | "md" | "lg";
export interface ButtonProps {
    variant: Variants;
    size: Size;
    text: string;
    startIcon?: ReactElement; 
    endIcon?:ReactElement;
    onClick?: () => void; 
    fullWidth?: boolean;
    loading? : boolean;
}
const variantStyles  = {
     "primary" : "bg-blue-400 text-white",
     "secondary": "bg-blue-200 text-purple-200"
}

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-5 px-6",
}
const defaultStyles =  "flex items-center rounded-md font-light";
export const Button = (props:ButtonProps) => {
    return<>
    <button onClick ={props.onClick} className={`cursor-pointer ${variantStyles[props.variant]} ${sizeStyles[props.size]} ${props.size} ${defaultStyles}  ${props.fullWidth ? 'w-full flex justify-center items-center' : ""} ${props.loading? 'opacity-45': "" }`}  
    disabled={props.loading}
    >
        {props.startIcon ? <div className=" pr-2">{props.startIcon}</div> : null }{props.text}{props.endIcon}
        </button>
    </>
}   