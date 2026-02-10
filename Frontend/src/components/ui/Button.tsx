
import type { ReactElement } from "react";

type Variants = "primary" | "secondary";
type Size = "sm" | "md" | "lg";
export interface ButtonProps {
    variant: Variants;
    size: Size;
    text: string;
    startIcon?: ReactElement;
    endIcon?:ReactElement;
    onClick: () => void;
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
const defaultStyles =  "flex rounded-md";
export const Button = (props:ButtonProps) => {
    return<>
    <button className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${props.size} ${defaultStyles}`}>{props.startIcon ? <div className=" pr-2">{props.startIcon}</div> : null }{props.text}{props.endIcon}</button>
    </>
}