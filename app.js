const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'restaurant';
var express = require('express');
var app = express();


app.get('/', function (req, res) {
MongoClient.connect(url, function(err, client) {
	var result = [];
	const db = client.db(dbName);
	const collection = db.collection('restaurantDetails');
		collection.find({}).toArray(function(err, docs) 
		{
			for(res1 of docs)
			{
				result.push(res1.name);
			}
			res.send(result);
			console.log(result)
		});
	client.close();
});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
