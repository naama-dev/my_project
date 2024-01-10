// import React, {useState} from 'react'
// import {DropzoneArea} from 'react-mui-dropzone'

// const DropzoneAreaExample= ()=>{

//   const[files,setFiles]=useState([]);

//  const handleChange=(files)=>{
//    setFiles(files)
//   }
//     return (
//       <DropzoneArea
//         onChange={()=>handleChange.bind(this)}
//         />
//     )
// }

// export default DropzoneAreaExample;
import React, { useState } from 'react'
import {DropzoneDialog} from 'react-mui-dropzone'
import Button from '@mui/material/Button';
const DropzoneAreaExample=()=> {

    const[open,setOpen]=useState(false);
    const[files,setFiles]=useState([]);
  const  handleSave=(files)=> {
        //Saving files to state for further use and closing Modal.
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