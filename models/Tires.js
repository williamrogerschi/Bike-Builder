const { Schema } = require('mongoose')

const tireSchema = new Schema (
    {
        name: {type: String, required: true},
        brand: {type: String},
        description: {type: String},
        image: {type: String},
        color: {type: String},
        level: {type: Schema.Types.ObjectId, ref: 'Levels'},
        price: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = tireSchema