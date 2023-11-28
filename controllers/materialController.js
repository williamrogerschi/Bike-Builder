const { Material } = require('../models/Index')

const getAllMaterials = async (req, res) => {
    try {
        const materials = await Material.find()
        res.json(materials)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getOneMaterial = async (req, res) => {
    try {
        id = req.params.id
        const material = await Material.findById(id)
        if(material) {
            return res.json(material)
        }
        return res.status(404).send('Material with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMaterials,
    getOneMaterial,
}