const { Seatpost } = require('../models/Index')

const getAllSeatposts = async (req, res) => {
    try {
        const seatposts = await Seatpost.find()
        res.json(seatposts)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllSeatposts,
}