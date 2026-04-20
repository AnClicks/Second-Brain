export const Input = ({ ref,placeholder,color='black'}: { ref?: any ,placeholder:string , color:any}) => {
    return <>
        <input ref={ref} placeholder={placeholder} type={"text"} className={`px-4 py-2 border-2 border-${color} rounded m-2  focus:outline-none focus:ring-2 focus:ring-blue-400`}></input>
    </>
}