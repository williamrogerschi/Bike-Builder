import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import './home.css';
import axios from 'axios'
import { BASE_URL } from '../../global'
import TooltipComponent from "../tooltip/Tooltip";
import EntryDiv from "../accordion/Accordion";
import InterDiv from "../accordion/AccordionInter";
import ProDiv from "../accordion/AccordionPro";

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
            <td className="entry"><img style={{height: '20px' , width: '20px', margin: '20px'}} src='./flash.png' /></td>
            <td className="entry"><TooltipComponent data={listItem.frame[4]} /></td>
            <td className="entry"><TooltipComponent data={listItem.groupset[4]} /></td>
            <td className="entry"><TooltipComponent data={listItem.wheelset[4]} /></td>
            <td className="entry"><TooltipComponent data={listItem.tires[3]} /></td>
            <td className="entry"><TooltipComponent data={listItem.handlebar[4]} /></td>
            <td className="entry"><TooltipComponent data={listItem.stem[4]} /></td>
            <td className="entry"><TooltipComponent data={listItem.seatpost[4]} /></td>
            <td className="entry"><TooltipComponent data={listItem.saddle[3]} /></td>
          </tr>
            ))}
        </tbody>
      </Table>
      <EntryDiv />
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
            <td className="inter"><img style={{height: '20px' , width: '20px', margin: '20px 0 20px 20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px', margin: '20px 0 20px 0'}} src='./flash.png' /></td>
            <td className="inter"><TooltipComponent data={listItem.frame[3]} /></td>
            <td className="inter"><TooltipComponent data={listItem.groupset[3]} /></td>
            <td className="inter"><TooltipComponent data={listItem.wheelset[3]} /></td>
            <td className="inter"><TooltipComponent data={listItem.tires[2]} /></td>
            <td className="inter"><TooltipComponent data={listItem.handlebar[3]} /></td>
            <td className="inter"><TooltipComponent data={listItem.stem[3]} /></td>
            <td className="inter"><TooltipComponent data={listItem.seatpost[3]} /></td>
            <td className="inter"><TooltipComponent data={listItem.saddle[3]} /></td>
          </tr>
            ))}
          {list.map((listItem, index) => (
          <tr key={index}>
            <td className="inter"><img style={{height: '20px' , width: '20px', margin: '20px 0 20px 20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px', margin: '20px 0 20px 0'}} src='./flash.png' /></td>
            <td className="inter"><TooltipComponent data={listItem.frame[2]} /></td>
            <td className="inter"><TooltipComponent data={listItem.groupset[2]} /></td>
            <td className="inter"><TooltipComponent data={listItem.wheelset[2]} /></td>
            <td className="inter"><TooltipComponent data={listItem.tires[2]} /></td>
            <td className="inter"><TooltipComponent data={listItem.handlebar[2]} /></td>
            <td className="inter"><TooltipComponent data={listItem.stem[2]} /></td>
            <td className="inter"><TooltipComponent data={listItem.seatpost[2]} /></td>
            <td className="inter"><TooltipComponent data={listItem.saddle[2]} /></td>
          </tr>
            ))}
        </tbody>
      </Table>
      <InterDiv />
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
            <td className="pro"><img style={{height: '20px' , width: '20px', margin: '20px 0 20px 20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px', margin: '20px 0 20px 0'}} src='./flash.png' /><img style={{height: '20px' , width: '20px', margin: '20px 0 20px 0px'}} src='./flash.png' /></td>
            <td className="pro"><TooltipComponent data={listItem.frame[1]} /></td>
            <td className="pro"><TooltipComponent data={listItem.groupset[1]}/></td>
            <td className="pro"><TooltipComponent data={listItem.wheelset[1]}/></td>
            <td className="pro"><TooltipComponent data={listItem.tires[1]}/></td>
            <td className="pro"><TooltipComponent data={listItem.handlebar[1]}/></td>
            <td className="pro"><TooltipComponent data={listItem.stem[1]}/></td>
            <td className="pro"><TooltipComponent data={listItem.seatpost[1]}/></td>
            <td className="pro"><TooltipComponent data={listItem.saddle[1]}/></td>
          </tr>
            ))}
          {list.map((listItem, index) => (
          <tr key={index}>
            <td className="pro"><img style={{height: '20px' , width: '20px', margin: '20px 0 20px 20px'}} src='./flash.png' /><img style={{height: '20px' , width: '20px', margin: '20px 0 20px 0'}} src='./flash.png' /><img style={{height: '20px' , width: '20px', margin: '20px 0 20px 0px'}} src='./flash.png' /></td>
            <td className="pro"><TooltipComponent data={listItem.frame[0]} /></td>
            <td className="pro"><TooltipComponent data={listItem.groupset[0]}/></td>
            <td className="pro"><TooltipComponent data={listItem.wheelset[0]}/></td>
            <td className="pro"><TooltipComponent data={listItem.tires[0]}/></td>
            <td className="pro"><TooltipComponent data={listItem.handlebar[0]}/></td>
            <td className="pro"><TooltipComponent data={listItem.stem[0]}/></td>
            <td className="pro"><TooltipComponent data={listItem.seatpost[0]}/></td>
            <td className="pro"><TooltipComponent data={listItem.saddle[0]}/></td>
          </tr>
            ))}
        </tbody>
      </Table>
      <ProDiv />
      </div>
    </div>
  </>
  )
}

export default Home
