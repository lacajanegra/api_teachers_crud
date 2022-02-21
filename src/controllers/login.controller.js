const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Person = require('../models/Person')
exports.login = async(req, res) => {
    try {
        const { user, password } = req.body
        const person = await Person.findOne({user})

        const passwordCorrect = person === null
        ? false
        : await bcrypt.compare(password, person.password)

        if(!(person && passwordCorrect )){
            res.status(401).json({message: "invalid user o password"})
        }else{
            const token = jwt.sign({
                _id: person._id,
                name: person.name,
                lastName: person.lastName,
                type: person.type,
                user: person.type
            },process.env.SECRET_WORD)


            res.status(200).json({
                name: person.name,
                lastName: person.lastName,
                type: person.type,
                user: person.type,
                token
            })
        }

        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error when logging in."});
    }
}