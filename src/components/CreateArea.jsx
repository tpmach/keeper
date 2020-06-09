import React, { useState } from 'react'
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
  const [note , setNote] = useState({
    title:"",
    content:""
  })

  const [zoomIn, setZoomIn] = useState(false)

  function handleTextAreaClick(){
    setZoomIn(true)
  }

  function handleChange(event) {
    const {name, value} = event.target

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    }) 
  }

  function submitNote(event) {
    props.onAdd(note)
    setZoomIn(false)
    setNote({
      title:"",
      content: ""
    })
    event.preventDefault()
  }

  return (
    <div>
      <form className="create-note">
        {zoomIn && 
          <input 
            onChange={handleChange} 
            name="title" 
            placeholder="Title" 
            value={note.title} 
            autoFocus = {true}  
          />
        }
        <textarea 
          onClick={handleTextAreaClick} 
          onChange={handleChange} 
          name="content" 
          placeholder="Take a note..." 
          rows= {zoomIn ? "3" : "1"}
          value={note.content}/>
        
    
        <Zoom in={zoomIn}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
        
      </form>
    </div>
  )
}

export default CreateArea