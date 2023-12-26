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