const { Build } = require('../models/Index')

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
        if(build) {
            return res.json(build)
        }
        return res.status(404).send('Build with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllBuilds,
    getOneBuild,
}