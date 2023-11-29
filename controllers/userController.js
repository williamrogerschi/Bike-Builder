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

const createNewUser = async (req, res) => {
    try {
        const user = await new User (req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const  updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, req.body, {new: true})
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('User not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user =  await User.findByIdAndDelete(id)
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('User not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
}