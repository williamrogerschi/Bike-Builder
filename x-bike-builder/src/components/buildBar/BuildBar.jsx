import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import BuildModal from '../buildModal/BuildModal';
import NameModal from '../nameModal/NameModal';
import axios from 'axios'
import { BASE_URL } from '../../global'
import './buildbar.css'

function BuildBar(props) {

	const buttonStyle = {
		fontFamily: 'Manrope, sans-serif',
		fontWeight: '300',
		backgroundColor: 'rgb(233,229,221)',
	  }

	  const nameStyle = {
		fontFamily: 'Manrope, sans-serif',
		fontWeight: '300',
	  }


	const [currentBuildName, setCurrentBuildName] = useState('')

	const fetchCurrentBuildName = async () => {
		try {
			if (props.userData && props.userData.current_build) {
			const buildId = props.userData.current_build
			const response = await axios.get(`${BASE_URL}builds/${buildId}`)

			if (response.status === 200) {
				setCurrentBuildName(response.data.name)
			}
		} else {
			setCurrentBuildName('')
		}
		} catch (error) {
			console.error('Error fetching current build name:', error)
		}
	}

  useEffect(() => {
	fetchCurrentBuildName()
  }, [props.userData])

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

      {/* <Navbar className='build-nav' bg="light" data-bs-theme="light"> */}
	  <div className='build-nav-main-container'>
		<div className='build-name-container' style={nameStyle}>
			{currentBuildName}
		</div>
		<div className='buildbar-btn-wrapper'>
			<div className='buildbar-container'>
	  <BuildModal
			userData={props.userData}
			fetchUserData={props.fetchUserData}
			createNewBuild={props.createNewBuild}
			/>
			</div>
			<div className='buildbar-container'>
			<button className='build-btn' variant="light" style={buttonStyle} onClick={createNewBuild}>Add Build</button>
			</div>
			<div className='buildbar-container'>
		<NameModal
				userData={props.userData}
				fetchUserData={props.fetchUserData}
				fetchCurrentBuild={props.fetchCurrentBuild}
				fetchCurrentBuildName={fetchCurrentBuildName}
				 />
				 </div>
				 <div className='buildbar-container'>
					<button
						type="button"
						className="delete-build-btn"
						style={buttonStyle}
						onClick={props.deleteBuildAndCreateNew}>Delete Build</button></div>
			 </div>
			 </div>
      {/* </Navbar> */}

    </>
  );
}

export default BuildBar;