const router = require("express").Router();
const authRoutes = require("./auth");
const petRoutes = require("./pet");

// Auth routes
router.use(authRoutes);

//Api routes
router.use(petRoutes);

module.exports = router;