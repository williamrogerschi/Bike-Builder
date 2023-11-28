const { Stem } = require('../models/Index')

const getAllStems = async (req, res) => {
    try {
        const stems = await Stem.find()
        res.json(stems)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneStem = async (req, res) => {
    try {
        id = req.params.id
        const stem = await Stem.findById(id)
        if(stem) {
            return res.json(stem)
        }
        return res.status(404).send('Stem with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllStems,
    getOneStem,
}