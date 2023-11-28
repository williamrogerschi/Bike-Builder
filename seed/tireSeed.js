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
      level: [pro._id],
      price: '$75',
    },
    {
      name: 'Corsa PRO',
      brand: 'Vittoria',
      description: `Ultimate cornering grip in wet or dry conditions. Reinforced puncture resistance. A supple construction that reduces rolling resistance and makes chattery chip seal feel like freshly laid tarmac. The Corsa PRO combines the convenience of a tubeless-ready clincher platform with the pedigree of the world’s most successful racing tire, proven in the rarefied air of France’s highest passes and the punchy finales of the classics alike.`,
      image: 'https://vittoria.com/cdn/shop/files/corsa-pro-road-pro-competition-tubeless-ready-1.webp?v=1697534448&width=1600',
      color: 'Tan',
      level: [pro._id],
      price: '$105',
    },
    {
      name: 'Grand Prix 5000 S TR',
      brand: 'Continental',
      description: `Lighter, faster and with stronger sidewalls. Ride faster, more comfortable, and with increased puncture protection.`,
      image: 'https://www.continental-tires.com/content/dam/conti-tires-cms/continental/b2c/products/bicycle-tires/Continental_Grand-Prix-5000_ProductPicture_30.png/jcr:content/renditions/950x950.png',
      color: 'Black',
      level: [intermediate._id],
      price: '$70',
    },
    {
      name: 'Panaracer Protite',
      brand: 'Panaracer',
      description: `The Pasela ProTire is available in a wide range of sizes. It incorporates ProTite technology for puncture protection and has two excellent all around tread patterns. Available in a folding or steel bead configuration. A series renewal offering the same basic performance with enhanced puncture resistances.`,
      image: 'https://www.panaracerusa.com/cdn/shop/products/PASELAPRO-A_3ec43c9f-2c58-4e02-8177-9569aa5605d2_1800x1800.jpg?v=1591906857',
      color: 'Tan',
      level: [entry._id],
      price: '$40',
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
