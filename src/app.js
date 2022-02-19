const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
const routesPerson = require('./routes/person.route') 
const connectionBD = require('../src/config/db.connection')

connectionBD();

app.use(morgan("dev"))

app.get('/', (req, res) => {
    console.log({res: 1234})
    res.send('Hello World!')
})

app.use('/person', routesPerson);

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})