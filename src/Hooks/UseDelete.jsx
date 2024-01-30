
import axios from 'axios'

const UseDelete = () => {
  
    const deleteData= async (url) => {
        try {
       await axios.delete(url)
      
        } catch (error) {
            console.error(error)
        }
    }

    return deleteData
}

export default UseDelete




