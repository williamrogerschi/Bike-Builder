const { Saddle } = require('../models/Index')

const getAllSaddles = async (req, res) => {
    try {
        const saddles = await Saddle.find()
        res.json(saddles)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneSaddle = async (req, res) => {
    try {
        id = req.params.id
        const saddle = await Saddle.findById(id)
        if(saddle) {
            return res.json(saddle)
        }
        return res.status(404).send('Saddle with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllSaddles,
    getOneSaddle,
}