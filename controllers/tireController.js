const { Tires } = require('../models/Index')

const getAllTires = async (req, res) => {
    try {
        const tires = await Tires.find()
        res.json(tires)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneTire = async (req, res) => {
    try {
        id = req.params.id
        const tire = await Tires.findById(id)
        if(tire) {
            return res.json(tire)
        }
        return res.status(404).send('Tire with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createNewTire = async (req, res) => {
    try {
        const tire = await new Tires (req.body)
        await tire.save()
        return res.status(201).json({
            tire
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const  updateTire = async (req, res) => {
    try {
        const id = req.params.id
        const tire = await Tires.findByIdAndUpdate(id, req.body, {new: true})
        if (tire) {
            return res.status(200).json(tire)
        }
        throw new Error('Tire not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteTire = async (req, res) => {
    try {
        const id = req.params.id
        const tire =  await Tires.findByIdAndDelete(id)
        if (tire) {
            return res.status(200).json(tire)
        }
        throw new Error('Tire not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = {
    getAllTires,
    getOneTire,
    createNewTire,
    updateTire,
    deleteTire,
}