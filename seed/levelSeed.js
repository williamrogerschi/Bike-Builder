const db = require('../db/index')
const { Levels } = require('../models/Index.js')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const levelSeed = async () => {
	try {
		const bikeLevels = [
			{ name: 'Entry' },
			{ name: 'Intermediate' },
			{ name: 'Pro' },
		]

		const createAndSaveLevels = async (level) => {
			try {
				const newLevels = new Levels(level)
				console.log(newLevels)
				await newLevels.save()
			} catch (error) {
				console.error('Error saving levels:', error)
			}
		}

		for (const level of bikeLevels) {
			await createAndSaveLevels(level)
		}

		console.log('Levels seeding completed')
	} catch (error) {
		console.error('Error seeding levels:', error)
	}
}

module.exports = { levelSeed }
