const router = require("express").Router();
import petController from "../../controllers/petController";

  router
    .route("/addpet")
    .post(petController.addPet);

  router
    .route("/user/:id")
    .post(petController.addUserPet);

  router
    .route("/post/")
    .post(petController.addPost);

  router
    .route("/pet/:id")
    .post(petController.addPetPost);

  export default router;