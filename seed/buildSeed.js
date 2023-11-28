const db = require('../db/index')
const { Build, Frame, Group, Handlebar, Saddle, Seatpost, Stem, Tires, Wheels, Levels } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const frameset = await Frame.findOne({ name: 'SuperSix EVO Hi-MOD Frameset' })
  const groupset = await Group.findOne({ name: 'SRAM RED eTap AXS Groupset' })
  const wheelset = await Wheels.findOne({ name: 'SES 6.7' })
  const tires = await Tires.findOne({ name: 'SES Road Tire' })
  const saddle = await Saddle.findOne({ name: 'SLR Boost 3D Kit Carbonio Superflow' })
  const handlebar = await Handlebar.findOne({ name: 'SES AR Road Handlebar'})
  const stem = await Stem.findOne({ name: 'Enve Road' })
  const seatpost = await Seatpost.findOne({ name: 'Enve Seatpost 300MM' })
  const pro = await Levels.findOne({ name: 'Pro' })

  const framePrice = parseFloat(frameset?.price) || 4500
  const groupsetPrice = parseFloat(groupset?.price) || 2690
  const wheelsetPrice = parseFloat(wheelset?.price) || 2850
  const tiresPrice = parseFloat(tires?.price) || 75
  const saddlePrice = parseFloat(saddle?.price) || 479.90
  const handlebarPrice = parseFloat(handlebar?.price) || 400
  const stemPrice = parseFloat(stem?.price) || 300
  const seatpostPrice = parseFloat(seatpost?.price) || 300
  console.log(framePrice)

  const totalPrice = framePrice + groupsetPrice + wheelsetPrice + tiresPrice + saddlePrice + handlebarPrice + stemPrice + seatpostPrice
  console.log(totalPrice)

  const bikeBuilds = [
    {
      frame: [frameset._id],
      groupset: [groupset._id],
      wheelset: [wheelset._id],
      tires: [tires._id],
      saddle: [saddle._id],
      handlebar: [handlebar._id],
      stem: [stem._id],
      seatpost: [seatpost._id],
      level: [pro._id],
      total_price: totalPrice.toString(),
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
