const { Schema } = require('mongoose')

const buildSchema = new Schema (
    {
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        frame: {type: Schema.Types.ObjectId, ref: 'Frame'},
        groupset: {type: Schema.Types.ObjectId, ref: 'Group'},
        wheelset: {type: Schema.Types.ObjectId, ref: 'Wheels'},
        tires: {type: Schema.Types.ObjectId, ref: 'Tires'},
        saddle: {type: Schema.Types.ObjectId, ref: 'Saddle'},
        handlebar: {type: Schema.Types.ObjectId, ref: 'Handlebar'},
        stem: {type: Schema.Types.ObjectId, ref: 'Stem'},
        seatpost: {type: Schema.Types.ObjectId, ref: 'Seatpost'},
        total_price: {type: String, required: true},
        isFinal: {type: Boolean, default: false},
    },
    {timestamps: true},
)

module.exports = buildSchema
