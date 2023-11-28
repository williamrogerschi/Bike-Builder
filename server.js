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
const userController = require('./controllers/userController')


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
app.get('/builds/:id', buildController.getOneBuild)
app.post('/builds', buildController.createNewBuild)
app.put('/builds/:id', buildController.updateBuild)
app.delete('/builds/:id', buildController.deleteBuild)

//frame routes
app.get('/frames', frameController.getAllFrames)
app.get('/frames/:id', frameController.getOneFrame)

//group routes
app.get('/groups', groupController.getAllGroups)
app.get('/groups/:id', groupController.getOneGroup)

//handlebar routes
app.get('/handlebars', handlebarController.getAllHandlebars)
app.get('/handlebars/:id', handlebarController.getOneHandlebar)

//level routes
app.get('/levels', levelController.getAllLevels)
app.get('/levels/:id', levelController.getOneLevel)

//material routes
app.get('/materials', materialController.getAllMaterials)
app.get('/materials/:id', materialController.getOneMaterial)

//saddle routes
app.get('/saddles', saddleController.getAllSaddles)
app.get('/saddles/:id', saddleController.getOneSaddle)

//seatpost routes
app.get('/seatposts', seatpostController.getAllSeatposts)
app.get('/seatposts/:id', seatpostController.getOneSeatpost)

//stem routes
app.get('/stems', stemController.getAllStems)
app.get('/stems/:id', stemController.getOneStem)

//tire routes
app.get('/tires', tireController.getAllTires)
app.get('/tires/:id', tireController.getOneTire)

// wheel routes
app.get('/wheels', wheelcontroller.getAllWheels)
app.get('/wheels/:id', wheelcontroller.getOneWheel)

//user routes
app.get('/users', userController.getAllUsers)
app.get('/users/:id', userController.getOneUser)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) )