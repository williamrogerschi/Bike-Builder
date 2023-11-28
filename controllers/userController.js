const { User } = require('../models/Index')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneUser = async (req, res) => {
    try {
        id = req.params.id
        const user = await User.findById(id)
        if(user) {
            return res.json(user)
        }
        return res.status(404).send('User with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
}