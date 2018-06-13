const router = require("express").Router();
import User from "../db/models/User";
import passport from "../passport";

  // this route is just used to get the user basic info
  router.get("/user", (req, res, next) => {
    console.log('===== user!!======');
    console.log(req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  });

  router.post(
    "/login",
    (req, res, next) => {
      console.log(req.body);
      console.log('================');
      next();
    },
    passport.authenticate('local'),
    (req, res) => {
      console.log('logged in', req.user);
      const user = JSON.parse(JSON.stringify(req.user)); // hack
      const cleanUser = Object.assign({}, user);
      if (cleanUser.local) {
        console.log(`Deleting ${cleanUser.local.password}`);
        delete cleanUser.local.password;
      }
      res.json({ user: cleanUser });
    }
  );

  router.post("/logout", (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  });

  router.post("/signup", (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    // ADD VALIDATION
    User.findOne({ 'local.email': email }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the email: ${email}`
        });
      }
      const newUser = new User({
        'firstname': firstname,
        'lastname': lastname,
        'email': email,
        'password': password
      });
      console.log(newUser);
      User.create(newUser).then((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  });

  module.exports = router;