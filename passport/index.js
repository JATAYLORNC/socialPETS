var passport = require("passport");
var LocalStrategy = require("./localStrategy");
var User = require("../db/models/User");

passport.serializeUser(function(user, done) {
	console.log('=== serialize ... called ===');
	console.log(user); // the whole raw user object!
	console.log('---------');
	done(null, { _id: user._id });
});

passport.deserializeUser(function(id, done) {
	console.log('DEserialize ... called')
	User.findOne(
		{ _id: id },
		'email',
		function(err, user) {
			console.log('======= DESERILAIZE USER CALLED ======');
			console.log(user);
			console.log('--------------');
			done(null, user);
		}
	);
});

// ==== Register Strategies ====
passport.use(LocalStrategy);

module.exports = passport;