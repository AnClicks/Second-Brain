
import brainIcon from "../../assets/brainIcon.svg";
import { TwitterLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import { SidebarButton } from "./ui/SidebarButton";
import { useState } from "react";
export const Sidebar = ({ isSidebarToggle, setSidebarToggle }: any) => {
    const sidebarButton = () => {
        setSidebarToggle(!isSidebarToggle);
    }
        const [isTwitterHover,setisTwitterHover] = useState(false);
        const [isYTHover,setisYTHover] = useState(false);
    return (

        <>
            <div onMouseEnter={() => setSidebarToggle(true)} onMouseLeave={() => setSidebarToggle(false)} className={` bg-white pt-4 pl-2 left-0 top-0 fixed  h-screen transition-all duration-200 ease-in ${!isSidebarToggle ? 'opacity-0 w-16' : 'opacity-100 w-72'}`}>
                <div className="flex">
                    <div className="mt-1">
                        <img src={brainIcon} alt="brain logo" className='h-10 w-10' />
                    </div>
                    <div className='text-blue-400 text-2xl font-medium ml-1.5 pt-2' >Second Brain</div>
                </div>
                <div className="mt-8 ">
                    <div onMouseEnter={()=>{setisTwitterHover(true)}} onMouseLeave={()=>{setisTwitterHover(false)}} className={`${isTwitterHover ? "bg-gray-100 rounded-xl" : ""}`}>
                    <SidebarButton  icon={<TwitterLogoIcon weight={`${isTwitterHover ? "fill" :"regular"}`} color={`${isTwitterHover ? '#2a8fc3':'#4442d9'}`} size={32} />} onClick={() => { }} isOpen={isSidebarToggle} text={"X"}></SidebarButton>
                    </div>
                    <div onMouseEnter={()=>{setisYTHover(true)}} onMouseLeave={()=>{setisYTHover(false)}} className={`${isYTHover ? "bg-gray-100 rounded-xl":""}`} >
                    <SidebarButton icon={<YoutubeLogoIcon  weight={`${isYTHover ? "fill" : "regular" }`}  color={`${isYTHover? "#ff0033": "#4442d9"}`} size={32} />} onClick={() => { }} isOpen={isSidebarToggle} text={"Youtube"}></SidebarButton>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setSidebarToggle(true)} onMouseLeave={() => setSidebarToggle(false)} className={`bg-white pt-4 pl-2 left-0 top-0 fixed  h-screen transition-all duration-200 ease-in ${isSidebarToggle ? 'opacity-0' : 'opacity-100'}`}>
                <div onClick={sidebarButton}>
                    <div className="mt-1">
                        <img src={brainIcon} alt="brain logo" className='h-10 w-10' />
                    </div>
                </div>
                <div className="mt-4">
                    <div>
                        <SidebarButton icon={<TwitterLogoIcon  color={"#4442d9"} size={24} />} onClick={() => { }} isOpen={isSidebarToggle}></SidebarButton>
                    </div>
                    <div>
                        <SidebarButton icon={<YoutubeLogoIcon color={"#4442d9"}size={24} />} onClick={() => { }} isOpen={isSidebarToggle}></SidebarButton>
                    </div>
                </div>
            </div>
        </>
    )
}