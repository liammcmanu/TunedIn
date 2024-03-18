var express = require("express");
var mongoose = require("mongoose");
var Router = require("./routes/routes")

var app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://liammcmanus:Orchard136@cluster0.vm8eia5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    dbName: 'tunedIn'
  }
)

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
})


app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()

})

app.use(Router);
app.listen(3000, function() {
	console.log("Server is running at port 3000");
});

app.use(function(err, req, res, next) {
	// Handle errors here and send an appropriate response
	console.error(err);
	res.status(500).json({ error: 'Internal Server Error' });
});



module.exports = app;