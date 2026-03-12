import type { ReactElement } from "react"

type Size  = "sm" | "md" | "lg";
export interface ButtonProps {
    icon : ReactElement;
    isOpenSize : Size;
    isCloseSize : Size;
    onClick: () => void;
    isOpen:boolean;
}
const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4" ,
    "lg" : "py-5 px-6",
}

export const SidebarButton = (props : ButtonProps) =>{
    return (
        <>
        {/* { props.isOpen && 


        } */}
        </>
    )
}