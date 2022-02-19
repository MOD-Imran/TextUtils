import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');
    const handleChanges= (event) => {
        setText(event.target.value)
    }
    const transformChanges=()=>{
      setText(text.toUpperCase());
      props.alert('success','Converted to Uppercase')
    }
    const lowerCase=()=>{
      setText(text.toLowerCase());
      props.alert('success','Converted to LowerCase')
    }
    const clearText=()=>{
      setText("");
      props.alert('success','Text cleared')
    }
    const copyContent=()=> {
      let text=document.getElementById('exampleFormControlTextarea1');
      text.select()
      navigator.clipboard.writeText(text.value);
      props.alert('success','Copied to Clipboard!')
    }
    const handleExtraSpaces=()=> {
      let newText= text.split(/[ ]+/);
      setText(newText.join(' '))
      props.alert('success','Exta spaces removed')
    }
  return (
      <>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleChanges} rows="8" style={{ background: props.mode==='light'?'white':'#121212',color: props.mode==='light'?'black':'white' }}></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={transformChanges} >To Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={lowerCase}>To Lowercase</button>
          <button className="btn btn-success" onClick={copyContent}>Copy Text</button>
          <button className='btn btn-danger mx-1 float-end' onClick={handleExtraSpaces}>Remove Spaces</button>
          <button className="btn btn-danger mx-1 float-end" onClick={clearText}>Clear</button>
        </div>
        <div className="container my-3">
            <h2 className='border-bottom'>Your text summary</h2>
            <p>{text.length? text.split(" ").length: 0} words and {text.length} characters</p>
            <p>{text.length? [0.008 * (text.split(" ").length)] : 0} Minutes read</p>
            <h2 className='border-bottom'>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview here!'}</p>
        </div>
      </>
  )
}
