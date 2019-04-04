import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class Navigation extends Component {
  render() {
    const navBarStyling = {
      backgroundColor: '#6C9F9B'
    }
    const navStyle = {
      fontStyle: '',
      color: 'white'
    }
    const brandStyle = {
      fontStyle: '',
      color: 'white'
    }
    return (
      <Navbar style={navBarStyling} expand="md">
        <Navbar.Brand style={brandStyle} href="/">
          Ndoors
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={navStyle} href="/">
              Översikt
            </Nav.Link>
            <Nav.Link style={navStyle} href="/">
              Mina ansökningar
            </Nav.Link>
            <Nav.Link style={navStyle} href="/">
              Mina referensr
            </Nav.Link>
            <Nav.Link style={navStyle} href="/">
              Personer jag refererat
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
