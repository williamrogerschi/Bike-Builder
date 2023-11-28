const { Saddle } = require('../models/Index')

const getAllSaddles = async (req, res) => {
    try {
        const saddles = await Saddle.find()
        res.json(saddles)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllSaddles,
}