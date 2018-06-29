const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
// const MongoStore = require('connect-mongo')(session);
const dbConnection = require("./db");
const passport = require("./passport");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const db = require("./db/models");

// Initialize Expressasdsad
const app = express();
const PORT = process.env.PORT || 3001;

// ======Middleware======

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import all models
// import models from "./models";

app.use(
  session({
    secret: process.env.APP_SECRET || "Shh, Colin is a super-hero!",
    // store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false,
  }),
);

// ======Passport======
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  console.log(`YOU ARE IN THE PRODUCTION ENV`);
  app.use(express.static("./client/build"));
}

//Express app Routing
app.use(routes);

// Start the server
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
});
