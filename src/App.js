import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Main from './Components/main'
import Navbar from './Components/navbar'
import Aboutme from './Components/Sections/aboutme';
// import './App.css';

class App extends Component {
  state = {
    screenWidth: window.screen.width
  }

  forPhone = () => {
    if (this.state.screenWidth <= 400){
      return <Navbar id="mobile" sticky="top" /> 
    }
  }
  render(){
  return (
    <div className='App' >
      {this.forPhone()}
      {/* <Navbar sticky="top" /> */}
      {/* <Main/> */}
      <Aboutme/>
    </div>
  );
}}

export default App;
