const { Wheels } = require('../models/Index')

const getAllWheels = async (req, res) => {
    try {
        const wheels = await Wheels.find()
        res.json(wheels)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneWheel = async (req, res) => {
    try {
        id = req.params.id
        const wheel = await Wheels.findById(id)
        if(wheel) {
            return res.json(wheel)
        }
        return res.status(404).send('Wheel with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createNewWheel = async (req, res) => {
    try {
        const wheel = await new Wheels (req.body)
        await wheel.save()
        return res.status(201).json({
            wheel
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const  updateWheel = async (req, res) => {
    try {
        const id = req.params.id
        const wheel = await Wheels.findByIdAndUpdate(id, req.body, {new: true})
        if (wheel) {
            return res.status(200).json(wheel)
        }
        throw new Error('Wheel not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteWheel = async (req, res) => {
    try {
        const id = req.params.id
        const wheel =  await Wheels.findByIdAndDelete(id)
        if (wheel) {
            return res.status(200).json(wheel)
        }
        throw new Error('Wheel not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = {
    getAllWheels,
    getOneWheel,
    createNewWheel,
    updateWheel,
    deleteWheel,
}