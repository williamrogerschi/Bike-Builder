const db = require('../db/index')
const { Levels, Material, Wheels, User, Build, Frame, Group, Handlebar, Saddle, Seatpost, Stem, Tires } = require('../models/Index.js')

const { levelSeed } = require('./levelSeed')
const { materialSeed } = require('./materialSeed')
const { wheelSeed } = require('./wheelSeed')
const { tireSeed } = require('./tireSeed')
const { stemSeed } = require('./stemSeed')
const { seatpostSeed } = require('./seatpostSeed')
const { saddleSeed } = require('./saddleSeed')
const { handlebarSeed } = require('./handlebarSeed')
const { groupSeed } = require('./groupSeed')
const { frameSeed } = require('./frameSeed')
const { userSeed } = require('./userSeed')
const { buildSeed } = require('./buildSeed')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const dropCollections = async () => {
    try {
        await Levels.deleteMany({})
        await Material.deleteMany({})
        await Wheels.deleteMany({})
        await Tires.deleteMany({})
        await Stem.deleteMany({})
        await Seatpost.deleteMany({})
        await Saddle.deleteMany({})
        await Handlebar.deleteMany({})
        await Group.deleteMany({})
        await Frame.deleteMany({})
        await User.deleteMany({})
        await Build.deleteMany({})
        console.log('Collections dropped')
    } catch (error) {
        console.error('Error dropping collections:', error)
    }
}

const allSeed = async () => {
    try {
      await dropCollections()
      await levelSeed()
      await materialSeed()
      await wheelSeed()
      await tireSeed()
      await stemSeed()
      await seatpostSeed()
      await saddleSeed()
      await handlebarSeed()
      await groupSeed()
      await frameSeed()
      await userSeed()
      await buildSeed()
      console.log('All seeding completed successfully')
    } catch (error) {
      console.error('Error in seeding process:', error)
    } finally {
      db.close()
    }
  }
  
  allSeed()




