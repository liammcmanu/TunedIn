var express = require("express");
var ObjectId = require("mongodb").ObjectId;
var { user, posts, prompts, bops, stops } = require("../profile-schema.js");
var app = express();

var currentUser = undefined;

app.use(function (req, res, next) {

	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();

})

app.post("/current-user", (req) => {
	currentUser = req.body.id
})

app.get("/current-user", (req, res) => {
	res.send({id: currentUser});
})

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
			password: req.body.password,
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
			if (profile.password === req.query.password) {
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

app.get("/getPostStops", async (req, res) => {
	try {
		const foundStops = await stops.find({ post: req.query.id });
		res.send({ count: foundStops.length });
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

app.get("/getPostBops", async (req, res) => {
	try {
		const foundBops = await bops.find({ post: req.query.id });
		res.send({ count: foundBops.length });
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});


app.get('/userHasBopped', async (req, res) => {
	try {
		const foundBop = await bops.findOne({ post: req.query.post, user: currentUser });
		if (foundBop) {
			res.send({ bopped: true });
		} else {
			res.send({ bopped: false });
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get('/userHasStopped', async (req, res) => {
	console.log(currentUser);
	console.log(req.query.post);
	try {
		const foundStop = await stops.findOne({ post: req.query.post, user: currentUser });
		if (foundStop) {
			res.send({ stopped: true });
		} else {
			res.send({ stopped: false });
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = app;
