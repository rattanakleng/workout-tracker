//Dependecies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            defualt: () => new Date()
        },

        exercise: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Exercise type"
                },

                name: {
                    type:String,
                    trim: true,
                    required: "Exercise name"
                },

                duration: {
                    type: Number,
                    required: "Duration in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;



