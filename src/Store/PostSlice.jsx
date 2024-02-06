import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../Hooks/UseGet';
import UsePut from '../Hooks/UsePut';
import UseDelete from '../Hooks/UseDelete';
import UsePost from '../Hooks/UsePost';

const initVal = {
    post: []
}

const postsSlice = createSlice({
    name: "posts",
    initialState: initVal,
    reducers: {
        getPost:(state,action)=>{
            const[get,res]=UseGet()
            get('https://localhost:44316/postget')
            state.post = res;
        },
        addPost: (state, action) => {
            const post=UsePost()
            post('https://localhost:44316/post-post',action.payload)
        },
        deletePost: (state, action) => {
          debugger
          const deleteData=UseDelete()
          deleteData('https://localhost:44316/post-delete'+action.payload)
        },
        editPost: (state, action) => {
            const put=UsePut()
            put('https://localhost:44316/post-put'+action.payload.id,action.payload)
        },
        postLike:(state,action)=>{
            const put=UsePut()
            put('https://localhost:44316/post-put-Like'+action.payload)
        }
    }
})
export const { getPost,addPost, deletePost, editPost,postLike } = postsSlice.actions
export default postsSlice.reducer