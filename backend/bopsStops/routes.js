var express = require("express");
var { bops, stops } = require("../profile-schema.js");
var { ObjectId } = require("mongodb");
var bopStopRouter = express.Router();

bopStopRouter.get("/getPostStops", async (req, res) => {
	try {
		const foundStops = await stops.find({ post: req.query.id });
		res.send({ count: foundStops.length });
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

bopStopRouter.get("/getPostBops", async (req, res) => {
	try {
		const foundBops = await bops.find({ post: req.query.id });
		res.send({ count: foundBops.length });
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});


bopStopRouter.get('/userHasBopped', async (req, res) => {
	try {
		const foundBop = await bops.findOne({ post: req.query.id, user: req.query.user });
		if (foundBop) {
			res.send({ bopped: true });
		} else {
			res.send({ bopped: false });
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

bopStopRouter.get('/userHasStopped', async (req, res) => {
	try {
		const foundStop = await stops.findOne({ post: req.query.id, user: req.query.user });
		if (foundStop) {
			res.send({ stopped: true });
		} else {
			res.send({ stopped: false });
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

bopStopRouter.post('/bop', async (req, res) => {
    try {
        const newBop = new bops({
            _id: new ObjectId(),
            post: req.body.post,
            user: req.body.user
        });
        await newBop.save();
        res.send(newBop);
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).send(error);
    }
});

bopStopRouter.post('/stop', async (req, res) => {
    try {
        const newStop = new stops({
            _id: new ObjectId(),
            post: req.body.post,
            user: req.body.user
        });
        await newStop.save();
        res.send(newStop);
    } catch (error) {
        console.error(error); // Log the error
        res.status(500).send(error);
    }
});

bopStopRouter.post('/deleteBop', async (req, res) => {
	try {
		const deletedBop = await bops.findOneAndDelete({ post: req.body.post, user: req.body.user });
		res.send(deletedBop);
	} catch (error) {
		res.status(500).send(error);
	}
});

bopStopRouter.post('/deleteStop', async (req, res) => {
	try {
		const deletedStop = await stops.findOneAndDelete({ post: req.body.post, user: req.body.user });
		res.send(deletedStop);
	} catch (error) {
		res.status
	}
});

module.exports = bopStopRouter;