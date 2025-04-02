import React,{useState} from 'react'


export default function Textform(props) {
    const [text,setText] = useState('');
    const handleUpclick=()=>{
       // console.log("button was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("text is converted to uppercase","success");
    }
    const handleLoclick=()=>{
      // console.log("button was clicked"+text);
       let newtext=text.toLowerCase();
       setText(newtext);
       props.showAlert("text is converted to lowercase","success");
      
   }

   const handlecopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text is copied","success");
   }
    const handleOnchange=(event)=>{
       // console.log("onchange");
       setText(event.target.value);
    }
    
    const handelclear=()=>{
      setText(" ")
      props.showAlert("text is removed","success");
    }

  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}} >
        <h1>{props.heading}</h1>
     <div className="mb-3"  style={{backgroundColor:props.mode==='dark'?'rgb(26 37 126)':'white'}}>
       <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'rgb(26 37 126)':'white',
        color:props.mode==='light'?'black':'white'
       }}id="mybox" rows="8" 
       ></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpclick}>convert to upper case</button>
     <button className="btn btn-primary mx-2" onClick={handleLoclick}>convert to lower case</button>
     <button className="btn btn-primary mx-2" onClick={handlecopy}>copy</button>
     <button className="btn btn-primary mx-2" onClick={handelclear}>clear</button>

</div>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes read</p>
    <h2>Prieview</h2>
    <p>{text.length>0?text:'Enter something in the text box to prieview it here'}</p>

   </div>
   </>
  );
}
