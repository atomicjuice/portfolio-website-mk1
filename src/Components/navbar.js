import React from 'react'
// import Nav from 'react-bootstrap/Nav'
import { Nav, Navbar} from 'react-bootstrap';
import '../extraCSS/navbar.css'

class NavBar extends React.Component {
  
  
navScrollAnimation = () => { window.onscroll = function() {
  let prevScrollpos = window.pageYOffset;
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("extraStuff").style.top = "0";
  } else {
    document.getElementById("extraStuff").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}}
  render() {
    this.navScrollAnimation()
    return (
      <Navbar variant="dark" sticky='top' id='extraStuff' >
        <Navbar.Brand href="#home" id='brand' >Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" id='navlink2' className='navlink' >1. About</Nav.Link>
          <Nav.Link href="#features" id='navlink2' className='navlink' >2. Projects</Nav.Link>
          <Nav.Link href="#pricing" id='navlink3' className='navlink' >3. Contact</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar;