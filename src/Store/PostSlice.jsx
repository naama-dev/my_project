import { createSlice } from '@reduxjs/toolkit'
import { useNow } from "react";

const initVal = {
    post: [
        { id: 1, content: "words", time: useNow },
        { id: 2, content: "english", time: useNow },
        { id: 3, content: "abc", time: useNow },
        { id: 4, content: "kids", time: useNow },],
    lastId: 5
}

const postsSlice = createSlice({
    name: "posts",
    initialState: initVal,
    reducers: {
        addPost: (state, action) => {
            const newPost = {
                id: state.lastId,
                content: action.payload,
                time: useNow,
            };
            return {
                state,
                post: [...state.post, newPost],
                lastId: (newPost.id) + 1,
            }
        },
        deletePost: (state, action) => {
            state.post = state.post.filter((item) =>{
                return item.id != action.payload
            })
        //    state.post= state.post.filter((post) => post.id !== action.payload);
        console.log(state.post);
        },
        editPost: (state, action) => {
            state.post.map((item) => {
                if (item.id === action.payload.id) {
                    item.content = action.payload.content
                }
            })
        }
    }
})
export const { addPost, deletePost, editPost } = postsSlice.actions
export default postsSlice.reducer