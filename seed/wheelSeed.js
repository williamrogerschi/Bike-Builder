const db = require('../db/index')
const { Wheels, Levels, Material } = require('../models/Index.js')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const wheelSeed = async () => {
	try {
		const aluminum = await Material.findOne({ name: 'Aluminum' })
		const carbon = await Material.findOne({ name: 'Carbon' })
		const pro = await Levels.findOne({ name: 'Pro' })
		const intermediate = await Levels.findOne({ name: 'Intermediate' })
		const entry = await Levels.findOne({ name: 'Entry' })

		const bikeWheels = [
			{
				name: 'SES 6.7',
				brand: 'Enve',
				description:
					'Striking the ultimate balance between weight savings, stability, aerodynamics, and rolling efficiency, the SES 6.7 defines Real-World Fast and raises the bar for modern aero wheel performance. Grams of rim, versus grams of drag, make the SES 6.7 the outright fastest wheel on the road.',
				image:
					'https://enve.com/cdn/shop/products/ENVE_SES_67_Hero3-2400x0-c-default.png?v=1683742075&width=1800',
				material: [carbon._id],
				level: [pro._id],
				price: '$2850',
			},
			{
				name: '454 NSW Tubular Disc-brake',
				brand: 'ZIPP',
				description: `Advanced aerodynamics, biomimicry-inspired design, Cognition DB V2 Hubset for reduced drag and faster engagement.`,
				image:
					'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/wheels/wheels/wh-454-nsw-tu-disc-brake-b1/productassets_wh-454-ntud-b1_fg/amwh-454-nsw-tudbcl-7r-xdr-12x142-std-b1-c-side-s.png?w=1000',
				material: [carbon._id],
				level: [pro._id],
				price: '$2321',
			},
			{
				name: '303 Firecrest Tubeless Disc-Brake',
				brand: 'ZIPP',
				description: `Versatile, efficient, aerodynamic design, wide rim stance for reduced rolling resistance and improved aero efficiency. German-engineered ZR1 DB hubset with 66 points of engagement.`,
				image:
					'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/wheels/wheels/wh-303-firecrest-tl-db-a1/productassets_wh-303-ftld-a1_fg/amwh303fctldbcl700f12x100stda1csides2.png?w=1000',
				material: [carbon._id],
				level: [intermediate._id],
				price: '$1050',
			},
			{
				name: 'Cosmic SL 32 Disc',
				brand: 'Mavic',
				description: `This carbon road wheel climbs and corners faster with a lighter weight 32mm rim featuring UST Road Tubeless technology and disc-brake-specific engineering.`,
				image:
					'https://cdn.mavic.com/media/cache/default/dam/P13351_0.png.webp',
				material: [carbon._id],
				level: [intermediate._id],
				price: '$1500',
			},
			{
				name: 'EA90 SL Disc',
				brand: 'Easton',
				description: `At only 1537 grams this stiff, wide and stealthy aluminum wheelset is a knockout punch to just about every carbon wheel in the category.`,
				image:
					'https://eastoncycling.com/cdn/shop/products/EA90SL_Disc_SL_Wheelset_1024x1024.png?v=1565825130',
				material: [aluminum._id],
				level: [entry._id],
				price: '$400',
			},
		]

		const createAndSaveWheels = async (wheel) => {
			try {
				const newWheels = new Wheels(wheel)
				console.log(newWheels)
				await newWheels.save()
			} catch (error) {
				console.error('Error saving wheels:', error)
			}
		}

		for (const wheel of bikeWheels) {
			await createAndSaveWheels(wheel)
		}

		console.log('Wheel seeding completed')
	} catch (error) {
		console.error('Error seeding wheels:', error)
	}
}

module.exports = { wheelSeed }