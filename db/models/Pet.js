const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const PetSchema = new Schema({
  // `body` is of type String
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  breed: String,
  age: Number,
  gender: String,
  size: String,
  rescuePet: Boolean,
  favoriteActivities: [String],
  favoriteToys: [String],
  specialTalent: String,
  coverImage: [String],
  profileImage: [String],
  User: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }]
},
  {timestamps: true});

// This creates our model from the above schema, using mongoose's model method
const Pet = mongoose.model("Pet", PetSchema);

// Export the Pet model
module.exports = Pet;