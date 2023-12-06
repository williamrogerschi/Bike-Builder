import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from "react"
import './accpro.css'


function ProDiv() {
	return (
		<Accordion className="pro-acc">
			<Accordion.Item className="pro-acc" eventKey="0">
				<Accordion.Header className="pro-acc"></Accordion.Header>
				<Accordion.Body
					style={{
						fontSize: '13px',
					}}
					className="pro-acc"
				>
          <div className='title-content'>
			<img className='pro-img' width='400px' height='300px' src='./lotdf22.jpg' />
		  <h6 style={{maxWidth: '50%'}}>
						A "Pro World Tour" cycling bike is a high-performance bicycle
						designed specifically for professional cyclists competing in
						elite-level races like the Tour de France, Giro d'Italia, Vuelta a
						España, and other major cycling events. These bikes are engineered
						to meet the demanding needs of professional riders seeking optimal
						speed, agility, comfort, and aerodynamics. Key features and aspects
						of these bikes include:
					</h6>
          </div>
          <div className='use-content-pro'>
					<p className='p-1'>
						<p><strong>Frame Material and Design</strong></p> Typically constructed from lightweight,
						high-end materials like carbon fiber or titanium to ensure maximum
						strength, stiffness, and minimal weight.
					</p>
					<p className='p-1'>
						<p><strong>Advanced Components</strong></p> Equipped with top-tier groupsets, including
						premium drivetrains, brakes, wheelsets, and other components that
						offer precise gear shifting, excellent braking, and superior
						aerodynamics.
					</p>
					<p className='p-1'>
					<p><strong>Aerodynamic Design:</strong></p> Frames and components are optimized for
						aerodynamics, reducing wind resistance and enhancing speed during
						sprints and climbs.
					</p>
          </div>
          <div className='usecase-pro'>
		  <p className='p-1'>
          <p><strong>Use Cases</strong></p> These bikes are intended for road racing and are designed to excel in various terrains, including flat roads, steep climbs, and technical descents, allowing professional cyclists to compete at the highest level.</p>
		  <p className='p-1'>
          <p><strong>Cost</strong></p>The cost of a "Pro World Tour" cycling bike can vary significantly based on brand, components, materials used, and customization. Typically, these bikes range from several thousand dollars to tens of thousands of dollars. It's not uncommon for professional riders to use bikes worth $10,000 or more, with some custom-built bikes reaching much higher price points.</p>
		  </div>
          <div className='audience-pro'>
            <p><em>Given the professional-grade components, advanced technology, and high-end materials used in these bikes, they are priced at a premium level. Professional cyclists, with sponsorship and team support, often have access to these elite bicycles tailored to their specific racing needs.</em></p>
          </div>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	)
}

export default ProDiv