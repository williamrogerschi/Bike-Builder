const { Schema } = require('mongoose')

const materialSchema = new Schema (
    {
        name: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = materialSchema