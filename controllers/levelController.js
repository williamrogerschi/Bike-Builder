const { Levels } = require('../models/Index')

const getAllLevels = async (req, res) => {
    try {
        const levels = await Levels.find()
        res.json(levels)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllLevels,
}