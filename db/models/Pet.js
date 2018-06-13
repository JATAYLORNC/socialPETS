const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const PetSchema = new Schema({
  // `body` is of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method
const Pet = mongoose.model("Pet",PetSchema);

// Export the Note model
export default Pet;