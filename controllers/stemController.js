const { Stem } = require('../models/Index')

const getAllStems = async (req, res) => {
    try {
        const stems = await Stem.find()
        res.json(stems)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllStems,
}