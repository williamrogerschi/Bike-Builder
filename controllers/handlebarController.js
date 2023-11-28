const { Handlebar } = require('../models/Index')

const getAllHandlebars = async (req, res) => {
    try {
        const handlebars = await Handlebar.find()
        res.json(handlebars)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneHandlebar = async (req, res) => {
    try {
        id = req.params.id
        const handlebar = await Handlebar.findById(id)
        if(handlebar) {
            return res.json(handlebar)
        }
        return res.status(404).send('Handlebar with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllHandlebars,
    getOneHandlebar,
}