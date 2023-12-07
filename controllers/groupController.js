const { Group } = require('../models/Index')

const getAllGroups = async (req, res) => {
	try {
		const groups = await Group.find()
		res.json(groups)
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getOneGroup = async (req, res) => {
	try {
		id = req.params.id
		const group = await Group.findById(id)
		if (group) {
			return res.json(group)
		}
		return res.stats(404).send('Group with this id doesnt exist')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const createNewGroup = async (req, res) => {
	try {
		const group = await new group(req.body)
		await group.save()
		return res.status(201).json({
			group,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const updateGroup = async (req, res) => {
	try {
		const id = req.params.id
		const group = await group.findByIdAndUpdate(id, req.body, { new: true })
		if (group) {
			return res.status(200).json(group)
		}
		throw new Error('Group not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const deleteGroup = async (req, res) => {
	try {
		const id = req.params.id
		const group = await Group.findByIdAndDelete(id)
		if (group) {
			return res.status(200).json(group)
		}
		throw new Error('Group not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = {
	getAllGroups,
	getOneGroup,
	createNewGroup,
	updateGroup,
	deleteGroup,
}
