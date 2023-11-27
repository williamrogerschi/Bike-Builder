const db = require('../db/index')
const { Tires, Levels } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const pro = await Levels.findOne({ name: 'Pro' })

  const bikeTires = [
    {
      name: 'SES Road Tire',
      brand: 'Enve',
      description: 'SES Road Tires are proven in CFD and the wind tunnel to reduce drag, and are constructed to deliver rolling efficiency, durability, and a confidence inspiring ride - regardless of the weather.',
      image: 'https://enve.com/cdn/shop/products/SESTanTire29_ThreeQuarter_1-1.jpg?v=1683741795&width=1800',
      color: 'Tan',
      width: '700x27c',
      level: [pro._id],
      price: '$75',
    },
  ]

  const createAndSaveTires = async (tire) => {
    try {
      const newTires = new Tires(tire)
      console.log(newTires)
      await newTires.save()
    } catch (error) {
      console.error('Error saving tires:', error)
    }
  }

  const tireSeed = async () => {
    try {
      for (const tire of bikeTires) {
        await createAndSaveTires(tire)
      }
      console.log('Tire seeding completed')
    } catch (error) {
      console.error('Error seeding tires:', error)
    } finally {
      db.close()
    }
  }

  await tireSeed()
}

main()
