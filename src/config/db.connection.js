const mongoose = require('mongoose');

const connectionDB = async () => {
    try {
        const db = await mongoose.connect('mongodb+srv://user_test:test123@cluster0.1rhnv.mongodb.net/university_db?retryWrites=true&w=majority');
        console.log("Database connection successful. ", db.connection.name)
    } catch (error) {
        console.error("Failed to connect to the database.", error)
    }
}
module.exports = connectionDB;