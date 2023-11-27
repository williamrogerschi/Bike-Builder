const db = require('../db/index')
const { Frame, Levels, Material } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const carbon = await Material.findOne({ name: 'Carbon' })
  const pro = await Levels.findOne({ name: 'Pro' })

  const bikeFrames = [
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

  const createAndSaveFrames = async (frame) => {
    try {
      const newFrame = new Frame(frame)
      console.log(newFrame)
      await newFrame.save()
    } catch (error) {
      console.error('Error saving frames:', error)
    }
  }

  const frameSeed = async () => {
    try {
      for (const frame of bikeFrames) {
        await createAndSaveFrames(frame)
      }
      console.log('Frame seeding completed')
    } catch (error) {
      console.error('Error seeding frames:', error)
    } finally {
      db.close()
    }
  }

  await frameSeed()
}

main()
