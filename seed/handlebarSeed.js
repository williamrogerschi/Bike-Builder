const db = require('../db/index')
const { Levels, Material, Handlebar } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const handlebarSeed = async () => {
	try {
		const aluminum = await Material.findOne({ name: 'Aluminum' })
		const carbon = await Material.findOne({ name: 'Carbon' })
		const steel = await Material.findOne({ name: 'Steel' })
		const pro = await Levels.findOne({ name: 'Pro' })
		const intermediate = await Levels.findOne({ name: 'Intermediate' })
		const entry = await Levels.findOne({ name: 'Entry' })

		const bikeHandlebars = [
			{
				name: 'SES AR Road Handlebar',
				brand: 'Enve',
				description:
					'Modern, aerodynamic, responsive carbon design for confident road riding comfort with clean airflow.',
				material: [carbon._id],
				image:
					'https://enve.com/cdn/shop/products/ENVE_ARBar_HeroTopSide-1.jpg?v=1683741799&width=1800',
				level: [pro._id],
				price: '$400',
			},
			{
				name: 'SL-70 Aero',
				brand: 'ZIPP',
				description: `Unidirectional carbon handlebar offering top-notch fit, ergonomics, and aerodynamic performance. Wing-shaped top saves energy, with a 70mm reach for proper fit and control.`,
				material: [carbon._id],
				image:
					'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/handlebars/handlebars---drop/hb-drop-bar-sl-70aero-a3/productassets_hb-dbsl-70a-a3_fg/hbsl70aero42ccmtbka3c3qs.png?w=1000',
				level: [pro._id],
				price: '$352',
			},
			{
				name: 'EC70 SL Handlebar',
				brand: 'Easton',
				description: `Advanced, affordable bar with MCD shape tech, Taperwall stiffness, and vibration-dampening comfort. Offers cable recesses, various lengths, and ideal for racing.`,
				material: [carbon._id],
				image:
					'https://eastoncycling.com/cdn/shop/products/EC70SL_RB_3QView_16_63969e56-e8a7-4a36-85cc-750148f84bde_1024x1024.png?v=1565373946',
				level: [intermediate._id],
				price: '$175',
			},
			{
				name: 'Service Course SL-80',
				brand: 'ZIPP',
				description: `Comfortable positions with a neutral wrist angle, angled drops, and ergonomic design for hoods and control levers. Lightweight aluminum construction for efficient riding.`,
				material: [aluminum._id],
				image:
					'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/handlebars/handlebars---drop/hb-drop-svc-crs-sl-80-a2/productassets_hb-dbsc-sl80-a2_fg/hbsvccrssl8042ccbdbka2c3qs.png?w=1000',
				level: [intermediate._id],
				price: '$118',
			},
			{
				name: 'Cowbell',
				brand: 'Salsa',
				description: `Effortlessly combines speed and comfort for gravel and road riding with a 12° flare, offering a natural hand position. The 44cm bar weighs 314g for high-performance efforts.`,
				material: [aluminum._id],
				image:
					'https://www.salsacycles.com/assets/salsa-cowbell-bar-HB8260-1920x720.jpg',
				level: [entry._id],
				price: '$58',
			},
		]

		const createAndSaveHandlebar = async (handlebar) => {
			try {
				const newHandlebar = new Handlebar(handlebar)
				console.log(newHandlebar)
				await newHandlebar.save()
			} catch (error) {
				console.error('Error saving handlebars:', error)
			}
		}

		for (const handlebar of bikeHandlebars) {
			await createAndSaveHandlebar(handlebar)
		}

		console.log('Handlebar seeding completed')
	} catch (error) {
		console.error('Error seeding handlebars:', error)
	}
}

module.exports = { handlebarSeed }
