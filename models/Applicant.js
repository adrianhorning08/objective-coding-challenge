const mongoose = require('mongoose');
const { Schema } = mongoose;

const applicantSchema = new Schema({
  id: Number,
  name: String,
  email: String,
  website: String,
  cover_letter: String,
  job_id: Schema.ObjectId
}, {collection: 'Applicants'});

module.exports = mongoose.model('Applicant', applicantSchema);
