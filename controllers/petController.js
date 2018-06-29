const User = require("../db/models/User");
const Pet = require("../db/models/Pet");
const Post = require("../db/models/Post");
const Comment = require("../db/models/Comment");

// Defining methods for the apiController
module.exports = {
  addPet: (req, res) => {
    Pet.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateUser: (req, res) => {
    // console.log(req.body);
    User.findOneAndUpdate({ _id: req.params.id }, { $push: req.body }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addPost: (req, res) => {
    Post.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addPetPost: (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, { $push: req.body }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addCoverImage: (req, res) => {
    console.log(req.body);
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => {
        console.log(req.body);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  getPetPosts: (req, res) => {
    Pet.findOne({ _id: req.params.id })
      .populate("posts")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addComment: (req, res) => {
    Comment.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addPostComment: (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.id }, { $push: req.body }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getPostComments: (req, res) => {
    Post.findOne({ _id: req.params.id })
      .populate("comment")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getUser: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate("Pet")
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(422).json(err));
  },

  // getUser: (req, res) => {
  //   User.findOne({ _id: req.params.id })
  //     .populate("Pet")
  //     .populate({
  //       path: 'friendsId',
  //       populate: {
  //         path: 'Pet',
  //         model: 'Pet',
  //       }
  //     })
  //     .exec((err, user) => {
  //       if(user.friendsId) {
  //         User.populate(user.friendsId, {
  //           path: "User",
  //           model: "User",
  //         })
  //         .then(data => {
  //           console.log(Array.isArray(data))
  //           // return done(null, data)
  //           user.friendsId = data;
  //         console.log(JSON.stringify(user.friendsId,null,2));
  //         if (err) {
  //           return done(err)
  //         }
  //         return done(null, user)
  //       });
  //       } else {
  //         if (err) {
  //           return done(err)
  //         }
  //         return done(null, user)
  //       }

  //     })
  // }

  finduser: (req, res) => {
    User.find({ lastname: req.body.lastname })
      .populate({ path: "Pet" })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  getPets: (req, res) => {
    Pet.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateLikes: (req, res) => {
    console.log(req.body);
    Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  follow: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, { $push: req.body }, { new: true })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  getPosts: (req, res) => {
    const Pets = req.body.Pets;
    Post.find({ pet_id: { $in: Pets } })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }

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
