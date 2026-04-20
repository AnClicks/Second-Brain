import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
export function useContent() {
    const [contents, setContents] = useState([]);
    function refresh() {
        const response = axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response) => {
            console.log(response)
            setContents(response.data.content)
        })
    }
    useEffect(() => {
        refresh();
        let interval  = setInterval(
            () => {refresh()}, 5 * 1000)

            return () =>{
                clearInterval(interval)
            }
        
        }, [])


    return {contents,refresh}
}
