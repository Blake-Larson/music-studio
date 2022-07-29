//===============
// Dependencies
//===============

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

//==================
// Connecting to DB
//==================

let dbConnectionStr = process.env.DB_STRING,
	dbName = 'music-studio';

mongoose.connect(
	dbConnectionStr,
	{ useUnifiedTopology: true },
	() => {
		console.log(`Connected to ${dbName} Database`);
	},
	e => console.error(e)
);

//===============
// Middleware
//===============

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//===============
// Functionality
//===============

//Get the current user. I have currently manually set the id.
app.get('/api', async (req, res) => {
	const data = await User.findById('62e460513dbb23d08c855358');
	res.json(data);
});

//Create a new user
app.post('/newUser', (req, res) => {
	(async () => {
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});
		await user.save();
		console.log(`New User: ${req.body.name} Added`);
		res.json(`New User: ${req.body.name} Added`);
	})();
});

//Create a new student object in an array of students within the current user
app.put('/newStudent', (req, res) => {
	(async () => {
		const student = {
			type: 'student',
			teacher: req.body.teacher,
			name: req.body.name,
			age: req.body.age,
		};
		const teacher = await User.findById(req.body.teacherId);
		teacher.students.push(student);
		await teacher.save();
		console.log(teacher);

		console.log(`New Student: ${req.body.name} Added`);
		res.json(`New Student: ${req.body.name} Added`);
	})();
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
