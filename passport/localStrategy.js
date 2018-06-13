import User from "../db/models/User";
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
{usernameField: "email"},
	(email, password, done) => {
		console.log(email, password);
		User.findOne({ 'email': email }, (err, userMatch) => {
			console.log(userMatch);
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

export default strategy;