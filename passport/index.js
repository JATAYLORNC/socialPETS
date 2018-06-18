import passport from "passport";
import LocalStrategy from "./localStrategy";
import User from "../db/models/User";

passport.serializeUser((user, done) => {
	console.log(`=== serialize ... called ===`);
	console.log(`---------`);
	done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
	console.log(`DEserialize ... called`)
	User.findOne(
		{ _id: id },
		'email',
		(err, user) => {
			console.log(`======= DESERIALIZE USER CALLED ======`);
			done(null, user);
		}
	);
});

// passport.deserializeUser((id, done) => {
// 	User.findById(id).exec((err, user) => {
// 		console.log(`======= DESERIALIZE USER CALLED ======`);
// 		done(err, user);
// 	});
// });

// ==== Register Strategies ====
passport.use(LocalStrategy);

export default passport;