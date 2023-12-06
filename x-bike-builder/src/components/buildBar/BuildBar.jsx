import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import BuildModal from '../buildModal/BuildModal';
import NameModal from '../nameModal/NameModal';
import './buildbar.css'

function BuildBar(props) {

  const buttonStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '300',
	backgroundColor: 'rgb(233,229,221)',
  }

  return (
    <>
      <Navbar className='build-nav' bg="light" data-bs-theme="light">
		<div className='build-name-container'>
			<p>PH</p>
		</div>
	  <BuildModal
			userData={props.userData}
			fetchUserData={props.fetchUserData}
			createNewBuild={props.createNewBuild}
			/>
			  <div className='total-wrapper'>
		<NameModal
				userData={props.userData}
				fetchUserData={props.fetchUserData}
				fetchCurrentBuild={props.fetchCurrentBuild} />
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