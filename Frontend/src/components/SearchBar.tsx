
export const SearchBar = ({modalStatus}:any) => {

    return (
        <>
            <form >
                <label htmlFor="search" className="block mb-2.5 text-sm font-medium sr-only" >Search</label>
                <div className="relative">
                    <div className={ `absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none`}>
                        <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke='blue' strokeOpacity={`${modalStatus? 0.4 : 1}`} strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                    </div>
                    <input type="search" id="search" className={`w-102  ${modalStatus? 'border-none backdrop-blur-xs placeholder:blur-xs':'border-2 border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-400 block  p-2 ps-9  text-sm rounded-xl `}placeholder="Search" required />
                </div>
            </form>

        </>
    )
}