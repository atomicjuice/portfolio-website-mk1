import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Main from './Components/main'
import Navbar from './Components/navbar'
import Aboutme from './Components/Sections/aboutme';
import './App.css';

function App() {
  return (
    <div className='App' >
      <Navbar sticky="top" />
      {/* <Main/> */}
      <Aboutme/>
    </div>
  );
}

export default App;
