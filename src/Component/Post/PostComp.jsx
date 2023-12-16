import React, { useState } from "react";
import Post from "./Post";
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from "../../Store/PostSlice";
import { pink, lime, teal } from '@mui/material/colors';
import BubbleChart from '@mui/icons-material/BubbleChart';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
const PostComp = () => {

    const myPosts = useSelector(x => x.postsSlice.post)
    console.log(myPosts);
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("")
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const saveTask=(text)=>{
        dispatch(addPost(text))
        handleClose()
    }
    return (
        <>
            <h1>Our Posts</h1>
            <Button variant="outlined" sx={{ color: teal['500'] }} color='inherit' onClick={() => handleClickOpen()} >
               הוספת פוסט חדש
                {<Add />}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" sx={{ color: teal['500'] }} dir='rtl'>
                   פוסט חדש
                    <BubbleChart/>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextField id="outlined-basic" label="תוכן הפוסט"  variant="outlined"  onChange={(e) => setText(e.target.value)} sx={{direction:'rtl'}}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => saveTask(text)} sx={{ color: teal['500'] }}>שמור</Button>
                </DialogActions>
            </Dialog>
            {
                myPosts.map((item)=>{
                    return(
                        <Post items={item} />
                    )
                })
            }
        </>
    )
}
export default PostComp