import { createSlice } from '@reduxjs/toolkit'

const initVal = {
    task: [
        { id: 0, name: "words", author: "yossi", price: 50 },
        { id: 1, name: "kids", author: "lea", price: 45 },
        { id: 2, name: "english", author: "naama", price: 30 },
        { id: 3, name: "abc", author: "tamar", price: 60 },],
    lastId: 3
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initVal,
    reducers: {
        addTask: (state, action) => {
            const details = { id: state.lastId+1, name: action.payload, author: action.payload, price: state.lastId * 10 }
            state.task = [...state.task, details]
            state.lastId+=1
        },
        deleteTask: (state, action) => {
            state.task = state.task.filter((item) => {
                return item.id!=action.payload
            })
        },
        editTask: (state, action) => {
            const x=state.task.find((item)=>{
                return item.id==action.payload.id
            })
            console.log(x.name);
        //     deleteTask(x);
            const name1="";
           
          state.task={...state.task,id:x.id,name:name1,author:name1,price:x.price}
        console.log("edit"+action.payload.id);
        }
    }
})
export const { addTask, deleteTask, editTask } = tasksSlice.actions
export default tasksSlice.reducer