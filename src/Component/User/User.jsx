import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteUser, editUser, } from "../../Store/UserSlice";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Mode from '@mui/icons-material/Mode';
import Send from '@mui/icons-material/Send';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { pink, cyan, teal, lime } from '@mui/material/colors';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const User = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [isComplete, setIsComplete] = useState(props.items.isComplete)
    const [time, setTime] = useState(props.items.time)
    const [name, setName] = useState(props.items.name)
    const [address, setAddress] = useState(props.items.address)
    const [email, setEmail] = useState(props.items.email)
    const [phone, setPhone] = useState(props.items.phone)
    const toEdit = () => {
        setEdit(false)
        dispatch(editUser({ id: props.items.id, name: name, address: address, email: email, phone: phone }))
    }
    return (
        <>
            {!edit ?
                <Card sx={{ width: '15%',margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
                    <CardContent>
                        <Typography gutterBottom variant="div" component="div" sx={{ color: teal['900'] }}>
                        <h5>שם פרטי:</h5>{props.items.name}
                        </Typography>
                        <Typography gutterBottom variant="div" component="div" sx={{ color: teal['900'] }}>
                        <h5>כתובת מגורים:</h5>{props.items.address}
                        </Typography>
                        <Typography gutterBottom variant="div" component="div" sx={{ color: teal['900'] }}>
                        <h5>אימייל:</h5>{props.items.email}
                        </Typography>
                        <Typography gutterBottom variant="div" component="div" sx={{ color: teal['900'] }}>
                          <h5>טלפון:</h5>{props.items.phone}
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button size="xxlarge" onClick={() => { dispatch(deleteUser(props.items.id)) }}><DeleteForeverIcon size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                        <Button size="xxlarge" onClick={() => setEdit(true)}><Mode size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                    </CardActions>
                </Card>
                : <Card sx={{ width: '15%', margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
                    <CardContent>
                        <TextField id="outlined-basic" variant="outlined" label="שם המשתמש" defaultValue={props.items.name} onChange={(e) => setName(e.target.value)} sx={{marginBottom:'10px'}}/>
                       
                        <TextField id="outlined-basic" variant="outlined" label="כתובת מגורים" defaultValue={props.items.address} onChange={(e) => setAddress(e.target.value)} sx={{marginBottom:'10px'}} />
                        <TextField id="outlined-basic" variant="outlined" label="אימייל" defaultValue={props.items.email} onChange={(e) => setEmail(e.target.value)}  sx={{marginBottom:'10px'}}/>
                        <TextField id="outlined-basic" variant="outlined" label="טלפון" defaultValue={props.items.phone} onChange={(e) => setPhone(e.target.value)} />
                    </CardContent>

                    <CardActions >
                        <Button size="xxlarge" onClick={() => toEdit()} ><Send size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                    </CardActions>
                </Card>
            }
        </>
    )
}
export default User