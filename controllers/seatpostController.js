const { Seatpost } = require('../models/Index')

const getAllSeatposts = async (req, res) => {
    try {
        const seatposts = await Seatpost.find()
        res.json(seatposts)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneSeatpost = async (req, res) => {
    try {
        id = req.params.id
        const seatpost = await Seatpost.findById(id)
        if(seatpost) {
            return res.json(seatpost)
        }
        return res.status(404).send('Seatpost with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllSeatposts,
    getOneSeatpost,
}