const db = require('../db/index');
const { List, Frame, Group, Handlebar, Saddle, Seatpost, Stem, Tires, Wheels, Levels } = require('../models/Index.js');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const listSeed = async () => {
  try {
    const frames = await Frame.find();
    const groupset = await Group.find();
    const wheelset = await Wheels.find();
    const tires = await Tires.find();
    const saddle = await Saddle.find();
    const handlebar = await Handlebar.find();
    const stem = await Stem.find();
    const seatpost = await Seatpost.find();
    const pro = await Levels.find();

    const listBuild = {
      frame: frames,
      groupset: groupset,
      wheelset: wheelset,
      tires: tires,
      saddle: saddle,
      handlebar: handlebar,
      stem: stem,
      seatpost: seatpost,
      level: pro,
    };

    const newList = new List(listBuild);
    await newList.save();

    console.log('List seeding completed');
  } catch (error) {
    console.error('Error seeding lists:', error);
  }
};

listSeed()
  .then(() => {
    console.log('Seeding completed');
    db.close();
  })
  .catch((error) => {
    console.error('Error during seeding:', error);
    db.close();
  });
