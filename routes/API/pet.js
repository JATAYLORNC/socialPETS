const router = require("express").Router();
import petController from "../../controllers/petController";

  router
    .route("/addpet")
    .post(petController.addPet);

  export default router;