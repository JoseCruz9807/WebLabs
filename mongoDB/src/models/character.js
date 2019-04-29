
const mongoose = require("mongoose")

const characterSchema = new mongoose.Schema({
    name: {
		type: String,
	},
	age: {
		type: Number,
	},
	born: {
		type: String,
	},
	timeline: {
		type: String,
	},
	alliegance: {
		type: [String],
	}, 
	playedBy: {
		type: String,
	},
	titles: {
		type: [String],
	},
	father: {
		type: String,
	},
	mother: {
		type: String,
	}, 
	spouse: {
		type: String,
    }
})
/*
userSchema.pre('save', function(next){
    const character = this
    next()
})
*/
const Character = mongoose.model('Character', characterSchema)

module.exports=Character
