import { createSlice } from '@reduxjs/toolkit'
import { useNow } from "react";
import axios from "axios";

const initVal = {
    task: [
        { id: 1, name: "words", time: useNow, isComplete: false },
        { id: 2, name: "english", time: useNow, isComplete: false },
        { id: 3, name: "abc", time: useNow, isComplete: false },
        { id: 4, name: "kids", time: useNow, isComplete: false },],
    lastId: 5
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initVal,
    reducers: {
        Task: (state, action) => {
            const newTask = {
                id: state.lastId,
                name: action.payload,
                time: useNow,
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