const db = require('../db/index')
const { Stem, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const carbon = await Material.findOne({ name: 'Carbon' })
    const pro = await Levels.findOne({ name: 'Pro' })

    const bikeStems = [
        {
            name: 'Enve Road',
            brand: 'Enve',
            description: 'Road, Gravel, and Cyclocross riders turn to the ENVE Road Carbon Stem for a lightweight and reliable setup with optimized road feel.',
            material: [carbon._id],
            image: 'https://enve.com/cdn/shop/products/ENVE_RoadStem_HiRez_12-scaled.jpg?v=1700065021&width=1800',
            level: [pro._id],
            price: '$300',
        },
    ]

    const createAndSaveStem = async (stem) => {
        try {
            const newStems = new Stem(stem)
            console.log(newStems)
            await newStems.save()
        } catch(error) {
            console.error('Error saving stems:', error)
        }
    }

    const stemSeed = async () => {
        try {
            for (const stem of bikeStems) {
                await createAndSaveStem(stem)
            }
            console.log('Stem seeding completed')
        } catch (error) {
            console.error('Error seeding stems:', error)
        } finally {
            db.close()
        }
    }

    await stemSeed()
}

main()