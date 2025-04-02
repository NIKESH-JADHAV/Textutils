import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './Alert';

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(msg,type)=>{
    setAlert({
      message:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)},1500);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(26 37 126)';
      showAlert("Dark mode is enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enable","success");
    }
  }
  return (
    <>
    {/*<BrowserRouter> */}
      <Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      <div className="container my-3">
        {/*/user-->component 1
        /user/home--> component 2*/}
        {/*<Routes>
        <Route exact path="/about" element={<About />} />*/}
          {/*<Route exact path="/" element={*/}<Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />{/*}} />*/}
        {/*</Routes>*/}
      </div>
    {/*</BrowserRouter>*/}
  </>
  );
}

export default App;
