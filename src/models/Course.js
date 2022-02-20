import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const courseSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'Person',
        required: true
    }
});

module.exports = model('Course', courseSchema);