import React from 'react'
import Table from 'react-bootstrap/Table';
import './build.css'

const Build = () => {

  return (

    <div className='build-table'>
      <Table responsive="md">
        <thead className='build-header'>
          <tr>
            <th>Component</th>
            {/* will be a dropdown with a text PH of each part that should be selected */}
            <th>Selection</th>
            {/* will have image and name pulled */}
            <th>Level</th>
            <th>Price</th>
            <th>PH x Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frame</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Group</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Wheelset</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Tires</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Handlebar</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Stem</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Seatpost</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Saddle</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Build