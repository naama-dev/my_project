import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../Hooks/UseGet';
import UsePut from '../Hooks/UsePut';
import UseDelete from '../Hooks/UseDelete'
import UsePost from '../Hooks/UsePost';

const initVal = {
    task: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initVal,
    reducers: {
       getTasks:(state,action)=>{
            const[get,res]=UseGet()
            get('https://localhost:44316/todoget')
            state.task = res;
        },
        addTask: (state, action) => {
            debugger
            const post= UsePost()
            post('https://localhost:44316/todopost', action.payload)
     
        },
        deleteTask: (state, action) => {
            const deleteData = UseDelete()
            deleteData('https://localhost:44316/tododelete'+action.payload)
        },
        editTask: (state, action) => {
         debugger
         const httpput=UsePut()
         httpput('https://localhost:44316/todoput'+action.payload.id,action.payload)

        },
        taskCompletePut: (state, actions) => {
                debugger
                const httpPut = UsePut()
                httpPut('https://localhost:44316//todoputiscomplete'+actions.payload,actions.payload)
        }
    }
})
export const { getTasks,addTask, deleteTask, editTask,taskCompletePut } = tasksSlice.actions
export default tasksSlice.reducer
