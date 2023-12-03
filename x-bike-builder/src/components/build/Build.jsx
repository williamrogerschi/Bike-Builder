import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './build.css';
import axios from 'axios';
import { BASE_URL } from '../../global';

const Build = (props) => {

    const buildStyle = {
    backgroundColor: 'rgb(233,229,221)',
    borderBottom: '1px solid grey',
    width: '50vh',
  }

  const [names, setNames] = useState([])
  const [images, setImages] = useState([])
  const [prices, setPrices] = useState([])
  const [descriptions, setDescriptions] = useState([])
  const [currentBuild, setCurrentBuild] = useState([])
  
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
        });

        setPrices({
          frame: frame?.price || '',
          groupset: groupset?.price || '',
          wheelset: wheelset?.price || '',
          tires: tires?.price || '',
          handlebar: handlebar?.price || '',
          stem: stem?.price || '',
          seatpost: seatpost?.price || '',
          saddle: saddle?.price || '',
        });

        setImages({
          frame: frame?.image || '',
          groupset: groupset?.image || '',
          wheelset: wheelset?.image || '',
          tires: tires?.image || '',
          handlebar: handlebar?.image || '',
          stem: stem?.image || '',
          seatpost: seatpost?.image || '',
          saddle: saddle?.image || '',
        });
      } else {
        console.log('User data is null.');
      }
    } catch (error) {
      console.error('Error fetching current_build data:', error);
      throw error;
    }
  };

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
      await fetchCurrentBuild()
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
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
            <th style={buildStyle}>Remove Item</th>
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
  <option defaultValue=""> • Select Component • </option>
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
              <td style={buildStyle}><button type='button' className='build-btn'>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Build