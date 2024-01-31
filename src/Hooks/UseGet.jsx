import {useState } from "react";
import axios from 'axios'

const UseGet = () => {
    const [result, setResult] = useState([])
   
    const get = async (url) => {
        try {
            const response = await axios.get(url)
            setResult(response.data)
        } catch (error) {
           console.log("error");
        }
    }
    return [get, result]
}
export default UseGet
