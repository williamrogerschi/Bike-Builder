const db = require('../db/index')
const { Seatpost, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const carbon = await Material.findOne({ name: 'Carbon' })
  const pro = await Levels.findOne({ name: 'Pro' })

  const bikeSeatpost = [
    {
      name: 'Enve Seatpost 300MM',
      brand: 'Enve',
      description: 'Lightweight, reliable, and adjustable Twin-Bolt patented design ENVE Carbon Road Bike Seatpost in 300mm length.',
      material: [carbon._id],
      image: 'https://enve.com/cdn/shop/products/ENVE_300mm_Seatpost_3-1.jpg?v=1683741485&width=1800',
      level: [pro._id],
      price: '$300',
    },
  ]

  const createAndSaveSeatpost = async (seatpost) => {
    try {
      const newSeatpost = new Seatpost(seatpost)
      console.log(newSeatpost)
      await newSeatpost.save()
    } catch (error) {
      console.error('Error saving seatposts:', error)
    }
  }

  const seatpostSeed = async () => {
    try {
      for (const seatpost of bikeSeatpost) {
        await createAndSaveSeatpost(seatpost)
      }
      console.log('Seatpost seeding completed')
    } catch (error) {
      console.error('Error seeding seatposts:', error)
    } finally {
      db.close()
    }
  }

  await seatpostSeed()
}

main()
