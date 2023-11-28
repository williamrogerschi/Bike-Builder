const db = require('../db/index')
const { User } = require('../models/Index.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createUser = async () => {
  try {
    const userWumpy = {
      user_name: 'Wumpy',
      current_build: null, 
      saved_builds: []
    }

    const newUser = new User(userWumpy)
    await newUser.save()
    console.log('User "Wumpy" created:', newUser)

    console.log('User seeding completed')
  } catch (error) {
    console.error('Error seeding user:', error)
  } finally {
    db.close()
  }
}

createUser()

// node levelSeed.js
// node materialSeed.js
// node wheelSeed.js
// node tireSeed.js
// node stemSeed.js
// node seatpostSeed.js
// node saddleSeed.js
// node handlebarSeed.js
// node frameSeed.js
// node groupSeed.js
// node userSeed.js
// node buildSeed.js

