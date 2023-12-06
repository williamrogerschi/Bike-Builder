import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import BuildModal from '../buildModal/BuildModal';
import './buildbar.css'

function BuildBar(props) {

//   const inputStyle = {
// 		fontFamily: 'Manrope, sans-serif',
// 		fontWeight: '300',
// 	}

  const buttonStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '300',
	backgroundColor: 'rgb(233,229,221)',
  }

  return (
    <>
      <Navbar className='build-nav' bg="light" data-bs-theme="light">
	  <BuildModal
			userData={props.userData}
			// setUserData={props.setUserData}
			// setUpdateUser={props.setUpdateUser}
			fetchUserData={props.fetchUserData}
			createNewBuild={props.createNewBuild}
			/>
			  <div className='total-wrapper'>
					<button type="button" className="build-btn" style={buttonStyle}>
						{/* onClick='placeholderFunction()'> */}
						Name Build
					</button>
					<button
						type="button"
						className="delete-build-btn"
						style={buttonStyle}
						onClick={props.deleteBuildAndCreateNew}>Delete Build</button>
        	 </div>
      </Navbar>
    </>
  );
}

export default BuildBar;