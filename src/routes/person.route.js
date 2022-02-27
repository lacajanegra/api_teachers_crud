const Router = require("express").Router;
const route = Router();
const ctrlPerson = require("../controllers/person.controller")
const { authorization } = require("../middlewares/auth")

route.post('/add', authorization, ctrlPerson.addPerson)
route.get('/students', authorization, ctrlPerson.getStudents)

module.exports = route;