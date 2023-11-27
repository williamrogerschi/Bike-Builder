const db = require('../db/index')
const { Wheels, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const carbon = await Material.findOne({ name: 'Carbon' })
  const pro = await Levels.findOne({ name: 'Pro' })

  const bikeWheels = [
    {
      name: 'SES 6.7',
      brand: 'Enve',
      description: 'Striking the ultimate balance between weight savings, stability, aerodynamics, and rolling efficiency, the SES 6.7 defines Real-World Fast and raises the bar for modern aero wheel performance. Grams of rim, versus grams of drag, make the SES 6.7 the outright fastest wheel on the road.',
      image: 'https://enve.com/cdn/shop/products/ENVE_SES_67_Hero3-2400x0-c-default.png?v=1683742075&width=1800',
      material: [carbon._id],
      level: [pro._id],
      price: '$2850',
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

  const wheelSeed = async () => {
    try {
      for (const wheel of bikeWheels) {
        await createAndSaveWheels(wheel)
      }
      console.log('Wheel seeding completed')
    } catch (error) {
      console.error('Error seeding wheels:', error)
    } finally {
      db.close()
    }
  }

  await wheelSeed()
}

main()
