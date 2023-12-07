const { Material } = require('../models/Index')

const getAllMaterials = async (req, res) => {
	try {
		const materials = await Material.find()
		res.json(materials)
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getOneMaterial = async (req, res) => {
	try {
		id = req.params.id
		const material = await Material.findById(id)
		if (material) {
			return res.json(material)
		}
		return res.status(404).send('Material with this id doesnt exist')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const createNewMaterial = async (req, res) => {
	try {
		const material = await new Material(req.body)
		await material.save()
		return res.status(201).json({
			material,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const updateMaterial = async (req, res) => {
	try {
		const id = req.params.id
		const material = await Material.findByIdAndUpdate(id, req.body, {
			new: true,
		})
		if (material) {
			return res.status(200).json(material)
		}
		throw new Error('Material not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const deleteMaterial = async (req, res) => {
	try {
		const id = req.params.id
		const material = await Material.findByIdAndDelete(id)
		if (material) {
			return res.status(200).json(material)
		}
		throw new Error('Material not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = {
	getAllMaterials,
	getOneMaterial,
	createNewMaterial,
	updateMaterial,
	deleteMaterial,
}
