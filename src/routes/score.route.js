const Router = require("express").Router;
const route = Router();
const ctrlScore = require("../controllers/score.controller")

//route.get('/', ctrlScore.)
route.post('/assign', ctrlScore.assignCourse)
route.put('/update/:id', ctrlScore.updateScore)

module.exports = route;