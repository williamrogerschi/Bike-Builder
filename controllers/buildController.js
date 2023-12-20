const { Build } = require('../backend/models/Index')

const getAllBuilds = async (req, res) => {
	try {
		const builds = await Build.find()
		res.json(builds)
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getOneBuild = async (req, res) => {
	try {
		const id = req.params.id
		const build = await Build.findById(id)
		if (build) {
			return res.json(build)
		}
		return res.status(404).send('Build with this id doesnt exist')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const createNewBuild = async (req, res) => {
	try {
		const build = await new Build(req.body)
		await build.save()
		return res.status(201).json({
			build,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const updateBuild = async (req, res) => {
	try {
		const buildId = req.params.id
		const build = await Build.findByIdAndUpdate(buildId, req.body, {
			new: true,
		})
		if (build) {
			return res.status(200).json(build)
		}
		throw new Error('Build not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const deleteBuild = async (req, res) => {
	try {
		const id = req.params.id
		const build = await Build.findByIdAndDelete(id)
		if (build) {
			return res.status(200).json(Build)
		}
		throw new Error('Build not found')
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = {
	getAllBuilds,
	getOneBuild,
	createNewBuild,
	updateBuild,
	deleteBuild,
}
