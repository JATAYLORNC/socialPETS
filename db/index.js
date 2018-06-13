/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
import mongoose from "mongoose";
mongoose.Promise = global.Promise
const MONGO_LOCAL_URL = 'mongodb://localhost/socialPETS'

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/socialPETS";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

 let MONGO_URL = process.env.MONGODB_URI || MONGO_LOCAL_URL;

// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${MONGO_URL}`
	)
})

export default db;