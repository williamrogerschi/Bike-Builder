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
        if(group) {
            return res.json(group)
        }
        return res.stats(404).send('Group with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllGroups,
    getOneGroup,
}