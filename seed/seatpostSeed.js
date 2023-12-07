const db = require('../db/index')
const { Seatpost, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seatpostSeed = async () => {
	try {
		const aluminum = await Material.findOne({ name: 'Aluminum' })
		const carbon = await Material.findOne({ name: 'Carbon' })
		const steel = await Material.findOne({ name: 'Steel' })
		const pro = await Levels.findOne({ name: 'Pro' })
		const intermediate = await Levels.findOne({ name: 'Intermediate' })
		const entry = await Levels.findOne({ name: 'Entry' })

		const bikeSeatpost = [
			{
				name: 'Enve Seatpost 300MM',
				brand: 'Enve',
				description:
					'Lightweight, reliable, and adjustable Twin-Bolt patented design ENVE Carbon Road Bike Seatpost in 300mm length.',
				material: [carbon._id],
				image:
					'https://enve.com/cdn/shop/products/ENVE_300mm_Seatpost_3-1.jpg?v=1683741485&width=1800',
				level: [pro._id],
				price: '$300',
			},
			{
				name: 'SL Speed Seatpost',
				brand: 'ZIPP',
				description: `Lightweight, adjustable, available in 400mm length and setback options.`,
				material: [carbon._id],
				image:
					'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/seatposts/seatposts/sp-sl-speed-b2/productassets_sp-sl-s-b2_fg/spslspd20offset272400mtbkb2cfrontv.png?w=856',
				level: [pro._id],
				price: '$285',
			},
			{
				name: 'EC70 ISA Seatpost',
				brand: 'Easton',
				description: `Superlight carbon with ISA technology for independent adjustments. Setback and zero configurations available.`,
				material: [carbon._id],
				image:
					'https://eastoncycling.com/cdn/shop/products/EC70-ISA-SP-Zero_d60f897d-8b9a-431b-a5f9-75f7095b63d0_1024x1024.png?v=1566949556',
				level: [intermediate._id],
				price: '$119',
			},
			{
				name: 'Service Course SL Seatpost',
				brand: 'ZIPP',
				description: `Shock-absorbing, lightweight carbon, two-bolt clamp for micro-adjustments, 0mm and 20mm setback options.`,
				material: [carbon._id],
				image:
					'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/seatposts/seatposts/sp-service-course-sl-c2/productassets_sp-sc-sl-c2_fg/spsvccrssl20sb272400mtbkc2c3qv.png?w=856',
				level: [intermediate._id],
				price: '$172',
			},
			{
				name: 'Guide Seatpost',
				brand: 'Salsa',
				description: `The Guide Seatpost is designed to blend into the background; just like a good seatpost should. Strong, reliable, and always just where you left it.`,
				material: [aluminum._id],
				image:
					'https://www.salsacycles.com/assets/salsa-guide-seatpost-ST8852-1920x720.jpg',
				level: [entry._id],
				price: '$50',
			},
		]

		const createAndSaveSeatpost = async (seatpost) => {
			try {
				const newSeatpost = new Seatpost(seatpost)
				console.log(newSeatpost)
				await newSeatpost.save()
			} catch (error) {
				console.error('Error saving seatposts:', error)
			}
		}

		for (const seatpost of bikeSeatpost) {
			await createAndSaveSeatpost(seatpost)
		}

		console.log('Seatpost seeding completed')
	} catch (error) {
		console.error('Error seeding seatposts:', error)
	}
}

module.exports = { seatpostSeed }
