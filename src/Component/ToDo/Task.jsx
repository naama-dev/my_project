import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteTask, editTask,taskCompletePut } from "../../Store/TasksSlice";
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
    const [time, setTime] = useState(props.items.createDate)
    const [name, setName] = useState(props.items.name)
    const toEdit = () => {
        setEdit(false)
        dispatch(editTask({id: props.items.id, name: name, createDate: time, isComplete: isComplete}))
    }
    const complete=(id)=>{
        setIsComplete(!isComplete)
        dispatch(taskCompletePut(id))
    }
    return (
        <>
            {!edit ?
              <Card sx={{ width:'15%', margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.items.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.items.createDate}
                        </Typography>
                    </CardContent>
                    <Checkbox
                        {...label}
                        defaultNotChecked
                        sx={{
                            color: teal['500'],
                            '&.Mui-checked': {
                                color: teal['500'],
                            },
                        }}
                        disabled
                    />
                    <CardActions >
                        <Button size="xxlarge" onClick={() => { dispatch(deleteTask(props.items.id)) }}><DeleteForeverIcon size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                        <Button size="xxlarge" onClick={() => setEdit(true)}><Mode size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                    </CardActions>
                </Card>
                : <Card sx={{ width:'15%', margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
                    <CardContent>
                        <TextField id="outlined-basic"  variant="outlined"  defaultValue={props.items.name} onChange={(e) => setName(e.target.value)} />
                    </CardContent>
                    {props.items.isComplete ?
                        <Checkbox
                            {...label}
                            defaultChecked
                            sx={{
                                color: teal['500'],
                                '&.Mui-checked': {
                                    color: teal['500'],
                                },
                            }}
                            onClick={() => complete(props.items.id)}
                        />
                        : <Checkbox
                            {...label}
                            defaultNotChecked
                            sx={{
                                color: teal['500'],
                                '&.Mui-checked': {
                                    color: teal['500'],
                                },
                            }}
                            onClick={() => complete(props.items.id)}
                        />
                    }
                    <CardActions >
                        <Button size="xxlarge" onClick={()=>toEdit()} ><Send size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                    </CardActions>
                </Card>}
        </>
    )
}
export default Task