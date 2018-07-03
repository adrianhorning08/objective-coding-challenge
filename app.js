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


/*
  {
    jobId : {
      ...jobObj,
      applicants: [ {
        ...applicantObj,
        skills: []
      } ],
    }
  }
*/

// get /api/applicants


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

// app.get('/api/jobApplicants', async (req, res) =>{
//   const formattedData = {};
//   Job.find()
//   .then(jobs => {
//     jobs.forEach(job => {
//       formattedData[job.id] = job;
//       Applicant.find({job_id: job.id})
//       .then(applicants => {
//         applicants.forEach(applicant => {
//           formattedData[job.id].applicants.push(applicant)
//         })
//         res.send(formattedData)
//       })
//     })
//   })
// });



app.get('/api/skills', async (req, res) =>{
  Skill.find((err, skills) => {
     res.send(skills)
  })
});

app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
});
