const { Wheels } = require('../models/Index')

const getAllWheels = async (req, res) => {
    try {
        const wheels = await Wheels.find()
        res.json(wheels)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllWheels,
}