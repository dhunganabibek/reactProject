import React,{useState} from 'react'
import './TextForm.css'

export default function TextForm(props) {
  
  const [text,setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleOnChnage = (event) => {
    setText(event.target.value)
    
  }

  const handleLowerClick = () => {
    setText(text.toLowerCase())
  } 

  
    // text = "New Text"

    //setText("New Text");
  return (
    <>
        <div className="mb-3">
                <label htmlFor="inputText" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" value={text} onChange={handleOnChnage} id="input Text" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lower Case</button>
        <br />
        <br />

        <div>
          <h1>Your text summary: </h1>
            {text.length} characters <br />
            {text.split(" ").length} words

         
        </div>
    </>
    
  )
}
