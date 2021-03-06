const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const PostSchema = new Schema({
  // `body` is of type String
    posts: String,
    petName: String,
    pet_id: String,
    imageURL: [String],
    videoURL: [String],
    likes: { type: Number, default: 0 },
    liked: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    
    //images from firebase

 },
  {timestamps: true});

// This creates our model from the above schema, using mongoose's model method
const Post = mongoose.model("Post", PostSchema);

// Export the Pet model
module.exports = Post;