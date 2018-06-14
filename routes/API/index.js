var router = require("express").Router();
var authRoutes = require("./auth");

// Book routes
router.use(authRoutes);

module.exports = router;