const mongoose = require('mongoose')
const buildSchema = require('./Build.js')
const frameSchema = require('./Frame.js')
const groupSchema = require('./Group.js')
const handlebarSchema = require('./Handlebar.js')
const materialSchema = require('./Material.js')
const saddleSchema = require('./Saddle.js')
const seatSchema = require('./Seatpost.js')
const stemSchema = require('./Stem.js')
const tireSchema = require('./Tires.js')
const userSchema = require('./User.js')
const wheelSchema = require('./Wheels.js')
const levelSchema = require('./Levels.js')
const listSchema = require('./List.js')


const Build = mongoose.model('Build', buildSchema)
const Frame = mongoose.model('Frame', frameSchema)
const Group = mongoose.model('Group', groupSchema)
const Handlebar = mongoose.model('Handlebar', handlebarSchema)
const Material = mongoose.model('Material', materialSchema)
const Saddle = mongoose.model('Saddle', saddleSchema)
const Seatpost = mongoose.model('Seatpost', seatSchema)
const Stem = mongoose.model('Stem', stemSchema)
const Tires = mongoose.model('Tires', tireSchema)
const User = mongoose.model('User', userSchema)
const Wheels = mongoose.model('Wheels', wheelSchema)
const Levels = mongoose.model('Levels', levelSchema)
const List = mongoose.model('List', listSchema)



module.exports = {
    Build,
    Frame, 
    Group,
    Handlebar,
    Material,
    Saddle,
    Seatpost,
    Stem,
    Tires,
    User,
    Wheels,
    Levels,
    List,
}