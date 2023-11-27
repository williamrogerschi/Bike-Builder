const db = require('../db/index')
const { Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const bikeMaterials = [
    {
      name: 'Carbon'
    },
    {
      name: 'Aluminum'
    },
    {
      name: 'Steel'
    }
  ]

  const createAndSaveMaterial = async (name) => {
    const newMaterial = new Material({ name })
    console.log(newMaterial)
    await newMaterial.save()
  }

  const materialSeed = async () => {
    try {
      for (const material of bikeMaterials) {
        await createAndSaveMaterial(material.name)
      }
      console.log('Materials seeding completed')
    } catch (error) {
      console.error('Error seeding materials:', error)
    } finally {
      db.close()
    }
  }

  await materialSeed()
}

main()
