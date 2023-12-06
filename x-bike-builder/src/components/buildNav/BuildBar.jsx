import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import BuildModal from '../currentBuild/CurrentBuild';
import axios from 'axios';
import { BASE_URL } from '../../global'
import './buildnav.css'

function BuildBar(props) {


  const inputStyle = {
		fontFamily: 'Manrope, sans-serif',
		fontWeight: '300',
	}
  const buttonStyle = {
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '300',
  }

  return (
    <>
      <Navbar className='build-nav' bg="light" data-bs-theme="light">
        <BuildModal userData={props.userData} setUserData={props.setUserData} setUpdateUser={props.setUpdateUser} fetchUserData={props.fetchUserData}/>
			  <div className='total-wrapper'>
					<button type="button" className="build-btn" style={buttonStyle}>
						{/* onClick='placeholderFunction()'> */}
						Name ya build ya fuck!
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