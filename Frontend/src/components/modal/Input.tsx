export const Input = ({ onChange,placeholder }: { onChange: () => void }) => {
    return <>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded m-2 " onChange={onChange}></input>
    </>
}