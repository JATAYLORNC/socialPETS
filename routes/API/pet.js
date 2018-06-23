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

  router
  .route("/pet/:id")
  .get(petController.getPetPosts);

  router
  .route("/comment/")
  .post(petController.addComment);

  router
  .route("/post/:id")
  .post(petController.addPostComment);

  router
  .route("/post/:id")
  .get(petController.getPostComments);

  router
  .route("/likes/:id")
  .post(petController.updateLikes);

  router
  .route("/pets")
  .get(petController.getPets);

  export default router;