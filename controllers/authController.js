var db = require("../db/models");

// Defining methods for the booksController
module.exports = {
  // findAll: function(req, res) {
  //   db.Book
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  getUser: function(req, res) {
    console.log('===== user!!======');
    console.log(req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },

  signup: function(req, res) {
    const { firstname, lastname, email, password } = req.body;
    db.User
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

    console.log(req);
    
    passport.authenticate('local'),
    function(req, res) {
      console.log('logged in', req.user);
      var user = JSON.parse(JSON.stringify(req.user)); // hack
      const cleanUser = Object.assign({}, user);
      if (cleanUser) {
        console.log("Deleting " + cleanUser.password);
        delete cleanUser.password;
      }
      res.json({ user: cleanUser });
    }
  },

  logout: function(req, res) {
        if (req.user) {
          req.session.destroy();
          res.clearCookie('connect.sid'); // clean up!
          return res.json({ msg: 'logging you out' });
        } else {
          return res.json({ msg: 'no user to log out!' });
        }
  }

  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};