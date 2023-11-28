const db = require('../db/index')
const { Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const materialSeed = async () => {
  try {
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
    ];

    const createAndSaveMaterial = async (material) => {
      try {
        const newMaterial = new Material(material)
        console.log(newMaterial)
        await newMaterial.save()
      } catch (error) {
        console.error('Error saving material:', error)
      }
    }

    for (const material of bikeMaterials) {
      await createAndSaveMaterial(material)
    }

    console.log('Materials seeding completed')
  } catch (error) {
    console.error('Error seeding materials:', error)
  }
}

module.exports = { materialSeed }
