import React, { useState, useEffect } from "react"
import './tooltip.css'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'



const TooltipComponent = ({ data }) => {

    const buttonStyle = {
        fontFamily: 'Manrope, sans-serif',
        fontWeight: '400',
        fontWeight: '300',
        fontSize: '12px',
    }

    const ttStyle = {
        backgroundColor: 'rgb(233,229,221)',
        border: '1px solid #b9babbbc',
        fontFamily: 'Manrope, sans-serif',
        fontWeight: '300',
        fontSize: '12px',
        padding: '10px',
        borderRadius: '12px',
    }

    const renderComponents = (name, image, description, price) => (
      <div>
        <img height='100px' width='100px' src={image} alt={name} />
        <p><strong>{name}</strong></p>
        <p>{description}</p>
        <p><strong>{price}</strong></p>
      </div>
    )
  
    return (
      <OverlayTrigger
        placement='bottom'
        delay={{ show: 0, hide: 0 }}
        trigger={['hover', 'focus']}
        overlay={
          <Tooltip className={`component-tooltip-yellow`} style={ttStyle}>
            {renderComponents(data.name, data.image, data.description, data.price)}
          </Tooltip>
        }
      >
        <div>
          <Button variant='transparent' style={buttonStyle}>
            {data.name || 'N/A'}
          </Button>
        </div>
      </OverlayTrigger>
    )
  }
  
  export default TooltipComponent