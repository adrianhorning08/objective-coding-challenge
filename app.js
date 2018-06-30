const express = require('express');
const path = require('path')
const axios = require("axios");
const mongoose = require('mongoose');
const Applicant = require('./models/Applicant');
const Job = require('./models/Job');
const Skill = require('./models/Skill');
const key = require('./config');


const app = express();

mongoose.connect(key.mongoURI);
app.use(express.static('frontend'))

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// app.get('/api', async (req, res) => {
//     try {
//       const response = await axios.get("http://itsthisforthat.com/api.php?json");
//       const data = response.data;
//       return res.send(data);
//     } catch (error) {
//       return error;
//     }
// })

app.get('/api/applicants', async (req, res) =>{
  Applicant.find((err, applicants) => {
     res.send(applicants)
  })
});

app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
});
