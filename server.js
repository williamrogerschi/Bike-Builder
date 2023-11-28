const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')


//show route controllers
// const bikeTypeController = require('./controllers/bikeTypeController')
const buildController = require('./controllers/buildController')
// const frameController = require('./controllers/frameController')
// const groupController = require('./controllers/groupController')
// const handlebarController = require('./controllers/handlebarController')
// const materialController = require('./controllers/materialController')
// const pedalController = require('./controllers/pedalController')
// const saddleController = require('./controllers/saddleController')
// const stemController = require('./controllers/stemController')
// const tireController = require('./controllers/tireController')
// const wheelcontroller = require('./controllers/wheelController')
// const userController = require('./controllers/userController')


const PORT = process.env.PORT || 3001


//middleware
const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())


//show routes
app.get('/', (req, res) => res.send('This is the root yo!'))

//user routes
// app.get('/users', userController.getAllUsers)

//build routes
app.get('/builds', buildController.getAllBuilds)

//frame routes
// app.get('/frames', frameController.getAllFrames)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) )