import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { BASE_URL } from '../../global'
import './namemodal.css'

function NameModal(props) {

    const [buildName, setBuildName] = useState("")


  const buttonStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '300',
	backgroundColor: 'rgb(233,229,221)',
  }

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const setNameBuild = async () => {
    try {
      if (props.userData && props.userData.current_build) {
        console.log('userData on NameModal:', props.userData)
        const buildId = props.userData.current_build
        const response = await axios.put(`${BASE_URL}builds/${buildId}`, {
            name: buildName
        })

        if (response.status === 200) {
            console.log(
                `Successfully added ${buildName} to current build.`
            )
        } else {
            console.error('Failed to add name to current build.')
        }
        await props.fetchUserData()
        await props.fetchCurrentBuild()
        await props.fetchCurrentBuildName()
        handleClose(setShow(true))
      } else {
        console.log('Cannot set name, no current build.')
      }
    } catch (error) {
        console.error('Error:', error)
    }
}



  return (

    <>
      <button className='build-btn' variant="primary" onClick={handleShow} style={buttonStyle}>
        Name Build
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <input 
            type="text" 
            placeholder='build name'
            value={buildName}
            onChange={(e) => setBuildName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button className='build-btn' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='build-btn' variant="primary" onClick={setNameBuild}>
            Save Build Name
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NameModal