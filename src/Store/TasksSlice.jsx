import { createSlice } from '@reduxjs/toolkit'

const d=new Date();
const nowDate=d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
const initVal = {
    task: [
        { id: 1, name: "words", time: nowDate, isComplete: false },
        { id: 2, name: "english", time: nowDate, isComplete: false },
        { id: 3, name: "abc", time: nowDate, isComplete: false },
        { id: 4, name: "kids", time: nowDate, isComplete: false },],
    lastId: 5
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initVal,
    reducers: {
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
          
            console.log(action.payload);
            state.task = state.task.filter((item) => {
                return item.id != action.payload
            })
        },
        editTask: (state, action) => {
            state.task.map((item) => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name
                    item.isComplete = action.payload.isComplete
                }
            })
        }
    }
})
export const { addTask, deleteTask, editTask } = tasksSlice.actions
export default tasksSlice.reducer
// const TodoSlice = createSlice({
//     name: "arr",
//     initialState: todoArr,
//     reducers: {
//         todoGet: (state, actions) => {
//             const [httpGet, res] = UseGet()
//             httpGet('https://localhost:7007/api/Todo')
//             state.arr = res
//         },
//         todoPost: (state, actions) => {
//             const httpPost = UsePost()
//             // const d = new Date()
//             // const nowDate = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()
//             // const todo = {id: ++state.id, description: actions.payload, date: nowDate, isComplete: false}
//             // state.arr = [...state.arr, todo]
//             httpPost('https://localhost:7007/api/Todo', actions.payload)
        