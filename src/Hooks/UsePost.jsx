
import axios from 'axios'

const UsePost = () => {
    const post = async (url,data) => {
        try {
            debugger
            await axios.post(url,data)
        } catch (error) {
           console.log("error");
        }
    }
    return post
}
export default UsePost
