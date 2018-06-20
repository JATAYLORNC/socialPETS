import User from "../db/models/User";
import Pet from "../db/models/Pet";
import Post from "../db/models/Post";
import Comment from "../db/models/Comment";

// Defining methods for the apiController
export default {
  // findAll: function(req, res) {
  //   db.Book
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  addPet: (req, res) => {
    Pet
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addUserPet: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, {$push: req.body})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  addPost: (req, res) => {
    Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addPetPost: (req, res) => {
    console.log(req.params.id, req.body);
    Pet.findOneAndUpdate({ _id: req.params.id }, {$push: req.body})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },










    // addPet: function(req, res) {
    //   let user_id = req.body._id;
    //   Pet
    //     .create(req.body)
    //     .then(dbModel => {
    //       console.log(dbModel);
    //       User.findOneAndUpdate({ _id: user_id}, {Pet: dbModel._id})
    //       })
    //     .catch(err => res.status(422).json(err));
    // },

  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};