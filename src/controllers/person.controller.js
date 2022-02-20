const Person = require('../models/Person')

exports.addPerson = async (req, res) => {
    try {
        const { ID, name, lastName, dateBirth, type, user, password } = req.body;

        const person = new Person({ ID, name, lastName, dateBirth, type, user, password });
        await person.save();

        res.status(200).json({message: "Person saved."});
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error when saving person data."});
    }
}

exports.getStudents = async (req, res) => {
    try {
        const students = await Person.find({type: "Student"})
        res.status(200).json({data: students})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error when obtaining students."});
    }
}