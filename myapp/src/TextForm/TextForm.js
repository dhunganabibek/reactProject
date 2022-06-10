import React,{useState} from 'react'
import './TextForm.css'

export default function TextForm(props) {
    const [text,setText] = useState("Enter your text");
    // text = "New Text"

    // setText("New Text");
  return (
    <>
        <div className="mb-3">
                <label for="input Text" class="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" value={text} id="input Text" rows="7"></textarea>
        </div>

        <button className="btn btn-primary">Convert to Upper Case</button>
        <br />
        <br />
    </>
    
  )
}
