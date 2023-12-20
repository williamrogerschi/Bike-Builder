const { List } = require('../models/Index')

const getAllLists = async (req, res) => {
	try {
		const lists = await List.find()
		res.json(lists)
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getOneList = async (req, res) => {
	try {
		const id = req.params.id
		const list = await List.findById(id)
		if (list) {
			return res.json(list)
		}
		return res.status(404).send('List with this id doesnt exist')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const createNewList = async (req, res) => {
	try {
		const list = await new List(req.body)
		await List.save()
		return res.status(201).json({
			list,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const updateList = async (req, res) => {
	try {
		const id = req.params.id
		const list = await List.findByIdAndUpdate(id, req.body, { new: true })
		if (list) {
			return res.status(200).json(list)
		}
		throw new Error('List not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const deleteList = async (req, res) => {
	try {
		const id = req.params.id
		const list = await List.findByIdAndDelete(id)
		if (list) {
			return res.status(200).json(list)
		}
		throw new Error('List not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = {
	getAllLists,
	getOneList,
	createNewList,
	updateList,
	deleteList,
}
