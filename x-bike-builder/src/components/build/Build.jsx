import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import './build.css'
import axios from 'axios'
import { BASE_URL } from '../../global'
import BuildBar from '../buildBar/BuildBar'


const Build = (props) => {
	const buildStyle = {
		// backgroundColor: 'rgb(233,229,221)',
		// borderBottom: '1px solid grey',
		// borderRadius: '4px',
		// border: '1px solid lightgrey',
		width: '100vh',
	}
	const inputStyle = {
		fontFamily: 'Manrope, sans-serif',
		fontWeight: '300',
	}
	const buttonStyle = {
		fontFamily: 'Manrope, sans-serif',
		fontWeight: '300',
	}
	const fontStyle = {
		fontFamily: 'Manrope, sans-serif',
		fontWeight: '400',
		fontSize: '14px',
	}

	const [names, setNames] = useState([])
	const [images, setImages] = useState([])
	const [prices, setPrices] = useState([])
	const [descriptions, setDescriptions] = useState([])
	const [currentBuild, setCurrentBuild] = useState([])
	const [totalCost, setTotalCost] = useState('0')
	const [isTotalCostUpdated, setIsTotalCostUpdated] = useState(false)


	const [components, setComponents] = useState({
		frame: [],
		groupset: [],
		wheelset: [],
		tires: [],
		handlebar: [],
		stem: [],
		seatpost: [],
		saddle: [],
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const frameResponse = await axios.get(`${BASE_URL}frames`)
				const groupsetResponse = await axios.get(`${BASE_URL}groups`)
				const wheelsetResponse = await axios.get(`${BASE_URL}wheels`)
				const tireResponse = await axios.get(`${BASE_URL}tires`)
				const handlebarResponse = await axios.get(`${BASE_URL}handlebars`)
				const stemResponse = await axios.get(`${BASE_URL}stems`)
				const seatpostResponse = await axios.get(`${BASE_URL}seatposts`)
				const saddleResponse = await axios.get(`${BASE_URL}saddles`)

				setComponents({
					frame: frameResponse.data,
					groupset: groupsetResponse.data,
					wheelset: wheelsetResponse.data,
					tires: tireResponse.data,
					handlebar: handlebarResponse.data,
					stem: stemResponse.data,
					seatpost: seatpostResponse.data,
					saddle: saddleResponse.data,
				})
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	
	const fetchCurrentBuild = async () => {
		try {
			if (props.userData && props.userData.current_build) {
				const currentBuildData = await axios.get(
					`${BASE_URL}builds/${props.userData.current_build}`
				)
				console.log('Updated user data:', currentBuildData.data)
				setCurrentBuild(currentBuildData.data)

				const {
					frame,
					groupset,
					wheelset,
					tires,
					handlebar,
					stem,
					seatpost,
					saddle,
				} = currentBuildData.data

				setNames({
					frame: frame?.name || '',
					groupset: groupset?.name || '',
					wheelset: wheelset?.name || '',
					tires: tires?.name || '',
					handlebar: handlebar?.name || '',
					stem: stem?.name || '',
					seatpost: seatpost?.name || '',
					saddle: saddle?.name || '',
				})

				setDescriptions({
					frame: frame?.description || '',
					groupset: groupset?.description || '',
					wheelset: wheelset?.description || '',
					tires: tires?.description || '',
					handlebar: handlebar?.description || '',
					stem: stem?.description || '',
					seatpost: seatpost?.description || '',
					saddle: saddle?.description || '',
				})

				setPrices({
					frame: frame?.price || '',
					groupset: groupset?.price || '',
					wheelset: wheelset?.price || '',
					tires: tires?.price || '',
					handlebar: handlebar?.price || '',
					stem: stem?.price || '',
					seatpost: seatpost?.price || '',
					saddle: saddle?.price || '',
				})
				console.log('Prices:', {
					frame: frame?.price,
					groupset: groupset?.price,
					wheelset: wheelset?.price,
					tires: tires?.price,
					handlebar: handlebar?.price,
					stem: stem?.price,
					seatpost: seatpost?.price,
					saddle: saddle?.price,
				})

				setImages({
					frame: frame?.image || '',
					groupset: groupset?.image || '',
					wheelset: wheelset?.image || '',
					tires: tires?.image || '',
					handlebar: handlebar?.image || '',
					stem: stem?.image || '',
					seatpost: seatpost?.image || '',
					saddle: saddle?.image || '',
				})
			} else {
				console.log('User data is null.')
			}
		} catch (error) {
			console.error('Error fetching current_build data:', error)
			throw error
		}
	}

	useEffect(() => {
		if (props.userData && props.userData.current_build) {
		  fetchCurrentBuild()
		}
	  }, [props.userData])


	const addToCurrentBuild = async (selectedComponent, type) => {
		try {
			if (!selectedComponent || !selectedComponent._id) {
				console.error('Selected component or ID is invalid')
				return
			}

			const buildId = `${props.userData.current_build}`
			const response = await axios.put(`${BASE_URL}builds/${buildId}`, {
				[type]: selectedComponent._id,
			})

			if (response.status === 200) {
				console.log(
					`Successfully added ${selectedComponent._id} to current build.`
				)
			} else {
				console.error('Failed to add component to current build.')
			}
			await props.fetchUserData()
			await fetchCurrentBuild()
		} catch (error) {
			console.error('Error: please sign in!', error)
		}
	}

	useEffect(() => {
		calculateTotalCost()
	}, [prices, currentBuild])

	useEffect(() => {
		if (currentBuild?._id && isTotalCostUpdated) {
			updateTotalPrice(currentBuild._id, totalCost)
		}
	}, [isTotalCostUpdated, totalCost])

	const calculateTotalCost = () => {
		let totalPrice = 0

		Object.keys(prices).forEach((componentType) => {
			const price = parseFloat(prices[componentType].replace(/\$/g, ''))
			// console.log(`Parsed price for ${componentType}:`, price)

			if (!isNaN(price)) {
				totalPrice += price
			}
		})
		setTotalCost(totalPrice.toFixed(0))

		if (currentBuild?._id) {
			setIsTotalCostUpdated(true)
		}
	}

	const totalCostColor = () => {
		if (totalCost < 2500) {
			return 'low-cost'
		} else if (totalCost > 2500 && totalCost < 5000) {
			return 'medium-cost'
		} else {
			return 'high-cost'
		}
	}

	const updateTotalPrice = async (buildId, newTotalPrice) => {
		try {
			const response = await axios.put(`${BASE_URL}builds/${buildId}`, {
				total_price: newTotalPrice.toString(),
			})
			if (response.status === 200) {
				await fetchCurrentBuild()
			} else {
				console.error(`Failed to update total price`)
			}
		} catch (error) {
			console.error('Error updating total price:', error)
		}
	}

	// const deleteBuildAndCreateNew = async () => {
	// 	try {
	// 		const userId = props.userData._id
	// 		const buildId = props.userData.current_build
	// 		await axios.delete(`${BASE_URL}builds/${buildId}`)
	// 		await props.fetchUserData()
	// 		console.log('userdata in deletbuild:', props.userData)
      
	// 		const newBuildResponse = await axios.post(`${BASE_URL}builds`, {
	// 			user: userId,
	// 			frame: null,
	// 			groupset: null,
	// 			wheelset: null,
	// 			tires: null,
	// 			saddle: null,
	// 			handlebar: null,
	// 			stem: null,
	// 			seatpost: null,
	// 			total_price: '0',
	// 			isCurrent: true,
	// 			name: 'New Build',
	// 		})
	// 		const newBuildId = newBuildResponse.data.build._id
	// 		const savedBuilds = props.userData.saved_builds.filter(id => id !== buildId)
	// 		console.log('saved-builds:', savedBuilds)

	// 		const newSavedBuilds = [...savedBuilds, newBuildId]
	// 		console.log('newSavedBuilds:', newSavedBuilds)

	// 		await axios.put(`${BASE_URL}users/${props.userData._id}`, {
	// 			current_build: newBuildId,
	// 			saved_builds: newSavedBuilds
	// 		})
	// 		await props.fetchUserData()
	// 		} catch (error) {
	// 			console.error('Error deleting or creating a new build:', error)
	// 	}
	// }

	const deleteBuildAndCreateNew = async () => {
		try {
		  const userId = props.userData._id;
		  const buildId = props.userData.current_build;
	  
		  await axios.delete(`${BASE_URL}builds/${buildId}`);
		  console.log('deleted build id',buildId)
		  await props.fetchUserData();
	  
		  if (props.userData.saved_builds.length === 0) {
			// Create a new build if there are no saved builds
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
			});
	  
			const newBuildId = newBuildResponse.data.build._id;
	  
			await axios.put(`${BASE_URL}users/${userId}`, {
			  current_build: newBuildId,
			  saved_builds: [newBuildId],
			});
	  
			await props.fetchUserData();
		  } else {
			// Set the first saved build as the current build
			const firstSavedBuildId = props.userData.saved_builds[0];
			console.log('first saved build', firstSavedBuildId)
	  
			await axios.put(`${BASE_URL}users/${userId}`, {
			  current_build: firstSavedBuildId,
			});
	  
			await props.fetchUserData();
		  }
		} catch (error) {
		  console.error('Error deleting or creating a new build:', error);
		}
	  };
	  



	return (
		<>
			<BuildBar userData={props.userData} fetchUserData={props.fetchUserData} deleteBuildAndCreateNew={deleteBuildAndCreateNew} fetchCurrentBuild={fetchCurrentBuild}/>
			<div className="build-table">
				<Table responsive="md">
					<thead className="build-header" style={buildStyle}>
						<tr className="hidden">
							<th style={buildStyle}>Component</th>
							<th style={buildStyle}>Selection</th>
							<th style={buildStyle}>Name</th>
							<th style={buildStyle}>Image</th>
							<th style={buildStyle}>Description</th>
							<th style={buildStyle}>Price</th>
						</tr>
					</thead>
					<tbody className="build-content">
						{Object.keys(components).map((componentType) => (
							<tr className="build-rows" key={componentType}>
								<td className="build-rows" style={fontStyle}>
									{componentType}
								</td>
								<td className="build-rows" style={buildStyle}>
									<Form.Select
										className="build-dd"
										onChange={(e) => {
											const selectedIndex = e.target.selectedIndex
											if (selectedIndex !== 0) {
												addToCurrentBuild(
													components[componentType][selectedIndex - 1],
													componentType
												)
											}
										}}
									>
										<option
											style={{ display: 'flex', justifyContent: 'center' }}
											defaultValue=""
										>
											Select Component
										</option>
										{components[componentType].map((component, index) => (
											<option key={index} value={component._id}>
												{component.name}
											</option>
										))}
									</Form.Select>
								</td>
								<td className="build-rows" style={buildStyle}>
									{names[componentType]}
								</td>
								<td className="build-rows">
									{images[componentType] && (
										<img
											src={images[componentType]}
											alt="Component"
											style={{ maxWidth: '150px', maxHeight: '150px' }}
										/>
									)}
								</td>
								<td className="build-rows">{descriptions[componentType]}</td>
								<td className="build-rows" style={buildStyle}>
									{' '}
									{prices[componentType]}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
			<div className="total-cost-container">
				<p className={`total-cost-box ${totalCostColor()}`}>
					Total Cost: ${totalCost}
				</p>
			</div>
		</>
	)
}

export default Build
