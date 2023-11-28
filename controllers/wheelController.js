const { Wheels } = require('../models/Index')

const getAllWheels = async (req, res) => {
    try {
        const wheels = await Wheels.find()
        res.json(wheels)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneWheel = async (req, res) => {
    try {
        id = req.params.id
        const wheel = await Wheels.findById(id)
        if(wheel) {
            return res.json(wheel)
        }
        return res.status(404).send('Wheel with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllWheels,
    getOneWheel,
}