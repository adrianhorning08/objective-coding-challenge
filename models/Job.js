const mongoose = require('mongoose');
const { Schema } = mongoose;

const JobSchema = new Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('Job', JobSchema);
