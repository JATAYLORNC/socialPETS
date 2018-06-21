import User from "../db/models/User";
import passport from "../passport";

// Defining methods for the authController
export default {

  getUser: (req, res) => {
    console.log(`===== user!!======`);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },

  signup: (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    console.log("authController.js line 18 fired");
    User
      .findOne({ 'email': email }, (err, userMatch) => {
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
      newUser.save((savedUser) => {
        console.log(savedUser);
        return res.json(savedUser);
      });
    });
  },

  login: (req, res) => {
    console.log(`logged in`, req.user);
    const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    if (cleanUser) {
      console.log(`Deleting ${cleanUser.password}`);
      delete cleanUser.password;
    }
    res.json({ user: cleanUser });
  },

  logout: (req, res) => {

    console.log(`===== logout!!======`);

    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  }
};