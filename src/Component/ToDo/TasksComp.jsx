import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTask} from "../../Store/TasksSlice";
import Task from "./Task";
import Button from '@mui/material/Button';
import { teal } from '@mui/material/colors';
import Add from '@mui/icons-material/Add';
import BubbleChart from '@mui/icons-material/BubbleChart';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import useGet from '../../Hooks/UseGet'
const TasksComp = () => {

    const [open, setOpen] = useState(false);
    const [text, setText] = useState("")
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const saveTask=(text)=>{
        dispatch(addTask(text))
        handleClose()
    }
    const{get,result}=useGet()
    const myTasks = useSelector(x => x.tasksSlice.task)
    const dispatch = useDispatch()
    return (
        <>
            <h1>My Tasks</h1>
            <Button variant="outlined" sx={{ color: teal['500'] }} color='inherit' onClick={() => handleClickOpen()} >
                הוספת משימה חדשה
                {<Add />}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" sx={{ color: teal['500'] }} dir='rtl'>
                    משימה חדשה
                    <BubbleChart/>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextField id="outlined-basic" label="שם המשימה"  variant="outlined"  onChange={(e) => setText(e.target.value)} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => saveTask(text)} sx={{ color: teal['500'] }}>שמור</Button>
                </DialogActions>
            </Dialog>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            {
                myTasks.map((item) => {
                    return (
                        <>
                        
                        <Task items={item} />
                      
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export default TasksComp