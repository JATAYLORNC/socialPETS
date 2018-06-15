var router = require("express").Router();
var passport = require("../../passport");
var authController = require("../../controllers/authController");

  router.post(
    '/login',
    function(req, res, next) {
      console.log(req.body)
      console.log('================')
      next()
    },
    passport.authenticate('local'),
    authController.login
  );

  router
    .route("/user")
    .get(authController.getUser);

  router
    .route("/logout")
    .post(authController.logout);

  router
    .route("/signup")
    .post(authController.signup);

  module.exports = router;