import React from 'react'
import Table from 'react-bootstrap/Table';
import './build.css'
import axios from 'axios'
// import { BASE_URL } from '../global'

const Build = () => {
  const buildStyle = {
    backgroundColor: 'rgb(233,229,221)',
    borderBottom: '1px solid grey',
  }

  return (

    <div className='build-table'>
      <Table responsive="md">
        <thead className='build-header' >
          <tr>
            <th style={buildStyle}>Component</th>
            {/* will be a dropdown with a text PH of each part that should be selected */}
            <th style={buildStyle}>Selection</th>
            {/* will have image and name pulled */}
            <th style={buildStyle}>Level</th>
            <th style={buildStyle}>Price</th>
            <th style={buildStyle}>PH x Button</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td style={buildStyle}>Frame</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
          </tr>
          <tr>
            <td style={buildStyle}>Group</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
          </tr>
          <tr>
            <td style={buildStyle}>Wheelset</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={buildStyle}>Tires</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
          </tr>
          <tr>
            <td style={buildStyle}>Handlebar</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
          </tr>
          <tr>
            <td style={buildStyle}>Stem</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td style={buildStyle}>Seatpost</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
          </tr>
          <tr>
            <td style={buildStyle}>Saddle</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
            <td style={buildStyle}>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Build