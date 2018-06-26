import User from "../db/models/User";
import Pet from "../db/models/Pet";
import Post from "../db/models/Post";
import Comment from "../db/models/Comment";

// Defining methods for the apiController
export default {

  addPet: (req, res) => {
    Pet
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateUser: (req, res) => {
    console.log(req.body);
    User
    .findOneAndUpdate({ _id: req.params.id }, {$push: req.body})
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
    Pet
    .findOneAndUpdate({ _id: req.params.id }, {$push: req.body})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  getPetPosts: (req, res) => {
    Pet
    .findOne({ _id: req.params.id })
    .populate('posts')
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  addComment: (req, res) => {
    Comment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addPostComment: (req, res) => {
    console.log(req.params.id, req.body);
    console.log("petController addPostComment hit!")
    Post
    .findOneAndUpdate({ _id: req.params.id }, {$push: req.body})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  getPostComments: (req, res) => {
    Post.findOne({ _id: req.params.id })
    .populate('comment')
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  
  getUser: (req, res) => {
    User.findOne({_id: req.params.id})
    .populate('Pet')
    .then(user => { 
      res.json(user)
    })
    .catch(err => res.status(422).json(err));
  },

  finduser: (req, res) => {
    console.log(req.body.lastname);
    User.find({lastname: req.body.lastname})
    .populate({path: 'Pet'})
    .then(dbModel => { 
      res.json(dbModel)
    })
    .catch(err => res.status(422).json(err));
  },

  getPets: (req, res) => {
    Pet
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateLikes: (req, res) => {
    Post
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  follow: (req, res) => {
    User
    .findOneAndUpdate({ _id: req.params.id }, {$push: req.body})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  getPosts: (req, res) => {
    console.log("Hello!");
    console.log(req.body);
    const Pets = req.body.Pets
    Post
    .find({
      'pet_id': { $in: Pets }})
    .then(dbModel => {
      console.log(dbModel);
      res.json(dbModel);
    })
    .catch(err => res.status(422).json(err));
  },

  // getAllPosts: (req, res) => {
  //   Post
  //     .find(req.query)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
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