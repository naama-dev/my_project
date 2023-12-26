import { useState } from "react";
import axios from 'axios'

const UsePut = () => {
    const [result, setResult] = useState([])
    const put = async (url,data) => {
        try {
            const response = await axios.put(url,data)
            setResult(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return {put, result}
}

export default UsePut