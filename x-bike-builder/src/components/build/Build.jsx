import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import './build.css'
import axios from 'axios'
import { BASE_URL } from '../../global'

const Build = () => {
  const buildStyle = {
    backgroundColor: 'rgb(233,229,221)',
    borderBottom: '1px solid grey',
    width: '50vh',
  }
  const buttonStyle = {
    backgroundColor: 'rgb(233,229,221)',
    border: '1px solid rgb(233,229,221)'
  }

  const [frames, setFrames] = useState([])
	const [groups, setGroups] = useState([])
	const [wheels, setWheels] = useState([])
  const [tires, setTires] = useState([])
  const [handlebars, setHandlebars] = useState([])
  const [stems, setStems] = useState([])
  const [seatposts, setSeatposts] = useState([])
  const [saddles, setSaddles] = useState([])


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

	const handleComponentChange = (index, selectedComponent) => {
		console.log(`Row ${index} selected component:`, selectedComponent)
	}

  return (

    <div className='build-table'>
      <Table responsive="md">
        <thead className='build-header' >
          <tr>
            <th style={buildStyle}>Component</th>
            <th style={buildStyle}>Selection</th>
            {/* will have image and name pulled */}
            <th style={buildStyle}>Level</th>
            {/* should show pro, entry, etc. */}
            <th style={buildStyle}>Price</th>
            {/* show price dynamically */}
            <th style={buildStyle}>Remove Item</th>
            {/* will be a button that will let me remove whatever is selected, so this should leave selection, level and price empty. */}
          </tr>
        </thead>
        <tbody >
          <tr>
            <td style={buildStyle}>
            <Form.Select className='build-dd'
								onChange={(e) => handleComponentChange(0, e.target.value)}>
								{frames.map((frame, index) => (
									<option key={index} value={frame.name}>
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
								onChange={(e) => handleComponentChange(1, e.target.value)}>
								{groups.map((group, index) => (
									<option key={index} value={group.name}>
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
              onChange={(e) => handleComponentChange(2, e.target.value)}>
              {wheels.map((wheel, index) => (
                <option key={index} value={wheel.name}>
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
								onChange={(e) => handleComponentChange(3, e.target.value)}>
								{tires.map((tire, index) => (
									<option key={index} value={tire.name}>
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
								onChange={(e) => handleComponentChange(4, e.target.value)}>
								{handlebars.map((handlebar, index) => (
									<option key={index} value={handlebar.name}>
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
								onChange={(e) => handleComponentChange(5, e.target.value)}>
								{stems.map((stem, index) => (
									<option key={index} value={stem.name}>
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
								onChange={(e) => handleComponentChange(6, e.target.value)}>
								{seatposts.map((seatpost, index) => (
									<option key={index} value={seatpost.name}>
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
								onChange={(e) => handleComponentChange(7, e.target.value)}>
								{saddles.map((saddle, index) => (
									<option key={index} value={saddle.name}>
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
    </div>
  )
}

export default Build

// import React, { useState, useEffect } from 'react'
// import Table from 'react-bootstrap/Table'
// import Form from 'react-bootstrap/Form'
// import './build.css'
// import axios from 'axios'
// import { BASE_URL } from '../../global'

// const Build = () => {

//   const buildStyle = {
//     backgroundColor: 'rgb(233,229,221)',
//     borderBottom: '1px solid grey',
//     width: '50vh',
//   }
//   const buttonStyle = {
//     backgroundColor: 'rgb(233,229,221)',
//     border: '1px solid rgb(233,229,221)'
//   }

//   const [frames, setFrames] = useState([])
// 	const [groups, setGroups] = useState([])
// 	const [wheels, setWheels] = useState([])
//   const [tires, setTires] = useState([])
//   const [handlebars, setHandlebars] = useState([])
//   const [stems, setStems] = useState([])
//   const [seatposts, setSeatposts] = useState([])
//   const [saddles, setSaddles] = useState([])

//   const [selectedComponents, setSelectedComponents] = useState(Array(8).fill({}))



//   const handleComponentChange = async (index, selectedComponent) => {
//     try {
//       const response = await axios.get(`${BASE_URL}frames/${selectedComponent}`);
//       const selectedFrame = response.data;
  
//       setSelectedComponents(prevState => {
//         const updatedComponents = [...prevState];
//         updatedComponents[index] = {
//           image: selectedFrame.image,
//           description: selectedFrame.description,
//           level: selectedFrame.level,
//           price: selectedFrame.price
//         };
//         return updatedComponents;
//       });
//     } catch (error) {
//       console.error(`Error fetching data for ${selectedComponent}:`, error);
//     }
//   };

//   // Helper function to determine the endpoint based on the index
//   const getEndpointBasedOnIndex = (index) => {
//     const endpoints = ['frames', 'groups', 'wheels', 'tires', 'handlebars', 'stems', 'seatposts', 'saddles']
//     return endpoints[index]
//   }


//   useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const frames = await axios.get(`${BASE_URL}frames`)
//         setFrames(frames.data)
// 				const groups = await axios.get(`${BASE_URL}groups`)
// 				setGroups(groups.data)
// 				const wheels = await axios.get(`${BASE_URL}wheels`)
// 				setWheels(wheels.data)
//         const tires = await axios.get(`${BASE_URL}tires`)
//         setTires(tires.data)
//         const handlebars = await axios.get(`${BASE_URL}handlebars`)
//         setHandlebars(handlebars.data)
//         const stems = await axios.get(`${BASE_URL}stems`)
//         setStems(stems.data)
//         const seatposts = await axios.get(`${BASE_URL}seatposts`)
//         setSeatposts(seatposts.data)
//         const saddles = await axios.get(`${BASE_URL}saddles`)
//         setSaddles(saddles.data)
// 			} catch (error) {
// 				console.error('Error fetching data:', error)
// 			}
// 		}

// 		fetchData()
// 	}, [])

//   return (

//     <div className='build-table'>
//       <Table responsive="md">
//         <thead className='build-header' >
//           <tr>
//             <th style={buildStyle}>Component</th>
//             <th style={buildStyle}>Selection</th>
//             {/* will have image and name pulled */}
//             <th style={buildStyle}>Level</th>
//             {/* should show pro, entry, etc. */}
//             <th style={buildStyle}>Price</th>
//             {/* show price dynamically */}
//             <th style={buildStyle}>Remove Item</th>
//             {/* will be a button that will let me remove whatever is selected, so this should leave selection, level and price empty. */}
//           </tr>
//         </thead>
//         <tbody>
//         {frames.map((frame, index) => (
//           <tr key={index}>
//             <td style={buildStyle}>
//               <Form.Select className='build-dd'
//                 onChange={(e) => handleComponentChange(index, e.target.value)}>
//                 {frames.map((frame, idx) => (
//                   <option key={idx} value={frame.name}>
//                     {frame.name}
//                   </option>
//                 ))}
//               </Form.Select>
//             </td>
//             <td style={buildStyle}>
//               {selectedComponents[index] && (
//                 <>
//                   <img src={selectedComponents[index].image} alt="Component" />
//                   <p>{selectedComponents[index].description}</p>
//                 </>
//               )}
//       </td>
//       <td style={buildStyle}>{selectedComponents[index]?.level}</td>
//       <td style={buildStyle}>{selectedComponents[index]?.price}</td>
//       <td style={buildStyle}>
//         <button
//           type='button'
//           style={buttonStyle}
//           className='build-btn'
//           onClick={() => removeSelectedItem(index)}
//         >
//           X
//         </button>
//       </td>
//     </tr>
//   ))}
// </tbody>
//         <tbody>
//           <tr>
//             <td style={buildStyle}>
//             <Form.Select className='build-dd'
// 								onChange={(e) => handleComponentChange(3, e.target.value)}>
// 								{tires.map((tire, index) => (
// 									<option key={index} value={tire.name}>
// 										{tire.name}
// 									</option>
// 								))}
// 							</Form.Select>
//             </td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
//           </tr>
//           <tr>
//             <td style={buildStyle}>
//             <Form.Select className='build-dd'
// 								onChange={(e) => handleComponentChange(4, e.target.value)}>
// 								{handlebars.map((handlebar, index) => (
// 									<option key={index} value={handlebar.name}>
// 										{handlebar.name}
// 									</option>
// 								))}
// 							</Form.Select>
//             </td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
//           </tr>
//           <tr>
//             <td style={buildStyle}>
//             <Form.Select className='build-dd'
// 								onChange={(e) => handleComponentChange(5, e.target.value)}>
// 								{stems.map((stem, index) => (
// 									<option key={index} value={stem.name}>
// 										{stem.name}
// 									</option>
// 								))}
// 							</Form.Select>
//             </td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
//           </tr>
//         </tbody>
//         <tbody>
//           <tr>
//             <td style={buildStyle}>
//             <Form.Select className='build-dd'
// 								onChange={(e) => handleComponentChange(6, e.target.value)}>
// 								{seatposts.map((seatpost, index) => (
// 									<option key={index} value={seatpost.name}>
// 										{seatpost.name}
// 									</option>
// 								))}
// 							</Form.Select>
//             </td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
//           </tr>
//           <tr>
//             <td style={buildStyle}>
//             <Form.Select className='build-dd'
// 								onChange={(e) => handleComponentChange(7, e.target.value)}>
// 								{saddles.map((saddle, index) => (
// 									<option key={index} value={saddle.name}>
// 										{saddle.name}
// 									</option>
// 								))}
// 							</Form.Select>
//             </td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button type='button' style={buttonStyle} className='build-btn'>X</button></td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   )
// }
// export default Build
