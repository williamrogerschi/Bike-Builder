const { Frame } = require('../models/Index')

const getAllFrames = async (req, res) => {
    try {
        const frames = await Frame.find()
        res.json(frames)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneFrame = async (req, res) => {
    try {
        id = req.params.id
        const frame = await Frame.findById(id)
        if(frame) {
            return res.json(frame)
        }
        return res.stauts(404).send('Frame with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllFrames,
    getOneFrame,
}