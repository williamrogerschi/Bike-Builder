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

  const [levels, setLevels] = useState([])
  const [prices, setPrices] = useState([])
  const [descriptions, setDescriptions] = useState([])

  const levelsArray = [
    {
      "_id": "656b41de0c60caa88bbd2e08",
      "name": "Entry",
    },
    {
      "_id": "656b41df0c60caa88bbd2e0a",
      "name": "Intermediate",
    },
    {
      "_id": "656b41df0c60caa88bbd2e0c",
      "name": "Pro",
    }
  ]

  const getLevelName = (levelId) => {
    const foundLevel = levelsArray.find((level) => level._id === levelId);
    return foundLevel ? foundLevel.name : '';
  };
  

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
  
        setDescriptions((prevDescription) => {
          return {
            ...prevDescription,
            [type]: selectedComponent.description,
          };
        });
  
        setLevels((prevLevel) => {
          return {
            ...prevLevel,
            [type]: selectedComponent.level,
          };
        });
  
        setPrices((prevPrice) => {
          return {
            ...prevPrice,
            [type]: selectedComponent.price,
          };
        });
      } else {
        console.error('Failed to add component to current build.');
      }
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
            <th style={buildStyle}>Description</th>
            <th style={buildStyle}>Level</th>
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
                  onChange={(e) => addToCurrentBuild(components[componentType][e.target.selectedIndex], componentType)}>
                  <option disabled defaultValue="">• Select Component •</option>
                  {components[componentType].map((component, index) => (
                    <option key={index} value={component._id}>
                      {component.name}
                    </option>
                  ))}
                </Form.Select>
              </td>
              <td style={buildStyle}>{descriptions[componentType]}</td>
              <td style={buildStyle}> {getLevelName(levels[componentType])}</td >
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