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
		if (saddle) {
			return res.json(saddle)
		}
		return res.status(404).send('Saddle with this id doesnt exist')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const createNewSaddle = async (req, res) => {
	try {
		const saddle = await new Saddle(req.body)
		await saddle.save()
		return res.status(201).json({
			saddle,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const updateSaddle = async (req, res) => {
	try {
		const id = req.params.id
		const saddle = await Saddle.findByIdAndUpdate(id, req.body, { new: true })
		if (saddle) {
			return res.status(200).json(saddle)
		}
		throw new Error('Saddle not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const deleteSaddle = async (req, res) => {
	try {
		const id = req.params.id
		const saddle = await Saddle.findByIdAndDelete(id)
		if (saddle) {
			return res.status(200).json(saddle)
		}
		throw new Error('Saddle not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = {
	getAllSaddles,
	getOneSaddle,
	createNewSaddle,
	updateSaddle,
	deleteSaddle,
}
