import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getUsers, addUser } from "../../Store/UserSlice";
import User from "./User";
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

const UsersComp = () => {
    
    const dispatch = useDispatch();
    dispatch(getUsers())
    const users = useSelector(x => x.usersSlice.users)
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const saveTask = () => {
        
        dispatch(addUser({name:text,address:address,email:email,phone:phone}));
        handleClose()
    }

    return (
        <>
            <h1>Our Users </h1>
            <Button variant="outlined" sx={{ color: teal['500'] }} color='inherit' onClick={() => handleClickOpen()} >
                הוספת משתמש חדש
                {<Add />}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" sx={{ color: teal['500'] }} dir='rtl'>
                    משתמש חדש
                    <BubbleChart />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextField id="outlined-basic" label="שם המשתמש" variant="outlined" onChange={(e) => setText(e.target.value)} />
                        <br />
                        <TextField id="outlined-basic" label="כתובת" variant="outlined" onChange={(e) => setAddress(e.target.value)} />
                        <br />
                        <TextField id="outlined-basic" label="כתובת אימייל" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <TextField id="outlined-basic" label="טלפון" variant="outlined" onChange={(e) => setPhone(e.target.value)} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => saveTask()} sx={{ color: teal['500'] }}>שמור</Button>
                </DialogActions>
            </Dialog>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {
                    users.map((item) => {
                        return (
                            <>

                                <User items={item} />

                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default UsersComp