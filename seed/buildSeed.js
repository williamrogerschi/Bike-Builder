const db = require('../db/index')
const { Frame, Group, Handlebar, Saddle, Seatpost, Stem, Tires, Wheels, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const carbon = await Material.findOne({ name: 'Carbon' })
  const pro = await Levels.findOne({ name: 'Pro' })

  const bikeBuilds = [
    {
      name: 'SuperSix EVO Hi-MOD Frameset',
      brand: 'Cannondale',
      description: `The all-new SuperSix EVO destroys expectations. So light, so fast, and so aero, it defies logic. This is a machine built to make you faster everywhere. Speed has evolved.`,
      color: 'Smoke Black',
      material: [carbon._id],
      image: 'https://embed.widencdn.net/img/dorelrl/bsdfe1q71m/1100px@1x/C23_C11182U_SuperSix_EVO_HM_AM_Frm_SBK_PD.webp?color=F1F1F1&q=99',
      level: [pro._id],
      price: '$4500',
    },
  ]

  const createAndSaveBuilds = async (build) => {
    try {
      const newBuild = new Build(build)
      console.log(newBuild)
      await newBuild.save()
    } catch (error) {
      console.error('Error saving builds:', error)
    }
  }

  const buildSeed = async () => {
    try {
      for (const build of bikeBuilds) {
        await createAndSaveBuilds(build)
      }
      console.log('Build seeding completed')
    } catch (error) {
      console.error('Error seeding builds:', error)
    } finally {
      db.close()
    }
  }

  await buildSeed()
}

main()
