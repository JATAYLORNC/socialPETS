const router = require("express").Router();
import petController from "../../controllers/petController";

  router
    .route("/addpet")
    .post(petController.addPet);

  router
    .route("/user/:id")
    .post(petController.addUserPet)

  export default router;