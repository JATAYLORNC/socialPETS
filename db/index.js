/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
var mongoose = require("mongoose");
mongoose.Promise = global.Promise
var MONGO_LOCAL_URL = 'mongodb://localhost/socialPETS'

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/socialPETS";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

 var MONGO_URL = process.env.MONGODB_URI || MONGO_LOCAL_URL;

// should mongoose.connection be put in the call back of mongoose.connect???
var db = mongoose.connection
db.on('error', function(err) {
	console.log("There was an error connecting to the database: " + err)
})
db.once('open', function() {
	console.log(
		"You have successfully connected to your mongo database: " + MONGO_URL
	);
});

module.exports = db;