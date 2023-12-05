import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from "react"
import './accinter.css'


function InterDiv() {



  return (
    <Accordion className='inter-acc' defaultActiveKey="1">
      <Accordion.Item className='inter-acc' eventKey="1">
        <Accordion.Header className='inter-acc'></Accordion.Header>
        <Accordion.Body className='inter-acc'>
        <div className='title-content'>
					<p>
          For amateur cyclists who actively race and invest significantly in cycling gear, the ideal bike would offer a balance between performance, durability, and value. Here's an overview of what such a racing bike might entail:
					</p>
          </div>
          <div className='use-content'>
					<p className='p-1'>
          Frame Material: The frame material may vary but often includes high-quality aluminum or mid-range carbon fiber. These materials offer a good balance of performance, comfort, and affordability.
					</p>
					<p className='p-1'>
          Components: Equipped with mid-range to high-end components that provide reliable performance without the ultra-premium price tag. This could include mid-tier groupsets from reputable manufacturers offering smooth shifting, good braking, and overall reliable performance.
					</p>
					<p className='p-1'>
          Aerodynamics and Comfort: The bike might feature some aerodynamic design elements, though not as aggressively as professional-level bikes. Comfort features, such as slightly more relaxed geometry or additional compliance in the frame, are often incorporated for longer rides and comfort during races.
					</p>
          </div>
          <div className='usecase'>
            <p>Use Cases: Geared towards amateur racing events or group rides, these bikes are versatile enough to handle various terrains and conditions. They're capable of providing good performance in competitive settings without compromising on comfort during longer rides.</p>
            <p>Customization and Cost: While customization options might be available, they could be limited compared to professional-grade bikes. The cost of these bikes can range from a few thousand dollars to around $5,000 to $8,000, depending on the brand, components, and technology used.</p>
            <p>Target Audience: Aimed at cycling enthusiasts who participate in amateur races, group rides, or various cycling events. These cyclists seek quality gear that offers a significant performance boost over entry-level options without the extreme costs associated with professional-grade equipment.</p>
          </div>
          <div className='audience-inter'>
            <p>These bikes cater to passionate amateur cyclists who are willing to invest in higher-quality gear for improved performance and enjoyment during races and recreational riding but don't necessarily require the absolute cutting-edge technology and customization of professional-level bikes.</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default InterDiv;