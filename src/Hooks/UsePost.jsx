import { useState } from "react";
import axios from 'axios'

const UsePost = () => {
    const [result, setResult] = useState([])
    const post = async (url,data) => {
        try {
            const response = await axios.post(url,data)
            setResult(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return {post, result}
}

export default UsePost
