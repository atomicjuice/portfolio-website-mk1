import React from 'react'
// import Nav from 'react-bootstrap/Nav'
import { Nav, Navbar} from 'react-bootstrap';
import '../extraCSS/navbar.css'

class NavBar extends React.Component {
  
  

  render() {
    return (
      <Navbar variant="dark" sticky='top' id='extraStuff' >
        <Navbar.Brand href="#home" id='brand' >Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" id='navlink1' className='navlink' >1. About</Nav.Link>
          <Nav.Link href="#features" id='navlink2' className='navlink' >2. Projects</Nav.Link>
          <Nav.Link href="#pricing" id='navlink3' className='navlink' >3. Contact</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar;