const mongoose = require('mongoose');
// const uniqueValidator = require("mongoose-unique-validator");

const predefinedHabitSchema = mongoose.Schema({
  description: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true
  },
  target_value: {
    type: Number,
    required: true
  },
});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Predefined_Habit', predefinedHabitSchema);
