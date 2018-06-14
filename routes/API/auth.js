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

  router.post(
    '/login',
    function(req, res, next) {
      console.log(req.body)
      console.log('================')
      next()
    },
    passport.authenticate('local'),
    (req, res) => {
      console.log('POST to /login')
      const user = JSON.parse(JSON.stringify(req.user)) // hack
      const cleanUser = Object.assign({}, user)
      if (cleanUser.local) {
        console.log(`Deleting ${cleanUser.local.password}`)
        delete cleanUser.local.password
      }
      res.json({ user: cleanUser })
    }
  )

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

  // router
  //   .route("/login")
  //   .post(authController.login);

  router
    .route("/logout")
    .post(authController.logout);

  router
    .route("/signup")
    .post(authController.signup);

  module.exports = router;