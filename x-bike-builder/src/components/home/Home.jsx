import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import "./home.css";
import axios from 'axios'
import { BASE_URL } from '../../global'

const Home = () => {
  const [list, setList] = useState([])



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}lists`);
        setList(response.data);
        console.log('Lists:', response.data);
      } catch (error) {
        console.error('Error fetching lists:', error);
      }
    };

    fetchData();
  }, []);


  return (
  <>
    <div className="logical-table">
      <div>
      <Table responsive="sm">
        <thead className="thead" >
          <tr>
            <th className="logic-head" style={{backgroundColor: '#d0f0b1b7', minWidth: '100px'}}>Entry</th>
            <th className="logic-head" style={{backgroundColor: '#d0f0b1b7'}}>Frame</th>
            <th className="logic-head" style={{backgroundColor: '#d0f0b1b7'}}>Group</th>
            <th className="logic-head" style={{backgroundColor: '#d0f0b1b7'}}>Wheelset</th>
            <th className="logic-head" style={{backgroundColor: '#d0f0b1b7'}}>Tires</th>
            <th className="logic-head" style={{backgroundColor: '#d0f0b1b7'}}>Handlebar</th>
            <th className="logic-head" style={{backgroundColor: '#d0f0b1b7'}}>Stem</th>
            <th className="logic-head" style={{backgroundColor: '#d0f0b1b7'}}>Seatpost</th>
            <th className="logic-head" style={{backgroundColor: '#d0f0b1b7'}}>Saddle</th>
          </tr>
        </thead>
        <tbody>
        {list.map((list, index) => (
          <tr key={index}>
            <td className="entry"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="entry">{list.frame.name ? list.frame : 'no frame found'}</td>
            <td className="entry">{list.groupset.name ? list.groupset : 'no group found'}</td>
            <td className="entry">Wheel cell</td>
            <td className="entry">Tire cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
          </tr>
            ))}
          <tr>
            <td className="entry"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
          </tr>
          <tr>
            <td className="entry"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
            <td className="entry">Table cell</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm">
        <thead className="thead">
          <tr>
            <th className="logic-head" style={{backgroundColor: '#92b4a78d' , minWidth: '100px'}}>Intermediate</th>
            <th className="logic-head" style={{backgroundColor: '#92b4a78d'}}>Frame</th>
            <th className="logic-head" style={{backgroundColor: '#92b4a78d'}}>Group</th>
            <th className="logic-head" style={{backgroundColor: '#92b4a78d'}}>Wheelset</th>
            <th className="logic-head" style={{backgroundColor: '#92b4a78d'}}>Tires</th>
            <th className="logic-head" style={{backgroundColor: '#92b4a78d'}}>Handlebar</th>
            <th className="logic-head" style={{backgroundColor: '#92b4a78d'}}>Stem</th>
            <th className="logic-head" style={{backgroundColor: '#92b4a78d'}}>Seatpost</th>
            <th className="logic-head" style={{backgroundColor: '#92b4a78d'}}>Saddle</th>
          </tr>
        </thead>
        <tbody className="inter">
          <tr>
            <td className="inter"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
          </tr>
          <tr>
            <td className="inter"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
          </tr>
          <tr>
            <td className="inter"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
            <td className="inter">Table cell</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm">
        <thead className="thead">
          <tr>
            <th className="logic-head" style={{backgroundColor: '#81667ac0', minWidth: '100px'}}>Pro</th>
            <th className="logic-head" style={{backgroundColor: '#81667ac0'}}>Frame</th>
            <th className="logic-head" style={{backgroundColor: '#81667ac0'}}>Group</th>
            <th className="logic-head" style={{backgroundColor: '#81667ac0'}}>Wheelset</th>
            <th className="logic-head" style={{backgroundColor: '#81667ac0'}}>Tires</th>
            <th className="logic-head" style={{backgroundColor: '#81667ac0'}}>Handlebar</th>
            <th className="logic-head" style={{backgroundColor: '#81667ac0'}}>Stem</th>
            <th className="logic-head" style={{backgroundColor: '#81667ac0'}}>Seatpost</th>
            <th className="logic-head" style={{backgroundColor: '#81667ac0'}}>Saddle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pro"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
          </tr>
          <tr>
            <td className="pro"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
          </tr>
          <tr>
            <td className="pro"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
            <td className="pro">Table cell</td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  </>
  )
}

export default Home
