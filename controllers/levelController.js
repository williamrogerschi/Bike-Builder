const { Levels } = require('../models/Index')

const getAllLevels = async (req, res) => {
	try {
		const levels = await Levels.find()
		res.json(levels)
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getOneLevel = async (req, res) => {
	try {
		id = req.params.id
		const level = await Levels.findById(id)
		if (level) {
			return res.json(level)
		}
		return res.status(404).send('Level with this id doesnt exist')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const createNewLevel = async (req, res) => {
	try {
		const level = await new Levels(req.body)
		await level.save()
		return res.status(201).json({
			level,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const updateLevel = async (req, res) => {
	try {
		const id = req.params.id
		const level = await Levels.findByIdAndUpdate(id, req.body, { new: true })
		if (level) {
			return res.status(200).json(level)
		}
		throw new Error('Level not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const deleteLevel = async (req, res) => {
	try {
		const id = req.params.id
		const level = await Levels.findByIdAndDelete(id)
		if (level) {
			return res.status(200).json(level)
		}
		throw new Error('Level not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = {
	getAllLevels,
	getOneLevel,
	createNewLevel,
	updateLevel,
	deleteLevel,
}
