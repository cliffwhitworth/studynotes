const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  category: String,
  id: String,
  name: String,
  purpose: String,
  code: String
});

mongoose.model('notes', noteSchema);
