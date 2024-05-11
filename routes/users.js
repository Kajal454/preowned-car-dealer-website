// Import the required modules
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

// Connect to the MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/mahavir", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB:", err));

// Define the Schema for the user model
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }, 
  contact: {
    type: Number,
    required: true
  },
  role:{
    type:String,
    required:true
  }
});

// Add the passport-local-mongoose plugin to the user schema
userSchema.plugin(plm);

// Export the user model
module.exports = mongoose.model("user",userSchema);