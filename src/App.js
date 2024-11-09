import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); // Current theme color
  const [textareaBackground, setTextareaBackground] = useState('white'); // textarea background color
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2500);
  };

  const changeThemeColor = (color) => {
    setMode(color);
    const colors = {
      light: '#fff',
      dark: '#333',
      blue: '#007bff',
      green: '#28a745',
      red: '#dc3545',
      yellow: '#ffc107'
    };
    document.body.style.backgroundColor = colors[color] || '#fff';
    setTextareaBackground(colors[color]); // Set textarea background color
    showAlert(`${color.charAt(0).toUpperCase() + color.slice(1)} theme has been enabled`, "success");
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} changeThemeColor={changeThemeColor} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact 
              path="/" 
              element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} textareaBackground={textareaBackground} />} 
            />
            <Route 
              path="/about" 
              element={<About mode={mode}/>} 
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
