// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import axios from 'axios'
// import { BASE_URL } from '../../global'
// import "./buildmodal.css";


// function BuildModal(props) {

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const buttonStyle = {
//     fontFamily: 'Manrope, sans-serif',
//     fontWeight: '300',
//     backgroundColor: 'rgb(233,229,221)',
//     backgroundColor: 'white',
//   }


//   return (
//     <>
//     <div className="user-builds">
//       <Button className='build-btn' variant="light" style={buttonStyle} onClick={handleShow}>
//         Builds
//       </Button>

//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title style={buttonStyle}>Builds List</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
          
//         </Offcanvas.Body>
//       </Offcanvas>
//       </div>
//     </>
//   )
// }

// export default BuildModal

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';
import { BASE_URL } from '../../global';
import './buildmodal.css';

function BuildModal(props) {
  const [show, setShow] = useState(false);
  const [buildNames, setBuildNames] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const buttonStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '300',
    backgroundColor: 'rgb(233, 229, 221)',
  };

  const fetchBuildNames = async () => {

    const savedBuilds = props.userData.saved_builds
    if (savedBuilds && savedBuilds.length > 0) {
      const builds = [];

      for (const buildId of savedBuilds) {
        try {
          const response = await axios.get(`${BASE_URL}builds/${buildId}`);
          if (response.status === 200) {
            builds.push({ id: buildId, name: response.data.name} );
          }
        } catch (error) {
          console.error('Error fetching build name:', error);
        }
      }
      setBuildNames(builds)
    }
  }

  const handleBuildClick = async (buildId) => {
    try {
      const userId = props.userData._id
      console.log('buildId:', buildId)
      console.log('userdata in buildmodal:', props.userData)
      await axios.put(`${BASE_URL}users/${userId}`, {
        current_build: buildId,
      })
      await props.fetchUserData();
    } catch (error) {
      console.error('Error setting current build:', error);
    }
    handleClose();
  }

  useEffect(() => {
    if (show) {
      fetchBuildNames();
    }
  }, [show]);

  return (
    <>
      <div className="user-builds">
        <button className="build-btn" style={buttonStyle} onClick={handleShow}>
          View Builds
        </button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{backgroundColor: 'white', fontWeight: '300' , borderBottom: '1px solid grey'}}>Saved Builds</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className='build-list'>
              {buildNames.map((build, index) => (
                <button className='build-btn' key={index}
                onClick={() => handleBuildClick(build.id)}>{build.name}</button>
              ))}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default BuildModal;
