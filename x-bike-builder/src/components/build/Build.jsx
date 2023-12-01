// import React from 'react'
// import Table from 'react-bootstrap/Table';
// import './build.css'
// import axios from 'axios'
// import { BASE_URL } from '../../global'

// const Build = () => {
//   const buildStyle = {
//     backgroundColor: 'rgb(233,229,221)',
//     borderBottom: '1px solid grey',
//   }

//   return (

//     <div className='build-table'>
//       <Table responsive="md">
//         <thead className='build-header' >
//           <tr>
//             <th style={buildStyle}>Component</th>
//             {/* will be a dropdown with a text PH of each part that should be selected */}
//             <th style={buildStyle}>Selection</th>
//             {/* will have image and name pulled */}
//             <th style={buildStyle}>Level</th>
//             <th style={buildStyle}>Price</th>
//             <th style={buildStyle}>PH x Button</th>
//           </tr>
//         </thead>
//         <tbody >
//           <tr>
//             <td style={buildStyle}>Frame</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button></button></td>
//           </tr>
//           <tr>
//             <td style={buildStyle}>Group</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button></button></td>
//           </tr>
//           <tr>
//             <td style={buildStyle}>Wheelset</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button></button></td>
//           </tr>
//         </tbody>
//         <tbody>
//           <tr>
//             <td style={buildStyle}>Tires</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button></button></td>
//           </tr>
//           <tr>
//             <td style={buildStyle}>Handlebar</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button></button></td>
//           </tr>
//           <tr>
//             <td style={buildStyle}>Stem</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button></button></td>
//           </tr>
//         </tbody>
//         <tbody>
//           <tr>
//             <td style={buildStyle}>Seatpost</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button></button></td>
//           </tr>
//           <tr>
//             <td style={buildStyle}>Saddle</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}>Table cell</td>
//             <td style={buildStyle}><button></button></td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   )
// }

// export default Build

import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './build.css';
import axios from 'axios';
import { BASE_URL } from '../../global';

const Build = () => {
  const buildStyle = {
    backgroundColor: 'rgb(233,229,221)',
    borderBottom: '1px solid grey',
  };

  const [frames, setFrames] = useState([]);
  const [groups, setGroups] = useState([]);
  const [wheels, setWheels] = useState([]);
  // Add more states for other components as needed

  useEffect(() => {
    // Fetch data from respective endpoints for frames, groups, wheels, etc.
    axios.get(`${BASE_URL}frames`)
      .then((response) => {
        setFrames(response.data); // Assuming response.data contains frames data
      })
      .catch((error) => {
        console.error('Error fetching frames data:', error);
      });

    axios.get(`${BASE_URL}groups`)
      .then((response) => {
        setGroups(response.data); // Assuming response.data contains groups data
      })
      .catch((error) => {
        console.error('Error fetching groups data:', error);
      });

    axios.get(`${BASE_URL}wheels`)
      .then((response) => {
        setWheels(response.data); // Assuming response.data contains wheels data
      })
      .catch((error) => {
        console.error('Error fetching wheels data:', error);
      });

    // Fetch data for other components here and update the state accordingly
  }, []);

  const handleComponentChange = (index, selectedComponent) => {
    // Handle the selection of component for a specific row (identified by index)
    console.log(`Row ${index} selected component:`, selectedComponent);
    // You can perform any further actions here based on the selected component
  };

  return (
    <div className='build-table'>
      <Table responsive='md'>
        <thead className='build-header'>
          <tr>
            <th style={buildStyle}>Component</th>
            <th style={buildStyle}>Selection</th>
            <th style={buildStyle}>Level</th>
            <th style={buildStyle}>Price</th>
            <th style={buildStyle}>PH x Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={buildStyle}>
              <Form.Select onChange={(e) => handleComponentChange(0, e.target.value)}>
                {frames.map((frame, index) => (
                  <option key={index} value={frame.name}>{frame.name}</option>
                ))}
              </Form.Select>
            </td>
            {/* Other columns for the first row */}
          </tr>
          <tr>
            <td style={buildStyle}>
              <Form.Select onChange={(e) => handleComponentChange(1, e.target.value)}>
                {groups.map((group, index) => (
                  <option key={index} value={group.name}>{group.name}</option>
                ))}
              </Form.Select>
            </td>
            {/* Other columns for the second row */}
          </tr>
          {/* Add similar rows for other components */}
        </tbody>
      </Table>
    </div>
  );
};

export default Build;
