const mongoose = require('mongoose')
mongoose
    .connect('mongodb://127.0.0.1:27017/bikeDatabase')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })
const db = mongoose.connection
module.exports = db




// const mongoose = require('mongoose')

// const dbName = 'bikeDatabase'
// let uri = `mongodb+srv://williamrogerschi:Jukath00n1990!@bike-labs.vjfh7uc.mongodb.net/${dbName}?retryWrites=true&w=majority`

// mongoose
//     .connect(uri)
//     .then(() => {
//         console.log('Successfully connected to MongoDB.')
//     })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

// const db = mongoose.connection
// module.exports = db
