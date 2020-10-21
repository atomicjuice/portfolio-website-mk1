import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Components/main'
import Navbar from './Components/navbar'
// import './App.css';

function App() {
  return (
    <div>
      <Navbar sticky="top" />
      <Main/>
    </div>
  );
}

export default App;
