export const Input = ({ ref,placeholder }: { ref?: any ,placeholder:string}) => {
    return <>
        <input ref={ref} placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded m-2 "></input>
    </>
}