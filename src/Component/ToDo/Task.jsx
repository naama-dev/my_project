import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from "../../Store/TasksSlice";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Mode from '@mui/icons-material/Mode';
import Send from '@mui/icons-material/Send';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';
import { pink, cyan, teal, lime } from '@mui/material/colors';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Task = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [isComplete, setIsComplete] = useState(props.items.isComplete)
    const [time, setTime] = useState(props.items.time)
    const [name, setName] = useState(props.items.name)
    const toEdit = () => {
        setEdit(false)
        dispatch(editTask({id: props.items.id, name: name, time: time, isComplete: isComplete}))
    }
    return (
        <>
            {!edit ?
                <Card sx={{ maxWidth: 200, margin: 'auto', marginTop: '10px', background: teal['500'] }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.items.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.items.time}
                        </Typography>
                    </CardContent>
                    <Checkbox
                        {...label}
                        defaultNotChecked
                        sx={{
                            color: lime['50'],
                            '&.Mui-checked': {
                                color: lime['50'],
                            },
                        }}
                        disabled
                    />
                    <CardActions >
                        <Button size="xxlarge" onClick={() => { dispatch(deleteTask(props.items.id)) }}><DeleteForeverIcon size="xxlarge" sx={{ color: lime['50'] }} /></Button>
                        <Button size="xxlarge" onClick={() => setEdit(true)}><Mode size="xxlarge" sx={{ color: lime['50'] }} /></Button>
                    </CardActions>
                </Card>
                : <Card sx={{ maxWidth: 200, margin: 'auto', marginTop: '10px', background: teal['500'] }}>
                    <CardContent>
                        <TextField id="outlined-basic"  variant="outlined"  defaultValue={props.items.name} onChange={(e) => setName(e.target.value)} />
                    </CardContent>
                    {props.items.isComplete ?
                        <Checkbox
                            {...label}
                            defaultChecked
                            sx={{
                                color: lime['50'],
                                '&.Mui-checked': {
                                    color: lime['50'],
                                },
                            }}
                            onClick={() => setIsComplete(!isComplete)}
                        />
                        : <Checkbox
                            {...label}
                            defaultNotChecked
                            sx={{
                                color: lime['50'],
                                '&.Mui-checked': {
                                    color: lime['50'],
                                },
                            }}
                            onClick={() => setIsComplete(!isComplete)}
                        />
                    }
                    <CardActions >
                        <Button size="xxlarge" onClick={()=>toEdit()} ><Send size="xxlarge" sx={{ color: lime['50'] }} /></Button>
                    </CardActions>
                </Card>}
        </>
    )
}
export default Task