import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../header/Header'
import Home from '../home/Home'
import Build from '../build/Build'
import Footer from '../footer/Footer'
import axios from 'axios'
import { BASE_URL } from '../../global'

const Main = () => {
	const [userData, setUserData] = useState(null)
	const [updateUser, setUpdateUser] = useState(null)

	const fetchUserData = async () => {
		try {
			if (userData !== null) {
				const updatedUserData = await axios.get(
					`${BASE_URL}users/${userData._id}`
				)
				console.log('Updated user data:', updatedUserData.data)
				setUserData(updatedUserData.data)
				return updatedUserData.data
			} else {
				console.log('User data is null.')
			}
		} catch (error) {
			console.error('Error fetching updated user data:', error)
			throw error
		}
	}

	useEffect(() => {
		fetchUserData()
	}, [])

	return (
		<>
			<div className="wrapper">
				<div className="main-content">
					<div className="header-container">
						<Header userData={userData} setUserData={setUserData} />
					</div>
					<Routes>
						<Route
							path="/"
							element={
								<Home
									userData={userData}
									setUserData={setUserData}
									setUpdateUser={setUpdateUser}
									fetchUserData={fetchUserData}
								/>
							}
						/>
						<Route
							path="/Build"
							element={
								<Build
									userData={userData}
									setUserData={setUserData}
									setUpdateUser={setUpdateUser}
									fetchUserData={fetchUserData}
								/>
							}
						/>
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Main
