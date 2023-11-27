const { Schema } = require('mongoose')

const buildSchema = new Schema (
    {
        frame: {type: Schema.Types.ObjectId, ref: 'Frame'},
        groupset: {type: Schema.Types.ObjectId, ref: 'Group'},
        wheelset: {type: Schema.Types.ObjectId, ref: 'Wheels'},
        tires: {type: Schema.Types.ObjectId, ref: 'Tires'},
        saddle: {type: Schema.Types.ObjectId, ref: 'Saddle'},
        pedals: {type: Schema.Types.ObjectId, ref: 'Pedals'},
        handlebar: {type: Schema.Types.ObjectId, ref: 'Handlebar'},
        stem: {type: Schema.Types.ObjectId, ref: 'Stem'},
        seatpost: {type: Schema.Types.ObjectId, ref: 'Seatpost'},
        total_price: {type: String, required: true},
    },
    {timestamps: true},
)

module.exports = buildSchema