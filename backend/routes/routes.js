var express = require("express");
var ObjectId = require("mongodb").ObjectId;
var app = express();

var currentUser = undefined;

app.use(function (req, res, next) {

	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();

})

  app.get("/pullCurrentUser", (req, res) => {
	res.send(currentUser);
  })

app.get("/profiles", async (request, response) => {

	try {
		const profiles = await profileModel.find();
		response.send(profiles);
	} catch (error) {
		response.status(500).send(error);
	}

});

module.exports = app;
