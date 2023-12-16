import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from "../../Store/PostSlice";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { grey, teal } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Button from '@mui/material/Button';
import Mode from '@mui/icons-material/Mode';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TextField from '@mui/material/TextField';
import Send from '@mui/icons-material/Send';

const Post = (props) => {
    const dispatch = useDispatch()
    const [readMore, setReadMore] = useState(false);
    const [cntLike, setCntLike] = useState(0)
    const [words, setWords] = useState((props.items.content).slice(0, 50))
    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState(props.items.content)
    const toEdit = () => {
        setEdit(false)
        setWords((content).slice(0,50))
        dispatch(editPost({ id: props.items.id, content: content, time: props.items.time }))
    }
    return (
        <>
            {!edit ?
                <Card sx={{ maxWidth: 300, margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
                    {!readMore ?
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {words}
                            </Typography>
                            <Button size="xxlarge" onClick={() => setReadMore(true)} ><ExpandMore size="xxlarge" sx={{ color: grey['800'] }} /></Button>
                        </CardContent>
                        :
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {props.items.content}
                            </Typography>
                            <Button size="xxlarge" onClick={() => setReadMore(false)} ><ExpandLess size="xxlarge" sx={{ color: grey['800'] }} /></Button>
                        </CardContent>
                    }
                    <CardActions >
                        <Button size="xxlarge" onClick={() => {dispatch(deletePost(props.items.id))}}><DeleteForeverIcon size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                        <Button size="xxlarge" onClick={() => setEdit(true)}><Mode size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                    </CardActions>
                    {cntLike <= 0 ?
                        <Button size="xxlarge" onClick={() => setCntLike(cntLike + 1)} ><FavoriteBorder size="xxlarge" sx={{ color: grey['800'] }} /><div>{cntLike}</div></Button>
                        : <Button size="xxlarge" onClick={() => setCntLike(cntLike + 1)} ><Favorite size="xxlarge" sx={{ color: teal['500'] }} /><div>{cntLike}</div></Button>
                    }
                </Card>
                : <Card sx={{ maxWidth: 300, margin: 'auto', marginTop: '10px', borderStyle: 'solid', borderColor: teal['500'] }}>
                    <CardContent>
                        <TextField id="outlined-basic" variant="outlined" defaultValue={props.items.content} onChange={(e) => setContent(e.target.value)} />
                    </CardContent>
                    <CardActions >
                        <Button size="xxlarge" onClick={() => toEdit()} ><Send size="xxlarge" sx={{ color: teal['500'] }} /></Button>
                    </CardActions>
                </Card>
            }
        </>
    )
}
export default Post