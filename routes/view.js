const router = require('express').Router();
const path = require('path');

//route to add exercises
router.get('/exercise', (req, res) =>{
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
});

//route for dashboard
router.get('/stats', (req, res) =>{
    res.sendFile(path.join(__dirname,"../public/stats.html"))
});

//base route
router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,"../public/index.html"))
});

module.exports = router;

