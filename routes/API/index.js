var router = require("express").Router();
var authRoutes = require("./auth");

// Book routes
router.use("/auth", authRoutes);

module.exports = router;