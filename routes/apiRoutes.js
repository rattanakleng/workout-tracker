const router = require("express").Router();
const db = require("../models/workout.js");

//Api request all workout data
router.get("/api/workouts", (req, res) => {
    db.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

//Api update
router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//Api Create workout
router.post("/api/workouts", (req, res) => {
    db.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//Api request ranges
router.get("/api/workouts/range", (req, res) => {
    db.find({}).limit(10)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

//Delete api route
router.delete("/api/workouts", ({ body }, res) => {
    db.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router;