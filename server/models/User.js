const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	students: [
		{
			id: String,
			name: String,
			age: Number,
			repertoire: [String],
			concepts: [String],
		},
	],
});

module.exports = mongoose.model('Users', userSchema);
