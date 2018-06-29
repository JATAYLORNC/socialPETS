const User = require("../db/models/User");
const Pet = require("../db/models/Pet");
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
{usernameField: "email"},
	(email, password, done) => {
		User.findOne({ 'email': email })
		.populate('Pet')
		.populate({
			path: 'friendsId',
			populate: {
				path: 'Pet',
				model: 'Pet',
			}
		})
		.exec((err, userMatch) => {
			User.populate(userMatch.friendsId, {
				path: "User",
				model: "User",
			})
			.then(data => {
				console.log(Array.isArray(data))
				// return done(null, data)
				userMatch.friendsId = data;
			console.log(JSON.stringify(userMatch.friendsId,null,2));
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
	})
	}
);

module.exports = strategy;