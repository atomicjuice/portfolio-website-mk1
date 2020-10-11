import React from 'react'
import Nav from 'react-bootstrap/Nav'

class NavBar extends React.Component {
  render() {
    return( 
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
      </Nav.Link>
      </Nav.Item>
    </Nav>
    )
  }
}

export default NavBar;