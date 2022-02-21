const bcrypt = require('bcrypt')
const Person = require('../models/Person')
exports.login = async(req, res) => {
    try {
        const { user, password } = req.body
        const person = await Person.findOne({user})

        const passwordCorrect = person === null
        ? false
        : await bcrypt.compare(password, person.password)

        !(person && passwordCorrect )
        ? res.status(401).json({message: "invalid user o password"})
        : res.status(200).json(person)

        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error when logging in."});
    }
}