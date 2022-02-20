const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const scoreSchema = new Schema({
    course: {
        type: mongoose.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    student: {
        type: mongoose.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    value1: Number,
    value2: Number,
    value3: Number
});

module.exports = model('Score', scoreSchema);