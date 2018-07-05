# Objective-coding-challenge

## Overview
Your task is to use the data provided and implement some sort of application
(Ruby on Rails, Django, Laravel, React, node.js, your own custom application,
etc.) to output the data in a format that matches as closely as possible the
HTML structure shown in index.html. Your solution should accept any data set
like the one provided, so it must allow any number of skills per person, any
number of jobs, and any number of applicants. Your solution *must not* use CSS
styles to format the HTML, except for what is already provided in the
index.html example.

## Usage
`node v9.11.1`
`npm 5.6.0`
1. Clone repo `git clone https://github.com/adrianhorning08/objective-coding-challenge.git`
2. `cd objective-coding-challenge`
3. Run `npm install` to run dependencies
4. Run `npm start` to start server
5. Navigate to [local_host](http://localhost:3000)
6. Enjoy!

## Tech Used
I used the MERN stack. Used [mLab](https://mlab.com/) to host MongoDB.

## Implementation
* In MongoDB, created separate collections for applicants, jobs, and skills respectively
* Created API to fetch all applicants, jobs, and skills from DB
* Reformatted data on frontend to make it easier to find associations

## Additional Thoughts

* Added 2 more jobs, and 1 applicant to show what happens when an Applicant has 0 skills, and when a job has 0 applicants

* I had to reformat the data that came from the backend.
I could've used Redux to do that, but I thought Redux was a little overkill for this project

* Rails would have been easier to get the data associations, because of Active Record, but I wanted to polish my Node/NoSQL skills
