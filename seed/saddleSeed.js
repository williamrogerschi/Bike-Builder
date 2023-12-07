const db = require('../db/index')
const { Saddle, Levels } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const saddleSeed = async () => {
	try {
		const pro = await Levels.findOne({ name: 'Pro' })
		const intermediate = await Levels.findOne({ name: 'Intermediate' })
		const entry = await Levels.findOne({ name: 'Entry' })

		const bikeSaddles = [
			{
				name: 'SLR Boost 3D Kit Carbonio Superflow',
				brand: 'Sell Italia',
				description:
					'Improve your road cycling performance with the Hi-Tech Carbon rails of the 3D printed SLR Boost 3D Kit Carbonio Superflow.',
				color: 'Black',
				image:
					'https://cdn11.bigcommerce.com/s-ubg9970srq/images/stencil/1280x1280/products/208/2209/041A924RCA011_SLR_BOOST_3D_KIT_CARBONIO_SUPERFLOW_L_L3_THREE_QUARTER__66617.1681310787.jpg?c=1',
				level: [pro._id],
				price: '$480',
			},
			{
				name: 'Vento Argo 00 Adaptive',
				brand: `Fi'zi:k`,
				description:
					'Our short-nose performance cycling racing saddle featuring 3D-printed padding for zonal cushioning comfort across the entire surface and full-carbon shell and rails to save weight without sacrificing support.',
				color: 'Black',
				image:
					'https://d2wax9jsznmsse.cloudfront.net/media/catalog/product/cache/62da096d30b285fe6809aca988e7de16/f/i/fizik-2-vento-argo-adaptive-00-140-black-road-cycling-saddle_1.jpg',
				level: [pro._id],
				price: '$400',
			},
			{
				name: 'Antares R3 Versus EVO',
				brand: `Fi'zi:k`,
				description:
					'A comfortable road bike saddle for riders who want a medium saddle profile and a pressure relief channel.',
				color: 'Black',
				image:
					'https://d2wax9jsznmsse.cloudfront.net/media/catalog/product/cache/62da096d30b285fe6809aca988e7de16/a/n/antares-r3-versus-evo-black_regular_side.jpg',
				level: [intermediate._id],
				price: '$150',
			},
			{
				name: 'Model X',
				brand: 'Selle Italia',
				description: `Designed with our future in mind, the Model X is made with an entirely green process that doesn't compromise on quality or performance.`,
				color: 'Black',
				image:
					'https://cdn11.bigcommerce.com/s-ubg9970srq/images/stencil/1280x1280/products/194/2345/064A521REC003_Model__X_Green_superflow_L_L3_THREE_QUARTER__82602.1681801255.jpg?c=1',
				level: [entry._id],
				price: '$50',
			},
		]

		const createAndSaveSaddle = async (saddle) => {
			try {
				const newSaddle = new Saddle(saddle)
				console.log(newSaddle)
				await newSaddle.save()
			} catch (error) {
				console.error('Error saving saddles:', error)
			}
		}

		for (const saddle of bikeSaddles) {
			await createAndSaveSaddle(saddle)
		}

		console.log('Saddle seeding completed')
	} catch (error) {
		console.error('Error seeding saddles:', error)
	}
}

module.exports = { saddleSeed }
