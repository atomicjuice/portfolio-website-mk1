import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/navbar'
import Aboutme from './Components/Sections/aboutme';
import './App.css';

function App() {

  return (
    <div className='App' >
      <Navbar sticky="top" />
      <Aboutme/>
    </div>)
}

export default App;
