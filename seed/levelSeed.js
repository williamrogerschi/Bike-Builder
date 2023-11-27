const db = require('../db/index')
const { Levels } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const bikeLevels = [
    {
      name: 'Entry'
    },
    {
      name: 'Intermediate'
    },
    {
      name: 'Pro'
    }
  ]

  const createAndSaveLevel = async (name) => {
    const newLevel = new Levels({ name })
    console.log(newLevel)
    await newLevel.save()
  }

  const levelSeed = async () => {
    try {
      for (const level of bikeLevels) {
        await createAndSaveLevel(level.name)
      }
      console.log('Levels seeding completed')
    } catch (error) {
      console.error('Error seeding levels:', error)
    } finally {
      db.close()
    }
  }

  await levelSeed()
}

main()
