import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  const navbarStyle = {
    backgroundColor: 'rgb(233,229,221)',
  }

  return (
    <div className='nav-container'>
      <Navbar expand="lg" style={navbarStyle}>
        <Container>
          <Navbar.Brand href="/">Wumpy's Bike Builder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Build">Build</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
                <Nav.Link href="/Login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header