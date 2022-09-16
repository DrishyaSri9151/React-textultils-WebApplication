import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React , {useState} from 'react'

function App() {

  const [Mode, setMode] = useState('light'); //whether dark mode is enabeled or not ....

  const toggleMode = () => {
    if(Mode === 'light')
    {
        setMode('dark');
        document.body.style.backgroundColor='#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor='White';
    }
  }



  return (
    <>
     <div>
      <Navbar title='TextUtils'  about='About-us' mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textarea  heading='Enter your Text Below :-' mode={Mode} />
        {/* <About/> */}
      </div>
     </div>
    </>
  );
}

export default App;
