
import React, { useState } from 'react'
import {DropzoneDialog} from 'react-mui-dropzone'
import Button from '@mui/material/Button';
const DropzoneAreaExample=()=> {

    const[open,setOpen]=useState(false);
    const[files,setFiles]=useState([]);
  const  handleSave=(files)=> {
       setFiles(files)
       setOpen(false)
    }
        return (
            <div>
                <Button onClick={()=>setOpen(true)}>
                  Add Image
                </Button>
                <DropzoneDialog
                    open={open}
                    onSave={()=>handleSave.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={()=> setOpen(false)}
                />
            </div>
        );
    }
export default DropzoneAreaExample