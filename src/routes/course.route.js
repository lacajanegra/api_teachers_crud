const Router = require("express").Router;
const route = Router();
const ctrlCourse = require("../controllers/course.controller")

route.post('/add', ctrlCourse.addCourse)
route.get('/student/:id', ctrlCourse.getCourseByStudent)
route.get('/:id/students', ctrlCourse.getStudentsByCourse)

module.exports = route;