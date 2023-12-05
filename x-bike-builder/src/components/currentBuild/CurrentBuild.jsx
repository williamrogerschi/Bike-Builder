import "./currentBuild.css";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios'
import { BASE_URL } from '../../global'

function BuildModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const buttonStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '300',
  }

  return (
    <>
    <div className="user-builds">
      <Button variant="light" style={buttonStyle} onClick={handleShow}>
        Builds
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={buttonStyle}>Builds List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  );
}

export default BuildModal