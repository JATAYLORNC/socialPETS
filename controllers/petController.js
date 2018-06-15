var User = require("../db/models/User");
var Pet = require("../db/models/Pet");
var Post = require("../db/models/Post");
var Comment = require("../db/models/Comment");

// Defining methods for the apiController
module.exports = {
  // findAll: function(req, res) {
  //   db.Book
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  addPet: function(req, res) {
      Pet
        .create(req.body)
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