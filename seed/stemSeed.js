const db = require('../db/index')
const { Stem, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const stemSeed = async () => {
	try {
		const aluminum = await Material.findOne({ name: 'Aluminum' })
		const carbon = await Material.findOne({ name: 'Carbon' })
		const steel = await Material.findOne({ name: 'Steel' })
		const pro = await Levels.findOne({ name: 'Pro' })
		const intermediate = await Levels.findOne({ name: 'Intermediate' })
		const entry = await Levels.findOne({ name: 'Entry' })

		const bikeStems = [
			{
				name: 'Enve Road',
				brand: 'Enve',
				description:
					'Road, Gravel, and Cyclocross riders turn to the ENVE Road Carbon Stem for a lightweight and reliable setup with optimized road feel.',
				material: [carbon._id],
				image:
					'https://enve.com/cdn/shop/products/ENVE_RoadStem_HiRez_12-scaled.jpg?v=1700065021&width=1800',
				level: [pro._id],
				price: '$300',
			},
			{
				name: 'SL Sprint',
				brand: 'ZIPP',
				description: `Stiff, lightweight stem with aerodynamic design, multiple sizes available for optimal fit.`,
				material: [carbon._id],
				image:
					'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/stems/stems/st-sl-sprint-a3/productassets_st-sl-spnt-a3_fg/stslsprint31812110118mtbka3csides.png?w=1600&quality=80&format=webp',
				level: [pro._id],
				price: '$285',
			},
			{
				name: 'WCS Carbon Matrix C220',
				brand: 'Ritchey',
				description: `You really can have it all—the new WCS C220 stem rivals the performance of the revolutionary C260 stem design, but it's quicker and easier to install and remove, thanks to a press-fit handlebar clamp interface and forward-facing hardware.`,
				material: [carbon._id],
				image:
					'https://cdn.sanity.io/images/pbcwwn3b/production/a5ee742b5f7f59ca7bfaf45f534925cb7848c8bc-1180x640.jpg?w=3840&q=75&auto=format',
				level: [intermediate._id],
				price: '$180',
			},
			{
				name: 'Service Course SL',
				brand: 'ZIPP',
				description: `Strong, lightweight aluminum stem with various angles and lengths for customized fit.`,
				material: [carbon._id],
				image:
					'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/stems/stems/st-service-course-sl-b2/productassets_st-sc-sl-b2_fg/stscsl31861001125bdbkb2c3qs.png?w=1000',
				level: [intermediate._id],
				price: '$140',
			},
			{
				name: 'Whisky No. 7',
				brand: 'Whisky',
				description: `No.7 Stems offer a refined, classic look to match all Whisky cockpit items.`,
				material: [aluminum._id],
				image:
					'https://www.worldwidecyclery.com/cdn/shop/products/SM7912-01_729d736d-db5d-42f0-aef0-12c874db907c_x1024.jpg?v=1674958714',
				level: [entry._id],
				price: '$45',
			},
		]

		const createAndSaveStem = async (stem) => {
			try {
				const newStems = new Stem(stem)
				console.log(newStems)
				await newStems.save()
			} catch (error) {
				console.error('Error saving stems:', error)
			}
		}

		for (const stem of bikeStems) {
			await createAndSaveStem(stem)
		}

		console.log('Stem seeding completed')
	} catch (error) {
		console.error('Error seeding stems:', error)
	}
}

module.exports = { stemSeed }
