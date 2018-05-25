var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors");

app.use(bodyParser.urlencoded({ "extended": "true" }));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: "application/vdn.api+json" }));
	app.use(cors());

const https = require('https');
var Request = require("request");

var name;

var movies = [];

app.get("/", function(request, respond){

	respond.send(movies);

});

app.get("/Movies", function(request, respond){

	var obj = name.name;

	respond.send(name.name)

	console.log(obj);

	

});

app.post("/Movies", function(request, respond){
	
	name = request.body;

	var obj = name.name;

	name = obj;

	console.log(name);

	console.log(obj);

	if(movies.length > 0){

		respond.json({
			data: JSON.parse(movies.obj)
		})

	} else {

		Request.get( "https://www.omdbapi.com/?apikey=d84188da&s=" + obj , (error, response, body) => {

			console.log(body);

			var a = name;

			movies = { a : body };

			//console.log(movies);

			respond.json({
				data: JSON.parse(body)
			})

		});

	}

	//console.log(movies);

});

app.listen(8081, function(){
    console.log("Server Started");
});
