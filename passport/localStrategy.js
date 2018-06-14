var User = require("../db/models/User");
var LocalStrategy = require('passport-local').Strategy;

var strategy = new LocalStrategy(
{usernameField: "email"},
	function(email, password, done) {
		User.findOne({ 'email': email }, function(err, userMatch) {
			if (err) {
				return done(err)
			}
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect email' })
			}
			if (!userMatch.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, userMatch)
		})
	}
)

module.exports = strategy;