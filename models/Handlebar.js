const { Schema } = require('mongoose')

const handlebarSchema = new Schema (
    {
        name: {type: String, required: true},
        brand: {type: String},
        description: {type: String},
        material: {type: Schema.Types.ObjectId, ref: 'Material'},
        image: {type: String},
        level: {type: Schema.Types.ObjectId, ref: 'Levels'},
        price: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = handlebarSchema