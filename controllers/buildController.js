const { Build } = require('../models/Index')

const getAllBuilds = async (req, res) => {
    try {
        const builds = await Build.find()
        res.json(builds)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllBuilds,
}