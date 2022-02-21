const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
const connectionBD = require('../src/config/db.connection')
const routesPerson = require('./routes/person.route') 
const routesCourse = require('./routes/course.route') 
const routesScore = require('./routes/score.route') 
const routeLogin = require('./routes/login.route')

connectionBD();

app.use(express.json())
app.use(morgan("dev"))

app.get('/', (req, res) => {
    console.log({res: 1234})
    res.send('Hello World!')
})

app.use('/person', routesPerson);
app.use('/courses', routesCourse);
app.use('/scores', routesScore);
app.use('/login', routeLogin);

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})