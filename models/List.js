const { Schema } = require('mongoose')

const listSchema = new Schema(
	{
		frame: [{ type: Schema.Types.ObjectId, ref: 'Frame' }],
		groupset: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
		wheelset: [{ type: Schema.Types.ObjectId, ref: 'Wheels' }],
		tires: [{ type: Schema.Types.ObjectId, ref: 'Tires' }],
		saddle: [{ type: Schema.Types.ObjectId, ref: 'Saddle' }],
		handlebar: [{ type: Schema.Types.ObjectId, ref: 'Handlebar' }],
		stem: [{ type: Schema.Types.ObjectId, ref: 'Stem' }],
		seatpost: [{ type: Schema.Types.ObjectId, ref: 'Seatpost' }],
	},
	{ timestamps: true }
)

listSchema.pre(/^find/, function (next) {
	this.populate('frame')
		.populate('groupset')
		.populate('wheelset')
		.populate('tires')
		.populate('saddle')
		.populate('handlebar')
		.populate('stem')
		.populate('seatpost')
	next()
})

module.exports = listSchema
