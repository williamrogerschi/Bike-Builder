const { Schema } = require('mongoose')

const saddleSchema = new Schema (
    {
        name: {type: String, required: true},
        brand: {type: String},
        description: {type: String},
        color: {type: String},
        image: {type: String},
        level: {type: Schema.Types.ObjectId, ref: 'Levels'},
        price: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = saddleSchema