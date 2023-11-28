const { Frame } = require('../models/Index')

const getAllFrames = async (req, res) => {
    try {
        const frames = await Frame.find()
        res.json(frames)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllFrames,
}