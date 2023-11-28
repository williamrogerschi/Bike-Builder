const { Group } = require('../models/Index')

const getAllGroups = async (req, res) => {
    try {
        const groups = await Group.find()
        res.json(groups)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllGroups,
}