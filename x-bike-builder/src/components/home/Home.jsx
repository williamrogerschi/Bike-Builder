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
        const response = await axios.get(`${BASE_URL}lists`)
        setList(response.data)
        console.log('Lists:', response.data)
      } catch (error) {
        console.error('Error fetching lists:', error)
      }
    }
    fetchData()
  }, [])


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
        {list.map((listItem, index) => (
          <tr key={index}>
            <td className="entry"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="entry">{listItem.frame[4]?.name || 'N/A'}</td>
            <td className="entry">{listItem.groupset[4]?.name || 'N/A'}</td>
            <td className="entry">{listItem.wheelset[4]?.name || 'N/A'}</td>
            <td className="entry">{listItem.tires[3]?.name || 'N/A'}</td>
            <td className="entry">{listItem.handlebar[4]?.name || 'N/A'}</td>
            <td className="entry">{listItem.stem[4]?.name || 'N/A'}</td>
            <td className="entry">{listItem.seatpost[4]?.name || 'N/A'}</td>
            <td className="entry">{listItem.saddle[3]?.name || 'N/A'}</td>
          </tr>
            ))}
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
        {list.map((listItem, index) => (
          <tr key={index}>
            <td className="inter"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="inter">{listItem.frame[3]?.name || 'N/A'}</td>
            <td className="inter">{listItem.groupset[3]?.name || 'N/A'}</td>
            <td className="inter">{listItem.wheelset[3]?.name || 'N/A'}</td>
            <td className="inter">{listItem.tires[3]?.name || 'N/A'}</td>
            <td className="inter">{listItem.handlebar[3]?.name || 'N/A'}</td>
            <td className="inter">{listItem.stem[3]?.name || 'N/A'}</td>
            <td className="inter">{listItem.seatpost[3]?.name || 'N/A'}</td>
            <td className="inter">{listItem.saddle[2]?.name || 'N/A'}</td>
          </tr>
            ))}
          {list.map((listItem, index) => (
          <tr key={index}>
            <td className="inter"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="inter">{listItem.frame[2]?.name || 'N/A'}</td>
            <td className="inter">{listItem.groupset[2]?.name || 'N/A'}</td>
            <td className="inter">{listItem.wheelset[2]?.name || 'N/A'}</td>
            <td className="inter">{listItem.tires[2]?.name || 'N/A'}</td>
            <td className="inter">{listItem.handlebar[2]?.name || 'N/A'}</td>
            <td className="inter">{listItem.stem[2]?.name || 'N/A'}</td>
            <td className="inter">{listItem.seatpost[2]?.name || 'N/A'}</td>
            <td className="inter">{listItem.saddle[2]?.name || 'N/A'}</td>
          </tr>
            ))}
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
        {list.map((listItem, index) => (
          <tr key={index}>
            <td className="pro"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="pro">{listItem.frame[1]?.name || 'N/A'}</td>
            <td className="pro">{listItem.groupset[1]?.name || 'N/A'}</td>
            <td className="pro">{listItem.wheelset[1]?.name || 'N/A'}</td>
            <td className="pro">{listItem.tires[1]?.name || 'N/A'}</td>
            <td className="pro">{listItem.handlebar[1]?.name || 'N/A'}</td>
            <td className="pro">{listItem.stem[1]?.name || 'N/A'}</td>
            <td className="pro">{listItem.seatpost[1]?.name || 'N/A'}</td>
            <td className="pro">{listItem.saddle[1]?.name || 'N/A'}</td>
          </tr>
            ))}
          {list.map((listItem, index) => (
          <tr key={index}>
            <td className="pro"><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px'}} src='./flash.png' /></td>
            <td className="pro">{listItem.frame[0]?.name || 'N/A'}</td>
            <td className="pro">{listItem.groupset[0]?.name || 'N/A'}</td>
            <td className="pro">{listItem.wheelset[0]?.name || 'N/A'}</td>
            <td className="pro">{listItem.tires[0]?.name || 'N/A'}</td>
            <td className="pro">{listItem.handlebar[0]?.name || 'N/A'}</td>
            <td className="pro">{listItem.stem[0]?.name || 'N/A'}</td>
            <td className="pro">{listItem.seatpost[0]?.name || 'N/A'}</td>
            <td className="pro">{listItem.saddle[0]?.name || 'N/A'}</td>
          </tr>
            ))}
        </tbody>
      </Table>
      </div>
    </div>
  </>
  )
}

export default Home
