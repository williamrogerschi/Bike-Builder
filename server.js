const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')


//show route controllers
const buildController = require('./controllers/buildController')
const frameController = require('./controllers/frameController')
const groupController = require('./controllers/groupController')
const handlebarController = require('./controllers/handlebarController')
const materialController = require('./controllers/materialController')
const saddleController = require('./controllers/saddleController')
const stemController = require('./controllers/stemController')
const tireController = require('./controllers/tireController')
const wheelcontroller = require('./controllers/wheelController')
const levelController = require('./controllers/levelController')
const seatpostController = require('./controllers/seatpostController')
// const userController = require('./controllers/userController')


const PORT = process.env.PORT || 3001


//middleware
const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())


//show routes
app.get('/', (req, res) => res.send('This is the root yo!'))
//build routes
app.get('/builds', buildController.getAllBuilds)
//frame routes
app.get('/frames', frameController.getAllFrames)
//group routes
app.get('/groups', groupController.getAllGroups)
//handlebar routes
app.get('/handlebars', handlebarController.getAllHandlebars)
//level routes
app.get('/levels', levelController.getAllLevels)
//material routes
app.get('/materials', materialController.getAllMaterials)
//saddle routes
app.get('/saddles', saddleController.getAllSaddles)
//seatpost routes
app.get('/seatposts', seatpostController.getAllSeatposts)
//stem routes
app.get('/stems', stemController.getAllStems)
//tire routes
app.get('/tires', tireController.getAllTires)
// wheel routes
app.get('/wheels', wheelcontroller.getAllWheels)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) )