
import brainIcon from "../../assets/brainIcon.svg";

export const Sidebar = ({ isSidebarToggle, setSidebarToggle }: any) => {
    const sidebarButton = () => {
        setSidebarToggle(!isSidebarToggle);
    }

    // return (
    //     <>
    //         <div className={`z-100 h-screen fixed bg-red left-0 top-0 transition-all duration-300 ease-in-out ${!isSidebarToggle ? 'w-20' : 'w-72'}`}>
    //             <img src={brainIcon} alt="brain image"/>
    //         </div>
    //     </>
    // )

    return (

        <>
            <div onMouseEnter={() => setSidebarToggle(true)} onMouseLeave={() => setSidebarToggle(false)} className={` bg-white pt-4 pl-2 left-0 top-0 fixed  h-screen transition-all duration-200 ease-in ${!isSidebarToggle ? 'opacity-0 w-16' : 'opacity-100 w-72'}`}>
                <div className="flex">
                    <div className="mt-1">
                        <img src={brainIcon} alt="brain logo" className='h-10 w-10' />
                    </div>
                    <div className='text-blue-400 text-2xl pt-2 pl-2 font-bold ml-1.5' >Second Brain</div>
                </div>
            </div>

            <div onMouseEnter={() => setSidebarToggle(true)} onMouseLeave={() => setSidebarToggle(false)} className={`bg-white pt-4 pl-2 left-0 top-0 fixed  h-screen transition-all duration-200 ease-in ${isSidebarToggle ? 'opacity-0' : 'opacity-100'}`}>
                <div onClick={sidebarButton}>
                    <div className="mt-1">
                        <img src={brainIcon} alt="brain logo" className='h-10 w-10' />
                    </div>
                </div>
            </div>
        </>
    )
}