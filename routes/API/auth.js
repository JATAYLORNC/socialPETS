var router = require("express").Router();
var passport = require("../../passport");
var authController = require("../../controllers/authController");

  // // this route is just used to get the user basic info
  // router.get("/user", (req, res) => {
  //   console.log('===== user!!======');
  //   console.log(req.user);
  //   if (req.user) {
  //     return res.json({ user: req.user });
  //   } else {
  //     return res.json({ user: null });
  //   }
  // });

  // router.post(
  //   "/login",
    
  //   passport.authenticate('local'),
  //   (req, res) => {
  //     console.log('logged in', req.user);
  //     const user = JSON.parse(JSON.stringify(req.user)); // hack
  //     const cleanUser = Object.assign({}, user);
  //     if (cleanUser) {
  //       console.log(`Deleting ${cleanUser.password}`);
  //       delete cleanUser.password;
  //     }
  //     res.json({ user: cleanUser });
  //   }
  // );

  // router.post("/logout", (req, res) => {
  //   if (req.user) {
  //     req.session.destroy();
  //     res.clearCookie('connect.sid'); // clean up!
  //     return res.json({ msg: 'logging you out' });
  //   } else {
  //     return res.json({ msg: 'no user to log out!' });
  //   }
  // });

  router
    .route("/user")
    .get(authController.getUser);

  router
    .route("/login")
    .post(authController.login);

  router
    .route("/logout")
    .post(authController.logout);

  router
    .route("/signup")
    .post(authController.signup);

  module.exports = router;