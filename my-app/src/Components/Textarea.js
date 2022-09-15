import React, { useState } from "react";

export default function Textarea(props) {

    const handleonChange = (event) => {
        setText(event.target.value);
      }
      
    const handleUpcase = () => {
      // console.log("uppercase button was clicked");
        let m = text.toUpperCase();
        setText(m);
    }


    const handlelocase = () => {
      //console.log("lowercase button was clicked");
      let g = text.toLowerCase();
      setText(g);
    }

    const handleclcase = () => {
      //console.log("lowercase button was clicked");
      let g = "";
      setText(g);
    }

    const handleCopy = () => {
      var text = document.getElementById("myform");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
      let newtext = text.split(/[  ]+/);
      setText(newtext.join(" "))
    }

    //commit


    const handlecapitalizedcase = () => {
      console.log("capitalized button was clicked");
      let m;
      let g = text.split(" ");
      for(var i=0;i<g.length;i++)
      {
        g[i]=g[i].charAt(0).toUpperCase() + g[i].substring(1);
        m = g.join(" ");
      }
      setText(m);
    }






  const [text,setText] = useState('Enter Any Text Here');
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text}  onChange={handleonChange} id="myform" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpcase}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handlelocase}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclcase}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handlecapitalizedcase}>Capitalized Case</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <b>you can read your text in :- </b>
      <p>{0.008 * text.split(" ").length} minutes</p>
      <h2>Your text Preview : </h2>
      <p>{text}</p>
    </div>
    </>
  );
}
