var User = require("../db/models/User");
var passport = require("../passport");

// Defining methods for the authController
module.exports = {

  getUser: function(req, res) {
    console.log('===== user!!======');
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },

  signup: function(req, res) {
    const { firstname, lastname, email, password } = req.body;
    User
      .findOne({ 'email': email }, function(err, userMatch) {
      if (userMatch) {
        return res.json({
          error: "Sorry, already a user with the email: " + email
        });
      }
      var newUser = new User({
        'firstname': firstname,
        'lastname': lastname,
        'email': email,
        'password': password
      });
      console.log(newUser);
      newUser.save(function(savedUser) {
        console.log(savedUser);
        return res.json(savedUser);
      });
    });
  },

  login: function(req, res) {
    console.log('logged in', req.user);
    var user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser) {
      console.log("Deleting " + cleanUser.password);
      delete cleanUser.password;
    }
    res.json({ user: cleanUser });
  },

  logout: function(req, res) {

    console.log('===== logout!!======');

    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  }
};