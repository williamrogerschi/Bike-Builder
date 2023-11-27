const db = require('../db/index')
const { Group, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const carbon = await Material.findOne({ name: 'Carbon' })
  const pro = await Levels.findOne({ name: 'Pro' })

  const bikeGroups = [
    {
      name: 'SRAM RED eTap AXS Groupset',
      brand: 'SRAM',
      description: `Road riders are going beyond where we've ever gone before. We're going further and faster. And when the road stops, we keep going. One thing hasn't changed: We want to push those boundaries without any distractions. So we made eTap AXS for today's riders. The result: an intuitive, high-performance groupset that means you can focus on what's most important—your ride. Exploring new limits has never been easier. SRAM RED eTap AXS—Simply Beyond.`,
      material: [carbon._id],
      image: 'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/groupset/groupset/gs-red-electronic-b1/c48351028ebwhor.jpg?w=2000&quality=80&format=webp',
      level: [pro._id],
      price: '$2690',
    },
  ]

  const createAndSaveGroups = async (group) => {
    try {
      const newGroup = new Group(group)
      console.log(newGroup)
      await newGroup.save()
    } catch (error) {
      console.error('Error saving groups:', error)
    }
  }

  const groupSeed = async () => {
    try {
      for (const group of bikeGroups) {
        await createAndSaveGroups(group)
      }
      console.log('Group seeding completed')
    } catch (error) {
      console.error('Error seeding groups:', error)
    } finally {
      db.close()
    }
  }

  await groupSeed()
}

main()
