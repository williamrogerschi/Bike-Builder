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

const createNewStem = async (req, res) => {
    try {
        const stem = await new Stem (req.body)
        await stemtem.save()
        return res.status(201).json({
            stem
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const  updateStem = async (req, res) => {
    try {
        const id = req.params.id
        const stem = await Stem.findByIdAndUpdate(id, req.body, {new: true})
        if (stem) {
            return res.status(200).json(stem)
        }
        throw new Error('Stem not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteStem = async (req, res) => {
    try {
        const id = req.params.id
        const stem =  await Stem.findByIdAndDelete(id)
        if (stem) {
            return res.status(200).json(stem)
        }
        throw new Error('Stem not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = {
    getAllStems,
    getOneStem,
    createNewStem,
    updateStem,
    deleteStem,
}