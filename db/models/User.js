var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var bcrypt = require("bcryptjs");

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  // `Pet` is an object that stores a Pet ID
  // The ref property links the ObjectId to the Pet model
  // This allows us to populate the user account with Pet information
  Pet: [{
    type: Schema.Types.ObjectId,
    ref: "Pet"
  }]
});

// Define schema methods
UserSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: function(plainTextPassword) {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
}

// Define hooks for pre-saving
UserSchema.pre('save', function(next) {
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======');
		next();;
	} else {
		this.password = this.hashPassword(this.password);
		next()
	}
	// this.password = this.hashPassword(this.password);
	// next();
})

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;