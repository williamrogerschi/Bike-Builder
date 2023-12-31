const { Seatpost } = require('../models/Index')

const getAllSeatposts = async (req, res) => {
	try {
		const seatposts = await Seatpost.find()
		res.json(seatposts)
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getOneSeatpost = async (req, res) => {
	try {
		id = req.params.id
		const seatpost = await Seatpost.findById(id)
		if (seatpost) {
			return res.json(seatpost)
		}
		return res.status(404).send('Seatpost with this id doesnt exist')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const createNewSeatpost = async (req, res) => {
	try {
		const seatpost = await new Seatpost(req.body)
		await seatpost.save()
		return res.status(201).json({
			seatpost,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const updateSeatpost = async (req, res) => {
	try {
		const id = req.params.id
		const seatpost = await Seatpost.findByIdAndUpdate(id, req.body, {
			new: true,
		})
		if (seatpost) {
			return res.status(200).json(seatpost)
		}
		throw new Error('Seatpost not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const deleteSeatpost = async (req, res) => {
	try {
		const id = req.params.id
		const seatpost = await Seatpost.findByIdAndDelete(id)
		if (seatpost) {
			return res.status(200).json(seatpost)
		}
		throw new Error('Seatpost not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = {
	getAllSeatposts,
	getOneSeatpost,
	createNewSeatpost,
	updateSeatpost,
	deleteSeatpost,
}
