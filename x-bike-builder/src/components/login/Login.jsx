import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './login.css'
import { BASE_URL } from '../../global'
import { Form, Button } from 'react-bootstrap'
import './login.css'

import BackgroundImage from '../../assets/swork.jpeg'
import Logo from '../../assets/sandy.jpeg'

const Login = (props) => {
	const buttonStyle = {
		backgroundColor: 'rgb(233,229,221)',
	}

	const [userData, setUserData] = useState(null)
	const [userName, setUserName] = useState('')
	const [show, setShow] = useState(false)
	const [loading, setLoading] = useState(false)
	// const [currentBuild, setCurrentBuild] = useState('')
	// const [savedBuilds, setSavedBuilds] = useState('')

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axios.get(`${BASE_URL}users`)
				setUserData(response.data)
				console.log('users:', response.data)
			} catch (error) {
				console.error('Error fetching user data: ', error)
			}
		}
		fetchUserData()
	}, [])

	const loginUser = () => {
		console.log('Login Started..')

		for (let i = 0; i < userData.length; i++) {
			if (userName == userData[i].user_name) {
				localStorage.setItem('userData', JSON.stringify(userData[i]))
				props.setUserData(userData[i])
				props.onClose()
				break
			} else {
				console.log('user not found')
			}
		}
	}

	const handleUsernameChange = (event) => {
		setUserName(event.target.value)
	}

	//   const addUser = async ()  => {
	//     let existingUser = null
	//     for (let i = 0; i < userData.length; i++) {
	//       if (username == userData[i].user_name) {
	//           console.log('user logged in: ', userData[i])
	//           existingUser = userData[i]
	//           break;
	//       }
	//     }
	//     if (existingUser == null) {
	//       const body = {
	//         user_name: username,
	//         current_build: currentBuild || null,
	//         saved_builds: savedBuilds || null,
	//       }
	//       const response = await axios.post(`${BASE_URL}users/`, body)
	//       console.log('new user: ',response.data.user)

	//       props.setUserData(response.data.user)
	//       props.onClose()
	//       return response.data
	//   }
	// }

	//   const createUser =  async () => {
	//     console.log('Create Started..')

	//         const response = await addUser().then(() => {
	//           console.log('posted', response)
	//         })
	//     }

	const handleSubmit = async (event) => {
		event.preventDefault()
		setLoading(true)
		await delay(500)
		if (userName !== 'admin') {
			setShow(true)
		}
		setLoading(false)
	}

	function delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	return (
		<div
			className="sign-in__wrapper"
			style={{ backgroundImage: `url(${BackgroundImage})` }}
		>
			{/* Overlay */}
			<div className="sign-in__backdrop"></div>
			{/* Form */}
			<Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
				{/* Header */}
				<img
					className="img-thumbnail mx-auto d-block mb-2"
					src={Logo}
					alt="logo"
				/>
				<div className="h4 mb-2 text-center">Sign In</div>
				<div />
				<Form.Group className="mb-2" controlId="username">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						value={userName}
						placeholder="Username"
						onChange={(e) => handleUsernameChange(e)}
						required
					/>
				</Form.Group>
				<Form.Group className="mb-2" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-2" controlId="checkbox">
					<Form.Check type="checkbox" label="Remember me" />
				</Form.Group>
				{!loading ? (
					<Button
						className="w-100"
						style={buttonStyle}
						onClick={() => loginUser()}
						variant="light"
						type="submit"
					>
						Log In
					</Button>
				) : (
					<Button className="w-100" variant="primary" type="submit" disabled>
						Logging In...
					</Button>
				)}
				<Button
					className="w-100"
					style={buttonStyle}
					variant="light"
					onClick={props.onClose}
				>
					Close
				</Button>
			</Form>
		</div>
	)
}

export default Login
