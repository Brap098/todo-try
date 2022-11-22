const mongoose = require('mongoose')

const todosSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, required: false },
  state: { type: String, required: false },
  founded: Number
})

module.exports = mongoose.module('todos', todosSchema)