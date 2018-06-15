const router = require("express").Router();
import passport from "../../passport";
import authController from "../../controllers/authController";

  router.post(
    '/login',
    (req, res, next) => {
      console.log(req.body);
      console.log(`================`);
      next();
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

  export default router;