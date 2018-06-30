const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
  id:  Number,
  name: String,
  applicant_id: Schema.ObjectId
}, {collection: 'Skills'});

module.exports = mongoose.model('Skill', skillSchema);
