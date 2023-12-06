import "./currentBuild.css";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios'
import { BASE_URL } from '../../global'


function BuildModal(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const buttonStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '300',
  }

  const createNewBuild = async () => {
		try {
			const userId = props.userData._id
			// const buildId = props.userData.current_build
      await props.fetchUserData()
      
			const newBuildResponse = await axios.post(`${BASE_URL}builds`, {
				user: userId,
				frame: null,
				groupset: null,
				wheelset: null,
				tires: null,
				saddle: null,
				handlebar: null,
				stem: null,
				seatpost: null,
				total_price: '0',
				isCurrent: true,
				name: 'New Build',
			})
			const newBuildId = newBuildResponse.data.build._id
      const savedBuilds = props.userData.saved_builds
      const newSavedBuilds = [...savedBuilds, newBuildId]

			await axios.put(`${BASE_URL}users/${props.userData._id}`, {
				current_build: newBuildId,
        saved_builds: newSavedBuilds
			})
			await props.fetchUserData()
		} catch (error) {
			console.error('Error deleting or creating a new build:', error)
		}
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
          <Button variant="light" style={buttonStyle} onClick={createNewBuild}>Create Build</Button>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  )
}

export default BuildModal