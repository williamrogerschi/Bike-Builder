const { Schema } = require('mongoose')

const buildSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		frame: { type: Schema.Types.ObjectId, ref: 'Frame' },
		groupset: { type: Schema.Types.ObjectId, ref: 'Group' },
		wheelset: { type: Schema.Types.ObjectId, ref: 'Wheels' },
		tires: { type: Schema.Types.ObjectId, ref: 'Tires' },
		saddle: { type: Schema.Types.ObjectId, ref: 'Saddle' },
		handlebar: { type: Schema.Types.ObjectId, ref: 'Handlebar' },
		stem: { type: Schema.Types.ObjectId, ref: 'Stem' },
		seatpost: { type: Schema.Types.ObjectId, ref: 'Seatpost' },
		total_price: { type: String, required: true },
		isCurrent: { type: Boolean, default: false },
		name: {type: String, required: true},
	},
	{ timestamps: true }
)

// Populate referenced fields when querying builds
buildSchema.pre(/^find/, function (next) {
	this.populate('frame')
		.populate('groupset')
		.populate('wheelset')
		.populate('tires')
		.populate('saddle')
		.populate('handlebar')
		.populate('stem')
		.populate('seatpost')
		.populate('user')
	next()
})

module.exports = buildSchema
