import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode= ()=> {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#121212';
      showAlert('success','Dark mode has been enabled.')
      document.title='TextUtils - Dark Mode';
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('success','Light mode has been enabled.')
      document.title='TextUtils - Light Mode';
    }
  }
  const showAlert= (type,msg)=> {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} switchMode={toggleMode} />
      <Alert alert={alert}/>
      <div className={`container rounded-3 py-4 my-4 bg-${mode==='light'?'light':'dark'} text-${mode==='light'?'dark':'white'}`} >
      <TextForm heading="Enter the text to analyze below" mode={mode} alert={showAlert} />
      </div>
    </>
  );
}

export default App;
