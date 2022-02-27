const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const personSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateBirth: Date,
  type: String,
  user: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

module.exports = model('Person', personSchema);