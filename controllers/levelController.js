const { Levels } = require('../models/Index')

const getAllLevels = async (req, res) => {
    try {
        const levels = await Levels.find()
        res.json(levels)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneLevel = async (req, res) => {
    try {
        id = req.params.id
        const level = await Levels.findById(id)
        if(level) {
            return res.json(level)
        }
        return res.status(404).send('Level with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllLevels,
    getOneLevel,
}