import { useState } from "react";
import axios from 'axios'

const useDelete = () => {
    const [result, setResult] = useState([])
    const deleteData= async (url) => {
        try {
            const response = await axios.delete(url)
            setResult(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return {deleteData, result}
}

export default useDelete