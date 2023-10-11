const mongoose = require('mongoose');
// const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    default: null
  },
  job_type: {
    type: String,
    default: null
  },
  height: {
    type: String,
    default: null
  },
  weight: {
    type: String,
    default: null
  },
  password: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    required: true
  },
});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
