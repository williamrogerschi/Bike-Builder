const { Tires } = require('../models/Index')

const getAllTires = async (req, res) => {
    try {
        const tires = await Tires.find()
        res.json(tires)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneTire = async (req, res) => {
    try {
        id = req.params.id
        const tire = await Tires.findById(id)
        if(tire) {
            return res.json(tire)
        }
        return res.status(404).send('Tire with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTires,
    getOneTire,
}