const { Handlebar } = require('../models/Index')

const getAllHandlebars = async (req, res) => {
    try {
        const handlebars = await Handlebar.find()
        res.json(handlebars)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllHandlebars,
}