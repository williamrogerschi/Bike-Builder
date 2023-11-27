const { Schema } = require('mongoose')

const groupSchema = new Schema (
    {
        name: {type: String, required: true},
        brand: {type: String},
        description: {type: String},
        image: {type: String},
        level: {type: Schema.Types.ObjectId, ref: 'Levels'},
        material: {type: Schema.Types.ObjectId, ref: 'Material'},
        price: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = groupSchema