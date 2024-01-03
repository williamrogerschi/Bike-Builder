const express = require('express')
const connectDB = require('./db/index.js')
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
const wheelController = require('./controllers/wheelController')
const levelController = require('./controllers/levelController')
const seatpostController = require('./controllers/seatpostController')
const userController = require('./controllers/userController')
const listController = require('./controllers/listController')
const { Build } = require('./models/Index')


const PORT = process.env.PORT || 3001


//middleware
const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

connectDB()
    .then((db) => {
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    })
    .catch((error) => console.error(error))


//show routes
app.get('/', (req, res) => res.send('This is the root yo!'))

//build routes
app.get('/builds', buildController.getAllBuilds)
app.get('/builds/:id', buildController.getOneBuild)
app.post('/builds', buildController.createNewBuild)
app.put('/builds/:id', buildController.updateBuild)
app.delete('/builds/:id', buildController.deleteBuild)
app.get('/builds', async (req, res) => {
    try {
        const builds = await Build.find().populate('frame groupset')
        res.json(builds)
    } catch (error) {
        res.status(500).json({ error: 'fetching builds' })
    }
})


//list routes
app.get('/lists', listController.getAllLists)
app.get('/lists/:id', listController.getOneList)
app.post('/lists', listController.createNewList)
app.put('/lists/:id', listController.updateList)
app.delete('/lists/:id', listController.deleteList)
app.get('/lists', async (req, res) => {
    try {
        const lists = await List.find().populate('frame groupset')
        res.json(lists)
    } catch (error) {
        res.status(500).json({ error: 'fetching lists' })
    }
})

//frame routes
app.get('/frames', frameController.getAllFrames)
app.get('/frames/:id', frameController.getOneFrame)
app.post('/frames', frameController.createNewFrame)
app.put('/frames/:id', frameController.updateFrame)
app.delete('/frames/:id', frameController.deleteFrame)

//group routes
app.get('/groups', groupController.getAllGroups)
app.get('/groups/:id', groupController.getOneGroup)
app.post('/groups', groupController.createNewGroup)
app.put('/groups/:id', groupController.updateGroup)
app.delete('/groups/:id', groupController.deleteGroup)

//handlebar routes
app.get('/handlebars', handlebarController.getAllHandlebars)
app.get('/handlebars/:id', handlebarController.getOneHandlebar)
app.post('/handlebars', handlebarController.createNewHandlebar)
app.put('/handlebars/:id', handlebarController.updateHandlebar)
app.delete('/handlebars/:id', handlebarController.deleteHandlebar)

//level routes
app.get('/levels', levelController.getAllLevels)
app.get('/levels/:id', levelController.getOneLevel)
app.post('/levels', levelController.createNewLevel)
app.put('/levels/:id', levelController.updateLevel)
app.delete('/levels/:id', levelController.deleteLevel)

//material routes
app.get('/materials', materialController.getAllMaterials)
app.get('/materials/:id', materialController.getOneMaterial)
app.post('/materials', materialController.createNewMaterial)
app.put('/materials/:id', materialController.updateMaterial)
app.delete('/materials/:id', materialController.deleteMaterial)

//saddle routes
app.get('/saddles', saddleController.getAllSaddles)
app.get('/saddles/:id', saddleController.getOneSaddle)
app.post('/saddles', saddleController.createNewSaddle)
app.put('/saddles/:id', saddleController.updateSaddle)
app.delete('/saddles/:id', saddleController.deleteSaddle)

//seatpost routes
app.get('/seatposts', seatpostController.getAllSeatposts)
app.get('/seatposts/:id', seatpostController.getOneSeatpost)
app.post('/seatposts', seatpostController.createNewSeatpost)
app.put('/seatposts/:id', seatpostController.updateSeatpost)
app.delete('/seatposts/:id', seatpostController.deleteSeatpost)

//stem routes
app.get('/stems', stemController.getAllStems)
app.get('/stems/:id', stemController.getOneStem)
app.post('/stems', stemController.createNewStem)
app.put('/stems/:id', stemController.updateStem)
app.delete('/stems/:id', stemController.deleteStem)

//tire routes
app.get('/tires', tireController.getAllTires)
app.get('/tires/:id', tireController.getOneTire)
app.post('/tires', tireController.createNewTire)
app.put('/tires/:id', tireController.updateTire)
app.delete('/tires/:id', tireController.deleteTire)

// wheel routes
app.get('/wheels', wheelController.getAllWheels)
app.get('/wheels/:id', wheelController.getOneWheel)
app.post('/wheels', wheelController.createNewWheel)
app.put('/wheels/:id', wheelController.updateWheel)
app.delete('/wheels/:id', wheelController.deleteWheel)

//user routes
app.get('/users', userController.getAllUsers)
app.get('/users/:id', userController.getOneUser)
app.post('/users', userController.createNewUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)
app.get('/users/:userId/builds/:buildId', userController.getUserBuild)
app.post('/users/:userId/builds', userController.createNewUserBuild)




// app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) )
