const db = require('../db/index')
const { Group, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const aluminum = await Material.findOne( { name: 'Aluminum' })
  const carbon = await Material.findOne({ name: 'Carbon' })
  const steel = await Material.findOne({ name: 'Steel' })
  const pro = await Levels.findOne({ name: 'Pro' })
  const intermediate = await Levels.findOne({ name: 'Intermediate'})
  const entry = await Levels.findOne({ name: 'Entry' })

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
    {
      name: 'SRAM Force eTap AXS Groupset',
      brand: 'SRAM',
      description: 'You asked. We listened. eTap is now available for Force. SRAM Force eTap AXS offers the key features of RED eTap AXS—modern gearing, advanced chain management, and easy personalization—in a more affordable package. Exploring new limits has never been easier. SRAM Force eTap AXS—Simply Beyond.',
      material: [carbon._id],
      image: 'https://www.sram.com/globalassets/image-hierarchy/sram-product-root-images/groupset/groupset/gs-force-electronic-a1/c48351033discwhor.jpg?w=1000',
      level: [pro._id],
      price: '$1560',
    },
    {
      name: 'Shimano 105 R7150 Di2 12-speed Groupset',
      brand: 'Shimano',
      description: 'The highly anticipated Shimano 105 R7100 group not only delivers Di2 performance to an entirely new range of riders, but it offers Shimano’s flagship 12-speed, wireless shifting with easy operation and increased reliability in a more attainable package.',
      material: [aluminum._id],
      image: 'https://escapecollective.com/wp-content/uploads/2023/08/Shimano-105-12-speed-mechanical-R7100.jpg',
      level: [intermediate._id],
      price: '$1100',
    },
    {
      name: 'Shimano R8000 Groupset',
      brand: 'Shimano',
      description: 'New ULTEGRA R8000 series is "pro-proven" as it is a direct trickle down from DURA-ACE groupset. As road bike component, the stress-free operation is one of the most important feature to lead all day riding comfort with braking and shifting.',
      material: [aluminum._id],
      image: 'https://cdn.road.cc/sites/default/files/styles/main_width/public/shimano-ultegra-r8000-mechanical-and-rim-brake-1.jpg',
      level: [intermediate._id],
      price: '$900',
    },
    {
      name: 'SRAM Rival 22 Groupset',
      brand: 'SRAM',
      description: 'The new SRAM Rival 22 groupset delivers immense performance across a broad variety of bikes and disciplines. Paved or not. Cyclocross or triathlon. Road racing or unchartered journeys. Rival 22 provides the ergonomics, efficiency and technology for finely tuned cyclists to meet each challenge and expand their limits.',
      material: [aluminum._id],
      image: 'https://cdn11.bigcommerce.com/s-kvyj4/images/stencil/1280x1280/products/489/5864/sram_rival22_groupset__31915.1589574803.jpg?c=2',
      level: [entry._id],
      price: '$780'
    }
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
