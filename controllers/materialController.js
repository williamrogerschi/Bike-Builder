const { Material } = require('../models/Index')

const getAllMaterials = async (req, res) => {
    try {
        const materials = await Material.find()
        res.json(materials)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMaterials,
}