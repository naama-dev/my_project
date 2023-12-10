import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Mode from '@mui/icons-material/Mode';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import Button from '@mui/material/Button';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Task = (props) => {
    return (
        <>
            <Card sx={{ maxWidth: 345, }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.items.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.items.author}
                    </Typography>
                </CardContent>
                <Checkbox
                {...label}
                    defaultNotChecked
                    sx={{
                        color: pink['A400'],
                        '&.Mui-checked': {
                            color: pink['A400'],
                        },
                    }}
                />
                <CardActions>
                    <Button size="small"><DeleteForeverIcon sx={{ color: pink['A400'] }} /></Button>
                    <Button size="small"><Mode sx={{ color: pink['A400'] }} /></Button>
                </CardActions>
            </Card>
        </>
    )
}
export default Task