const db = require('../db/index')
const { Group, Levels, Material } = require('../models/Index.js')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const groupSeed = async () => {
	try {
		const aluminum = await Material.findOne({ name: 'Aluminum' })
		const carbon = await Material.findOne({ name: 'Carbon' })
		const steel = await Material.findOne({ name: 'Steel' })
		const pro = await Levels.findOne({ name: 'Pro' })
		const intermediate = await Levels.findOne({ name: 'Intermediate' })
		const entry = await Levels.findOne({ name: 'Entry' })

		const bikeGroups = [
			{
				name: 'SRAM RED eTap AXS',
				brand: 'SRAM',
				description: `Intuitive, high-performance groupset for focused riding—exploring limits made easier.`,
				material: [carbon._id],
				image:
					'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/groupset/groupset/gs-red-electronic-b1/c48351028ebwhor.jpg?w=2000&quality=80&format=webp',
				level: [pro._id],
				price: '$2690',
			},
			{
				name: 'SRAM Force eTap AXS',
				brand: 'SRAM',
				description:
					'SRAM Force eTap AXS offers the key features of RED eTap AXS—modern gearing, advanced chain management, and easy personalization—in a more affordable package.',
				material: [carbon._id],
				image:
					'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/groupset/groupset/gs-force-electronic-a1/c48351033discwhor.jpg?w=1000',
				level: [pro._id],
				price: '$1560',
			},
			{
				name: 'Shimano 105 R7150 Di2 12-speed',
				brand: 'Shimano',
				description:
					'Brings Di2 performance, 12-speed wireless shifting for riders seeking reliability',
				material: [aluminum._id],
				image:
					'https://escapecollective.com/wp-content/uploads/2023/08/Shimano-105-12-speed-mechanical-R7100.jpg',
				level: [intermediate._id],
				price: '$1100',
			},
			{
				name: 'Shimano R8000',
				brand: 'Shimano',
				description:
					'Proven trickle-down tech from DURA-ACE, stress-free operation for all-day comfort in biking components.',
				material: [aluminum._id],
				image:
					'https://m.media-amazon.com/images/I/514QKQgiQoL._AC_UF1000,1000_QL80_.jpg',
				level: [intermediate._id],
				price: '$900',
			},
			{
				name: 'SRAM Rival 22',
				brand: 'SRAM',
				description:
					'Versatile groupset for diverse biking disciplines, offering efficiency, tech, and adaptability to push limits.',
				material: [aluminum._id],
				image:
					'https://cdn11.bigcommerce.com/s-kvyj4/images/stencil/1280x1280/products/489/5864/sram_rival22_groupset__31915.1589574803.jpg?c=2',
				level: [entry._id],
				price: '$780',
			},
		]

		const createAndSaveGroup = async (group) => {
			try {
				const newGroup = new Group(group)
				console.log(newGroup)
				await newGroup.save()
			} catch (error) {
				console.error('Error saving groups:', error)
			}
		}

		for (const group of bikeGroups) {
			await createAndSaveGroup(group)
		}

		console.log('Group seeding completed')
	} catch (error) {
		console.error('Error seeding groups:', error)
	}
}

module.exports = { groupSeed }
