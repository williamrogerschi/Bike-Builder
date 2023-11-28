const { Tires } = require('../models/Index')

const getAllTires = async (req, res) => {
    try {
        const tires = await Tires.find()
        res.json(tires)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTires,
}