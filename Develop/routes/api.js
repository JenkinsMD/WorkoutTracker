const router = require("express").Router();
const { db } = require("../models/workout.js");
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Was /api/workout
router.get("/api/workouts", (req, res) => {

    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {$sum: "$exercises.duration"}
        }
      }
    ]
  )
  .then(dbWorkout => {
    res.json(dbWorkout);

  })
  .catch(err => {
    res.status(400).json(err);
  });
});

//Exercise GET Route - Placeholder
// router.get("/exercise", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

//Stats GET Route - Place Holder
// router.get("/stats", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

//Add get workouts/range
router.get("/api/workouts/range", (req, res) => {
  // console.log(" range req ---" + JSON.stringify(req))
  
  //add field toal duration
  Workout.aggregate([
      {
        $addFields: {
          totalDuration: {$sum: "$exercises.duration"}
        }
      }
    ]
  )
  .then(dbWorkout => {
    res.json(dbWorkout);

  })
  .catch(err => {
    res.status(400).json(err);
  });


  

});

//Add put route for new exercise
//Find by ID
//Push to the array
router.put("/api/workouts/:id", (req, res) => {
  console.log("req.params---"+ JSON.stringify(req.params.id))
  console.log("req.body---"+ JSON.stringify(req.body))
  Workout.updateOne({"_id": req.params.id}, {$push:{exercises: req.body}})
    .then(dbWorkout => {
      res.json(dbWorkout);
  
    })
    .catch(err => {
      res.status(400).json(err);
    });

  
});
module.exports = router;
