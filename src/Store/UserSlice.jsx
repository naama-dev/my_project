import { createSlice } from '@reduxjs/toolkit'

const initVal = {
    users: [
        { id: 1, name: "words",  address:"ritva",  email: "c0987@gmail.com", phone:"05552228888" },
        { id: 2, name: "english",address:"ezra",   email: "c0987@gmail.com", phone:"05552228888" },
        { id: 3, name: "abc",    address:"hapisga",email: "c0987@gmail.com", phone:"05552228888" },
        { id: 4, name: "kids",   address:"rashi",  email: "c0987@gmail.com", phone:"05552228888" },],
    lastId: 5
}

const usersSlice = createSlice({
    name: "users",
    initialState: initVal,
    reducers: {
        addUser: (state, action) => {
            
            const newUser= {
                id: state.lastId,
                name: action.payload.name,
                address:action.payload.address,
                email:action.payload.email,
                phone:action.payload.phone,
            };
            console.log(state.users);
            return {
                state,
                users: [...state.users, newUser],
                lastId: (newUser.id) + 1,
            }
        },
        deleteUser: (state, action) => {
            console.log(action.payload);
            state.users = state.users.filter((item) => {
                return item.id != action.payload
            })
            console.log(state.users);
        },
        editUser: (state, action) => {
            state.users.map((item) => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name
                    item.name=action.payload.name
                    item.address=action.payload.address
                    item.email=action.payload.email
                    item.phone=action.payload.phone
                }
            })
        }
    }
})
export const { addUser, deleteUser, editUser } = usersSlice.actions
export default usersSlice.reducer