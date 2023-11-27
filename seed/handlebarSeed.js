const db = require('../db/index')
const { Levels, Material, Handlebar } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const carbon = await Material.findOne({ name: 'Carbon' })
  const pro = await Levels.findOne({ name: 'Pro' })

  const bikeHandlebars = [
    {
      name: 'SES AR Road Handlebar',
      brand: 'Enve',
      description: 'Purpose-built for the modern road rider, the SES AR handlebar features compound flared drops for confident handling, aerodynamic shaping with internal/external routing options for clean airflow and aesthetics, and a carbon laminate that has been tuned for responsive handling without sacrificing comfort.',
      material: [carbon._id],
      image: 'https://enve.com/cdn/shop/products/ENVE_ARBar_HeroTopSide-1.jpg?v=1683741799&width=1800',
      level: [pro._id],
      price: '$400',
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

  const handlebarSeed = async () => {
    try {
      for (const handlebar of bikeHandlebars) {
        await createAndSaveHandlebar(handlebar)
      }
      console.log('Handlebar seeding completed')
    } catch (error) {
      console.error('Error seeding handlebars:', error)
    } finally {
      db.close()
    }
  }

  await handlebarSeed()
}

main()
