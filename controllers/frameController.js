const { Frame } = require('../models/Index')

const getAllFrames = async (req, res) => {
    try {
        const frames = await Frame.find().populate('level'); // Populate the 'level' field to retrieve level details
        res.json(frames);
        console.log(frames)
      } catch (error) {
        res.status(500).json({ error: 'Error fetching frames' });
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

const createNewFrame = async (req, res) => {
    try {
        const frame = await new Frame (req.body)
        await frame.save()
        return res.status(201).json({
            frame
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


const  updateFrame = async (req, res) => {
    try {
        const id = req.params.id
        const frame = await Frame.findByIdAndUpdate(id, req.body, {new: true})
        if (frame) {
            return res.status(200).json(frame)
        }
        throw new Error('Frame not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteFrame = async (req, res) => {
    try {
        const id = req.params.id
        const frame =  await Frame.findByIdAndDelete(id)
        if (frame) {
            return res.status(200).json(frame)
        }
        throw new Error('Frame not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllFrames,
    getOneFrame,
    createNewFrame,
    updateFrame,
    deleteFrame,
}