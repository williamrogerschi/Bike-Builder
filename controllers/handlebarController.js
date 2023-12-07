const { Handlebar } = require('../models/Index')

const getAllHandlebars = async (req, res) => {
	try {
		const handlebars = await Handlebar.find()
		res.json(handlebars)
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getOneHandlebar = async (req, res) => {
	try {
		id = req.params.id
		const handlebar = await Handlebar.findById(id)
		if (handlebar) {
			return res.json(handlebar)
		}
		return res.status(404).send('Handlebar with this id doesnt exist')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const createNewHandlebar = async (req, res) => {
	try {
		const handlebar = await new Handlebar(req.body)
		await handlebar.save()
		return res.status(201).json({
			handlebar,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const updateHandlebar = async (req, res) => {
	try {
		const id = req.params.id
		const handlebar = await Handlebar.findByIdAndUpdate(id, req.body, {
			new: true,
		})
		if (handlebar) {
			return res.status(200).json(handlebar)
		}
		throw new Error('Handlebar not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const deleteHandlebar = async (req, res) => {
	try {
		const id = req.params.id
		const handlebar = await Handlebar.findByIdAndDelete(id)
		if (handlebar) {
			return res.status(200).json(handlebar)
		}
		throw new Error('Handlebar not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = {
	getAllHandlebars,
	getOneHandlebar,
	createNewHandlebar,
	updateHandlebar,
	deleteHandlebar,
}
