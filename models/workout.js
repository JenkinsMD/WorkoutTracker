const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Creates Schema to create the possible exercise types
const workoutSchema = new Schema({
  exercises:[ 
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for exercise"
      },
      duration: {
        type: Number,
        required: "Enter a duration"
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number, 
      },
      distance: {
        type: Number,
      }

    }
  ],
  day: {
    type: Date,
    default: Date.now
  }
  


});

const Workout = mongoose.model("Workout", workoutSchema);

//Why isn't this green
module.exports = Workout;
