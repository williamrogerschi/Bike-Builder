import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './build.css';
import axios from 'axios';
import { BASE_URL } from '../../global';
import BuildModal from '../currentBuild/CurrentBuild'


const Build = (props) => {

  const buildStyle = {
    // backgroundColor: 'rgb(233,229,221)',
    // borderBottom: '1px solid grey',
    // borderRadius: '4px',
    // border: '1px solid lightgrey',
    width: '100vh',
  }
  const inputStyle ={
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '300',
  }
  const buttonStyle ={
    fontFamily: 'Manrope, sans-serif',
    fontWeight: '300',
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
  });

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
          saddle: saddleResponse.data
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData();
  }, []);

  const fetchCurrentBuild = async () => {
    try {
      if (props.userData && props.userData.current_build) {
        const currentBuildData = await axios.get(`${BASE_URL}builds/${props.userData.current_build}`);
        console.log('Updated user data:', currentBuildData.data);
        setCurrentBuild(currentBuildData.data);

        const { frame, groupset, wheelset, tires, handlebar, stem, seatpost, saddle } = currentBuildData.data

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
        } )

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
        console.log('User data is null.');
      }
    } catch (error) {
      console.error('Error fetching current_build data:', error)
      throw error
    }
  }

  useEffect(() => {
    fetchCurrentBuild();
  }, [props.userData]);

  const addToCurrentBuild = async (selectedComponent, type) => {
    try {
      if (!selectedComponent || !selectedComponent._id) {
        console.error('Selected component or ID is invalid');
        return;
      }
  
      const buildId = `${props.userData.current_build}`;
      const response = await axios.put(`${BASE_URL}builds/${buildId}`, {
        [type]: selectedComponent._id,
      });
  
      if (response.status === 200) {
        console.log(`Successfully added ${selectedComponent._id} to current build.`);

      } else {
        console.error('Failed to add component to current build.');
      }
      await props.fetchUserData()
      await fetchCurrentBuild()
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    calculateTotalCost()
  }, [prices, currentBuild])

  useEffect(() => {
    if (currentBuild?._id && isTotalCostUpdated) {
      updateTotalPrice(currentBuild._id, totalCost)
    }
  } , [isTotalCostUpdated, totalCost])

  const calculateTotalCost = () => {
    let totalPrice = 0
  
    Object.keys(prices).forEach((componentType) => {
      const price = parseFloat(prices[componentType].replace(/\$/g, ''))
      // console.log(`Parsed price for ${componentType}:`, price)
  
      if (!isNaN(price)) {
        totalPrice += price
      }
    })
    // console.log('Total price:', totalPrice);
    setTotalCost(totalPrice.toFixed(0));

    if (currentBuild?._id) {
      setIsTotalCostUpdated(true)
    }
  };

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
        total_price: newTotalPrice.toString()
      })
      if (response.status === 200) {
        // console.log(`Total price updated for build ${buildId} to ${newTotalPrice}`)
        await fetchCurrentBuild()
      } else {
        console.error(`Failed to update total price`)
      }
    } catch (error) {
      console.error('Error updating total price:', error)
    }
  }


const deleteBuildAndCreateNew = async () => {
  try {

    const userId = props.userData._id
    const buildId = props.userData.current_build
    await axios.delete(`${BASE_URL}builds/${buildId}`)

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
      total_price: "0",
      isCurrent: true,
      name: "New Build",
    })
    const newBuildId = newBuildResponse.data.build._id
    await axios.put(`${BASE_URL}users/${props.userData._id}`, {
      current_build: newBuildId,
    })
    await props.fetchUserData()
  } catch (error) {
    console.error('Error deleting or creating a new build:', error)
  }
};


  
  return (
  <>
    <div className='total-build-wrapper'>
        <div className='total-li'><input style={inputStyle} type='text' className='build-name' placeholder='name your build!'></input><button type='button' className='build-btn' style={buttonStyle} >
          {/* onClick='placeholderFunction()'> */}
          Submit!</button></div>
    </div>
    <div className='build-table'>
      <Table responsive='md'>
        <thead className='build-header' style={buildStyle}>
          <tr>
            <th style={buildStyle}>Component</th>
            <th style={buildStyle}>Selection</th>
            <th style={buildStyle}>Name</th>
            <th style={buildStyle}>Image</th>
            <th style={buildStyle}>Description</th>
            <th style={buildStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(components).map((componentType) => (
            <tr key={componentType}>
              <td style={buildStyle}>{componentType}</td>
              <td style={buildStyle}>
              <Form.Select
  className='build-dd'
  onChange={(e) => {
    const selectedIndex = e.target.selectedIndex;
    if (selectedIndex !== 0) {
      addToCurrentBuild(components[componentType][selectedIndex - 1], componentType)
    }
  }}>
  <option style={{display: 'flex', justifyContent: 'center'}} defaultValue="">Select Component</option>
  {components[componentType].map((component, index) => (
    <option key={index} value={component._id}>
      {component.name}
    </option>
  ))}
</Form.Select>
              </td>
              <td style={buildStyle}>{names[componentType]}</td>
              <td style={buildStyle}>
              {images[componentType] && (
                  <img src={images[componentType]} alt="Component" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                )}
              </td>
              <td style={buildStyle}>{descriptions[componentType]}</td>
              <td style={buildStyle}> {prices[componentType]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    <div className='total-cost-container'>
      <p className={`total-cost-box ${totalCostColor()}`}>Total Cost: ${totalCost}</p>
    </div>
    <div className='total-build'>
    </div>
        <div className='delete-container'><button type='button' className='delete-build-btn' style={buttonStyle} onClick={deleteBuildAndCreateNew}>Delete Build</button></div>
    <BuildModal />
    </>
  );
};

export default Build