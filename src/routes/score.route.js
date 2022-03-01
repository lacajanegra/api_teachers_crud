const Router = require("express").Router;
const route = Router();
const ctrlScore = require("../controllers/score.controller")
const { authorization } = require("../middlewares/auth")

//route.get('/', ctrlScore.)
route.post('/assign', authorization, ctrlScore.assignCourse)
route.put('/update/:id', authorization, ctrlScore.updateScore)
route.get('/:course/:student', authorization, ctrlScore.getScoreInfo)

module.exports = route;