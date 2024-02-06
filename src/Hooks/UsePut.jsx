
import axios from 'axios'

const UsePut = () => {
    const put = async (url,data) => {
        try {
          debugger
          await axios.put(url,data)

        } catch (error) {
           console.log("error");
        }
    }
    return put
}

export default UsePut