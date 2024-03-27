var express = require("express");
var ObjectId = require("mongodb").ObjectId;
var bycrpt = require('bcryptjs');
var app = express();

var { user, posts, prompts, bops, stops } = require("../profile-schema.js");
var spotify = require('../spotify/routes.js');
var bopsStops = require('../bopsStops/routes.js');

var currentUser = undefined;

app.use(function (req, res, next) {

	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();

})

app.use('/bopsStops', bopsStops)
app.use('/spotify', spotify)

app.get("/profiles", async (req, res) => {
	try {
		const profiles = await user.find();
		res.send(profiles);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get("/profile", async (req, res) => {
	try {
		const profile = await user.findById(new ObjectId(req.query.id));
		res.send(profile);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
});

app.post("/profile", async (req, res) => {
	try {
		const profile = new user({
			_id: new ObjectId(),
			username: req.body.username,
			password: bycrpt.hashSync(req.body.password, 10),
			posts: [],
			matches: []
		});
		await profile.save();
		res.send(profile);
	} catch (error) {
		res.status(500).send(error);
		console.log(error);
	}
});

app.get("/posts", async (req, res) => {
	try {
		const post = await posts.find();
		res.send(post);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get("/authUser", async (req, res) => {
	try {
		const profile = await user.findOne({ username: req.query.id });
		if (profile) {
			if (bycrpt.compareSync(req.query.password, profile.password)) {
				res.send({ authenticated: true, id: profile._id});
			} else {
				res.send({ authenticated: false });
			}
		} else {
			res.send({ authenticated: false });
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get("/checkDuplicate", async (req, res) => {
	try {
		const dup = await user.findOne({ username: req.query.username });
		if (dup) {
			res.send({ duplicate: true });
		} else {
			res.send({ duplicate: false });
		}
	} catch (error) {
		res.status(500).send(error);
	}});

module.exports = app;
