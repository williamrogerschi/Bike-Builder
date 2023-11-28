const db = require('../db/index')
const { Saddle, Levels } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const pro = await Levels.findOne({ name: 'Pro' })

  const bikeSaddles = [
    {
      name: 'SLR Boost 3D Kit Carbonio Superflow',
      brand: 'Sell Italia',
      description: 'Improve your road cycling performance with the Hi-Tech Carbon rails of the 3D printed SLR Boost 3D Kit Carbonio Superflow.',
      color: 'Black',
      image: 'https://cdn11.bigcommerce.com/s-ubg9970srq/images/stencil/1280x1280/products/208/2209/041A924RCA011_SLR_BOOST_3D_KIT_CARBONIO_SUPERFLOW_L_L3_THREE_QUARTER__66617.1681310787.jpg?c=1',
      level: [pro._id],
      price: '$480',
    },
  ]

  const createAndSaveSaddles = async (saddle) => {
    try {
      const newSaddle = new Saddle(saddle)
      console.log(newSaddle)
      await newSaddle.save()
    } catch (error) {
      console.error('Error saving saddles:', error)
    }
  }

  const saddleSeed = async () => {
    try {
      for (const saddle of bikeSaddles) {
        await createAndSaveSaddles(saddle)
      }
      console.log('Saddle seeding completed')
    } catch (error) {
      console.error('Error seeding saddles:', error)
    } finally {
      db.close()
    }
  }

  await saddleSeed()
}

main()
