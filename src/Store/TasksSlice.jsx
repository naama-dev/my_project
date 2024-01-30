import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../Hooks/UseGet';
import UsePut from '../Hooks/UsePut';
import UseDelete from '../Hooks/UseDelete'
const d=new Date();
const nowDate=d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
const initVal = {
    task: []
        // { id: 1, name: "words", time: nowDate, isComplete: false },
        // { id: 2, name: "english", time: nowDate, isComplete: false },
        // { id: 3, name: "abc", time: nowDate, isComplete: false },
        // { id: 4, name: "kids", time: nowDate, isComplete: false },],
    // lastId: 5
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
        // todoGet: (state, actions) => {
        //     const [httpGet, res] = UseGet()
        //     httpGet('https://localhost:7007/api/Todo')
        //     state.arr = res
        // },
        addTask: (state, action) => {
            const newTask = {
                id: state.lastId,
                name: action.payload,
                time: nowDate,
                isComplete: false,
            };
            return {
                state,
                task: [...state.task, newTask],
                lastId: (newTask.id) + 1,
            }
        },
        deleteTask: (state, action) => {
            const httpDelete = UseDelete()
            httpDelete('https://localhost:44316/tododelete/'+action.payload.id)
        },
        editTask: (state, action) => {
            debugger
         const httpput=UsePut()
         console.log(action.payload.id);
         httpput('https://localhost:44316/todoput/'+action.payload.id,action.payload)

        }
    }
})
export const { getTasks,addTask, deleteTask, editTask } = tasksSlice.actions
export default tasksSlice.reducer
// todoPut: (state, actions) => {
//     const httpPut = UsePut()
//     httpPut('https://localhost:7007/api/Todo/'+actions.payload.id, actions.payload)
// },
// todoCompletePut: (state, actions) => {
//     const httpPut = UseIdPut()
//     httpPut('https://localhost:7007/api/Todo/complete/'+actions.payload)
// },
// todoDelete: (state, actions) => {
//     const httpDelete = UseDelete()
//     httpDelete('https://localhost:7007/api/Todo/'+actions.payload)
// }
// }