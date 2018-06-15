import mongoose from "mongoose";

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
  Posts: [{
    type: Schema.Types.ObjectId,
    ref: "Posts"
  }],
  friendsId: [Number],
},
  {timestamps: true});

// This creates our model from the above schema, using mongoose's model method
const Pet = mongoose.model("Pet", PetSchema);

// Export the Pet model
export default Pet;