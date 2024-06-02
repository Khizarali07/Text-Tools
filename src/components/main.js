import './main.css';
import React, { useState } from 'react';


export default function Main (){
  const [text,setText] = useState("");
  return (
    <div id='body'> 
    <div id='bar'>
      <textarea id='textbar' placeholder='Enter your text here !!!' value={text} onChange={()=>{const x=document.getElementById('textbar'); setText(x.value);}}/>
    </div>
      <div id='button'>
      <button className='but' onClick={()=>{const set=text.toUpperCase(); setText(set);}}>Convert to Uppercase</button>
      <button className='but' onClick={()=>{const set=text.toLowerCase(); setText(set);}}>Convert to Lowercase</button>
      <button className='but' onClick={()=>{setText('');}}>Clear Text</button>
      <button className='but' onClick={copy}>Copy Text</button>
      <button className='but' onClick={()=>{extra(text,setText)}}>Remove Extra Spaces</button>
      </div>

      <div>
      <h2>Your text summary :</h2>
        <p>{text.length} Words and {text.split(" ").filter((value)=>{return value.length!==0;}).length} Characters</p>
        <p>{(text.split(" ").filter((value)=>{return value.length!==0;}).length * 0.21).toPrecision(5)} Second to Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
    )
}

function extra (text,setText){
  let x=text.split(" ").filter((value)=>{return value.length!==0;});
  let y=x.join(" ");
  setText(y);
}

function copy (){
  let x=document.getElementById('textbar');
  navigator.clipboard.writeText(x.value);
}