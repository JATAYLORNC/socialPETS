var router = require("express").Router();
var petController = require("../../controllers/petController");

  router
    .route("/addpet")
    .post(petController.addPet);

  module.exports = router;