import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configure middleware

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Require all models
import db from "./models";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/socialPETS";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});