const Router = require("express").Router;
const route = Router();
const ctrlCourse = require("../controllers/course.controller")
const { authorization } = require("../middlewares/auth")

route.post('/add', authorization, ctrlCourse.addCourse)
route.get('/student/:id', authorization, ctrlCourse.getCourseByStudent)
route.get('/:id/students', authorization, ctrlCourse.getStudentsByCourse)

module.exports = route;