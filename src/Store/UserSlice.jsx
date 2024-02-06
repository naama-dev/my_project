import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../Hooks/UseGet';
import UsePut from '../Hooks/UsePut';
import UseDelete from '../Hooks/UseDelete';
import UsePost from '../Hooks/UsePost';

const initVal = {
    users: []
}

const usersSlice = createSlice({
    name: "users",
    initialState: initVal,
    reducers: {
        getUsers:(state,action)=>{
            const[get,res]=UseGet()
            get('https://localhost:44316/userget')
            state.users=res;
        },
        addUser: (state, action) => {
            const post=UsePost()
            post('https://localhost:44316/userpost',action.payload)
        },
        deleteUser: (state, action) => {
            const deleteData=UseDelete()
            deleteData('https://localhost:44316/userdelete'+action.payload)
        },
        editUser: (state, action) => {
            debugger
           const put=UsePut()
           put('https://localhost:44316/userput'+action.payload.id,action.payload)
        }
    }
})
export const {getUsers, addUser, deleteUser, editUser } = usersSlice.actions
export default usersSlice.reducer