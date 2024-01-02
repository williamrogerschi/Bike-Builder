import Accordion from 'react-bootstrap/Accordion'
import React, { useState, useEffect } from 'react'
import './accordion.css'

function EntryDiv() {
	return (
		<Accordion className="entry-acc">
			<Accordion.Item className="entry-acc" eventKey="0">
				<Accordion.Header className="entry-acc"></Accordion.Header>
				<Accordion.Body className="entry-acc">
					<div className="title-content">
					<img className='pro-img' width='400px' height='300px' src='./entry.jpeg' />
						<h6 style={{maxWidth: '50%'}}>
							For entry-level or casual cyclists who are beginning their cycling
							journey or ride occasionally for leisure and fitness purposes,
							here's an overview of an appropriate bike
						</h6>
					</div>
					<div className="use-content-entry">
						<p className="p-1">
						<strong>Frame Material</strong> Entry-level bikes often feature frames made of
							sturdy materials like steel or entry-level aluminum. These
							materials offer durability at an affordable cost but might be
							slightly heavier compared to high-end materials like carbon fiber.
						</p>
						<p className="p-1">
						<strong>Components</strong>Equipped with basic components from reputable brands
							that prioritize reliability and ease of use. These may include
							entry-level groupsets offering adequate functionality for casual
							riding, though they might not offer the same precision and
							smoothness as higher-tier components.
						</p>
						<p className="p-1">
						<p><strong>Comfort and Versatility</strong></p> The bike emphasizes comfort and
							versatility for leisurely rides and fitness purposes. It might
							have a more relaxed geometry to provide a comfortable riding
							position. Additionally, it could include wider tires for stability
							and comfort on various terrains.
						</p>
					</div>
					<div className="usecase-entry">
					<p className="p-1">
					<strong>Use Cases</strong>Designed for recreational riding, commuting, fitness,
							and light exercise. Suitable for casual rides around the
							neighborhood, park pathways, or commuting short distances. They're
							not specifically optimized for racing or high-performance riding.
						</p>
						<p className="p-1">
						<strong>Affordability</strong> These bikes are budget-friendly, typically ranging
							from a few hundred dollars to around $1,000. They provide a
							cost-effective entry point into cycling without compromising too
							much on quality or safety.
						</p>
						<p className="p-1">
						<strong>Target Audience</strong> Geared towards beginners, occasional riders,
							commuters, and fitness enthusiasts who prioritize affordability,
							simplicity, and comfort over high-performance features. These
							bikes offer a gateway into cycling without the need for advanced
							or specialized equipment.
						</p>
					</div>
					<div className="audience-entry">
						<p><em>
							For entry-level and casual cyclists, the focus is on providing a
							bike that is comfortable, reliable, and affordable, catering to
							individuals looking to explore cycling as a hobby or fitness
							activity without the need for specialized or high-performance
							features.
						</em></p>
					</div>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	)
}

export default EntryDiv
