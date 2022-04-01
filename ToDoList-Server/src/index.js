#!/usr/bin/node

let http = require("http");
let mongo_client = require("mongodb").MongoClient;


let url = "mongodb://localhost";

let db;

let fs = require("fs");

console.log("Starting Server...");

mongo_client.connect(url, function(err,conn )
{
	if (err) {
	console.log("ERROR");
	return;}

	db = conn.db("ToDoList");
	console.log("Inside Server");
}

);


http.createServer(function(req,res){

	res.writeHead(200, {	
	      'Content-Type': 'application/json',
		  'Access-Control-Allow-Origin': '*',
		  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
					    });

		let task_obj = db.collection("tasks").find();

		let task_json;

		task_obj.toArray(function(err,data){

			task_json = JSON.stringify(data);
		
			res.end(task_json);
			return;
	});


return;

}).listen(3030);
