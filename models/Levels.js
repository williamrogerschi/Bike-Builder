const { Schema } = require('mongoose')

const levelSchema = new Schema (
    {
        name: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = levelSchema