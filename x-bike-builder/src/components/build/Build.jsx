import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import './build.css'
import axios from 'axios'
import { BASE_URL } from '../../global'
import Modal from '../modal/Modal'

const Build = (props) => {

  const [modal, setModal] = useState(false);
  const buildStyle = {
    backgroundColor: 'rgb(233,229,221)',
    borderBottom: '1px solid grey',
    width: '50vh',
  }
  const buttonStyle = {
    backgroundColor: 'rgb(233,229,221)',
    border: '1px solid rgb(233,229,221)'
  }


  // const [buildItems, setBuildItems] = useState(null)
  const [frames, setFrames] = useState([{ current_build: {} }])
	const [groups, setGroups] = useState([{ current_build: {} }])
	const [wheels, setWheels] = useState([{ current_build: {} }])
  const [tires, setTires] = useState([{ current_build: {} }])
  const [handlebars, setHandlebars] = useState([{ current_build: {} }])
  const [stems, setStems] = useState([{ current_build: {} }])
  const [seatposts, setSeatposts] = useState([{ current_build: {} }])
  const [saddles, setSaddles] = useState([{ current_build: {} }])
  const [selectedComponent, setSelectedComponent] = useState( { current_build: {} })


  useEffect(() => {

		const fetchData = async () => {
			try {
				const frames = await axios.get(`${BASE_URL}frames`)
        setFrames(frames.data)
				const groups = await axios.get(`${BASE_URL}groups`)
				setGroups(groups.data)
				const wheels = await axios.get(`${BASE_URL}wheels`)
				setWheels(wheels.data)
        const tires = await axios.get(`${BASE_URL}tires`)
        setTires(tires.data)
        const handlebars = await axios.get(`${BASE_URL}handlebars`)
        setHandlebars(handlebars.data)
        const stems = await axios.get(`${BASE_URL}stems`)
        setStems(stems.data)
        const seatposts = await axios.get(`${BASE_URL}seatposts`)
        setSeatposts(seatposts.data)
        const saddles = await axios.get(`${BASE_URL}saddles`)
        setSaddles(saddles.data)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])


  const addToCurrentBuild = async (selectedComponent) => {
    try {
      // const userId = `${props.userData._id}`
      const buildId = `${props.userData.current_build}`
      console.log('buildID:', buildId)
      const response = await axios.put(`${BASE_URL}builds/${buildId}`, {
        // [type] selectedComponent._id,
        frame: selectedComponent._id,
      })
      console.log('what is this component:', selectedComponent._id)
      if (response.status === 200) {
        console.log(`Successfully added ${selectedComponent._id} to current build.`);
      } else {
        console.error('Failed to add component to current build.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  // console.log('user data props:', props.userData)

  return (

    <div className='build-table'>
      <Table responsive="md">
        <thead className='build-header' >
          <tr>
            <th style={buildStyle}>Component</th>
            <th style={buildStyle}>Selection</th>
            <th style={buildStyle}>Level</th>
            <th style={buildStyle}>Price</th>
            <th style={buildStyle}>Remove Item</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td style={buildStyle}>
            <Form.Select className='build-dd'
								onChange={(e) => addToCurrentBuild(frames[e.target.selectedIndex])}>
								{frames.map((frame, index) => (
									<option key={index} value={frame._id}>
										{frame.name}
									</option>
								))}
							</Form.Select>
            </td>
            <td style={buildStyle}>Selection Cell</td>
            <td style={buildStyle}>Level cell</td>
            <td style={buildStyle}>Price cell</td>
            <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
          </tr>
          <tr>
            <td style={buildStyle}>
            <Form.Select className='build-dd'
								onChange={(e) => addToCurrentBuild(groups[e.target.selectedIndex])}>
								{groups.map((group, index) => (
									<option key={index} value={group._id}>
										{group.name}
									</option>
								))}
							</Form.Select>
            </td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
          </tr>
          <tr>
            <td style={buildStyle}>
              <Form.Select className='build-dd'
              onChange={(e) => addToCurrentBuild(wheels[e.target.selectedIndex])}>
              {wheels.map((wheel, index) => (
                <option key={index} value={wheel._id}>
                  {wheel.name}
                </option>
              ))}
              </Form.Select>
            </td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={buildStyle}>
            <Form.Select className='build-dd'
								onChange={(e) => addToCurrentBuild(tires[e.target.selectedIndex])}>
								{tires.map((tire, index) => (
									<option key={index} value={tire._id}>
										{tire.name}
									</option>
								))}
							</Form.Select>
            </td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
          </tr>
          <tr>
            <td style={buildStyle}>
            <Form.Select className='build-dd'
								onChange={(e) => addToCurrentBuild(handlebars[e.target.selectedComponent])}>
								{handlebars.map((handlebar, index) => (
									<option key={index} value={handlebar._id}>
										{handlebar.name}
									</option>
								))}
							</Form.Select>
            </td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
          </tr>
          <tr>
            <td style={buildStyle}>
            <Form.Select className='build-dd'
								onChange={(e) => addToCurrentBuild(stems[e.target.selectedIndex])}>
								{stems.map((stem, index) => (
									<option key={index} value={stem._id}>
										{stem.name}
									</option>
								))}
							</Form.Select>
            </td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={buildStyle}>
            <Form.Select className='build-dd'
								onChange={(e) => addToCurrentBuild(seatposts[e.target.selectedIndex])}>
								{seatposts.map((seatpost, index) => (
									<option key={index} value={seatpost._id}>
										{seatpost.name}
									</option>
								))}
							</Form.Select>
            </td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
          </tr>
          <tr>
            <td style={buildStyle}>
            <Form.Select className='build-dd'
								onChange={(e) => addToCurrentBuild(saddles[e.target.selectedIndex])}>
								{saddles.map((saddle, index) => (
									<option key={index} value={saddle._id}>
										{saddle.name}
									</option>
								))}
							</Form.Select>
            </td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
          </tr>
        </tbody>
      </Table>
        <button
        onClick={() => setModal(true)}>
        Open modal
      </button>
      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}>
        Modal content.
      </Modal>
    </div>
  )
}

export default Build
