const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = process.env.PORT || 5000;
require('dotenv').config();

let db,
	dbConnectionStr = process.env.DB_STRING,
	dbName = 'music-studio';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
	client => {
		console.log(`Connected to ${dbName} Database`);
		db = client.db(dbName);
	}
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', async (req, res) => {
	const data = await db.collection('music-studio').find().toArray();
	res.json(data);
});

app.post('/newStudent', (req, res) => {
	db.collection('music-studio')
		.insertOne({ student: req.body })
		.then(result => {
			console.log(`New Student: ${req.body.name} Added`);
			res.json(`New Student: ${req.body.name} Added`);
		})
		.catch(error => console.error(error));
});

// app.get('/', async (req, res) => {

// const todoItems = await db.collection('music-studio').find().toArray();
// const itemsLeft = await db
// 	.collection('music-studio')
// 	.countDocuments({ completed: false });
// res.render('index.ejs', { items: todoItems, left: itemsLeft });
// db.collection('music-studio').find().toArray()
// .then(data => {
//     db.collection('music-studio').countDocuments({completed: false})
//     .then(itemsLeft => {
//         res.render('index.ejs', { items: data, left: itemsLeft })
//     })
// })
// .catch(error => console.error(error))
// });

// app.put('/markComplete', (req, res) => {
// 	db.collection('music-studio')
// 		.updateOne(
// 			{ thing: req.body.itemFromJS },
// 			{
// 				$set: {
// 					completed: true,
// 				},
// 			},
// 			{
// 				sort: { _id: -1 },
// 				upsert: false,
// 			}
// 		)
// 		.then(result => {
// 			console.log('Marked Complete');
// 			res.json('Marked Complete');
// 		})
// 		.catch(error => console.error(error));
// });

// app.put('/markUnComplete', (req, res) => {
// 	db.collection('music-studio')
// 		.updateOne(
// 			{ thing: req.body.itemFromJS },
// 			{
// 				$set: {
// 					completed: false,
// 				},
// 			},
// 			{
// 				sort: { _id: -1 },
// 				upsert: false,
// 			}
// 		)
// 		.then(result => {
// 			console.log('Marked Complete');
// 			res.json('Marked Complete');
// 		})
// 		.catch(error => console.error(error));
// });

// app.delete('/deleteItem', (req, res) => {
// 	db.collection('music-studio')
// 		.deleteOne({ thing: req.body.itemFromJS })
// 		.then(result => {
// 			console.log('Todo Deleted');
// 			res.json('Todo Deleted');
// 		})
// 		.catch(error => console.error(error));
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
