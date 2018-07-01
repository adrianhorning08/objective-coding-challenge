const express = require('express');
const path = require('path')
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

app.get('/api/jobs', async (req, res) =>{
  Job.find((err, jobs) => {
    res.send(jobs)
  })
});
app.get('/api/applicants', async (req, res) =>{
  Applicant.find((err, applicants) => {
    res.send(applicants)
  })
});

app.get('/api/:jobId/applicants', async (req, res) =>{
  Applicant.find( { job_id: Number(req.params.jobId) }, (err, applicants) => {
     res.send(applicants)
  })
});

app.get('/api/:applicantId/skills', async (req, res) =>{
  Skill.find( { applicant_id: Number(req.params.applicantId) }, (err, skills) => {
     res.send(skills)
  })
});

app.get('/api/skills', async (req, res) =>{
  Skill.find((err, skills) => {
     res.send(skills)
  })
});

app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
});
