const Router = require("express").Router;
const route = Router();
const ctrlPerson = require("../controllers/person.controller")

route.get('/students', ctrlPerson.getStudents)

module.exports = route;