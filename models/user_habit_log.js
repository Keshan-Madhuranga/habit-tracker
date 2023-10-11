const mongoose = require('mongoose');
// const uniqueValidator = require("mongoose-unique-validator");

const userHabitLogSchema = mongoose.Schema({
  user_habit_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  completed_value: {
    type: Number,
    required: true
  },
  log_date: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User_Habit_Log', userHabitLogSchema);
