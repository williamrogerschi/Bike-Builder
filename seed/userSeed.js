const db = require('../db/index');
const { User } = require('../models/Index.js');
const { Build } = require('../models/Index.js'); // Import the Build model

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createEmptyBuild = async () => {
  try {
    const emptyBuild = await Build.create({
      user: null,
      frame: null,
      groupset: null,
      wheelset: null,
      tires: null,
      saddle: null,
      handlebar: null,
      stem: null,
      seatpost: null,
      total_price: '0',
      isCurrent: true,
      name: 'new build',
    });
    return emptyBuild._id;
  } catch (error) {
    console.error('Error creating empty build:', error);
    return null;
  }
};

const userSeed = async () => {
  try {
    const users = [
      {
        user_name: 'Essel',
        current_build: null,
        saved_builds: null
      },
      {
        user_name: 'Wumpy',
        current_build: null,
        saved_builds: null,
      },
    ];

    const createdUsers = await User.insertMany(users);
    console.log('Users created:', createdUsers);

    for (const user of createdUsers) {
      const emptyBuildId = await createEmptyBuild();

      if (emptyBuildId) {
        user.current_build = emptyBuildId;
        user.saved_builds = [emptyBuildId];
        await user.save();
        console.log(`Empty build created and associated with user: ${user.user_name}`);
      } else {
        console.error('Failed to create an empty build.');
      }
    }

    console.log('User seeding completed');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = { userSeed };
