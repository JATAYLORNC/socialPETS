import passport from "passport";
import LocalStrategy from "./localStrategy";
import User from "../db/models/User";

passport.serializeUser((user, done) => {
	console.log(`=== serialize ... called ===`);
	console.log(user); // the whole raw user object!
	console.log(`---------`);
	done(null, { _id: user._id });
});

// passport.deserializeUser((id, done) => {
// 	console.log(`DEserialize ... called`)
// 	User.findOne(
// 		{ _id: id },
// 		'email',
// 		(err, user) => {
// 			console.log(`======= DESERIALIZE USER CALLED ======`);
// 			console.log(user);
// 			console.log(`--------------`);
// 			done(null, user);
// 		}
// 	);
// });

passport.deserializeUser((id, done) => {
	User.findById(id).populate('Pet').exec((err, user) => {
		console.log(`======= DESERIALIZE USER CALLED ======`);
		console.log(user.Pet);
		done(err, user);
	});
});

// ==== Register Strategies ====
passport.use(LocalStrategy);

export default passport;