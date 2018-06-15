var router = require("express").Router();
var authRoutes = require("./auth");
var petRoutes = require("./pet");

// Auth routes
router.use(authRoutes);

//Api routes
router.use(petRoutes);

module.exports = router;