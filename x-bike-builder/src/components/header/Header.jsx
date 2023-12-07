import React, { useState, useEffect } from 'react'
import './header.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Login from '../login/Login'


const Header = (props) => {
  
  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      props.setUserData(parsedUserData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    props.setUserData(null);
  };

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const [showContainer, setShowContainer] = useState(false)

  const openContainer = () => {
    setShowContainer(true);
  }

  const closeContainer = () => {
    setShowContainer(false);
  }

  const navbarStyle = {
    backgroundColor: 'rgb(233,229,221)'
  }

  return (
    <>
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
            <Nav.Link className="nav-a" onClick={props.userData ? handleLogout : openContainer}>
              {props.userData ? `Welcome ${props.userData.user_name}!` : "Login"}
            </Nav.Link>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showContainer && <Login onClose={closeContainer} userData={props.userData} setUserData={props.setUserData} />}
    </div>
    </>
  )
}

export default Header