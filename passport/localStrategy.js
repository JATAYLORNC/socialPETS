import User from "../db/models/User";
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		email: 'email' // not necessary, DEFAULT
	},
	(email, password, done) => {
		User.findOne({ 'local.email': email }, (err, userMatch) => {
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