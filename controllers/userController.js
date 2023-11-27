const { User } = require('../models/Index')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllUsers,
}