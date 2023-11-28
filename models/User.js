const { Schema } = require('mongoose')

const userSchema = new Schema (
    {
        user_name: {type: String, required: true},
        current_build: {type: Schema.Types.ObjectId, ref: 'Build'},
        saved_builds: [{type: Schema.Types.ObjectId, ref: 'Build'}]
    },
    { timestamps: true},
)

module.exports = userSchema