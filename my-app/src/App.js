import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';

function App() {
  return (
    <>
     <div>
      <Navbar title='TextUtils'  about='About-us' />
      <div className="container my-3">
        <Textarea  heading='Enter your Text Below :-' />
        <About/>
      </div>
     </div>
    </>
  );
}

export default App;
