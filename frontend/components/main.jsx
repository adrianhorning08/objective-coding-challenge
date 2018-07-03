import React from 'react';
import JobIndexItem from './jobIndexItem';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null,
      applicants: null,
      skils: null
    }
    this.formatData = this.formatData.bind(this);
  }

  async componentDidMount() {
   const models = ['jobs', 'applicants', 'skills'];
   await models.forEach(async (model) => {
     const resp = await fetch(`/api/${model}`);
     const json = await resp.json();
     this.setState({ [model]: json });
   })
  }

  formatData() {
    const newState = {};
    this.state.jobs.forEach(job => {
      newState[job.id] = job;
      newState[job.id].applicants = [];
      newState[job.id].skillCount = 0;
      this.state.applicants.forEach(applicant => {
        if (applicant.job_id === job.id) {
          applicant.skills = [];
          this.state.skills.forEach(skill => {
            if (skill.applicant_id === applicant.id) {
              newState[job.id].skillCount++;
              applicant.skills.push(skill);
            }
          })
          newState[job.id].applicants.push(applicant)
        }
      })

    })
    return newState;
  }

  render() {

    // I need an ApplicantsComponent that fetches Jobid.applicants /api/1/applicants
    // Its just that the first tr has to contain the job title

    let skillCount = 0;
    const skills = new Set;
    if (this.state.skills) {
      this.state.skills.forEach(skill => {
        if (!skills.has(skill.name)) {
          skillCount++;
          skills.add(skill.name)
        }
      })
    }

    let table = null;
    if (this.state.applicants && this.state.skills && this.state.jobs) {
      const newData = this.formatData();

      const list = Object.values(newData).map(job => {
        return (
             <JobIndexItem
               job = {job}
               key = {job.id}
               />
        );
      });


      table = (
        <table className="job-applicants">
          <thead>
            <tr>
              <th>Job</th>
              <th>Applicant Name</th>
              <th>Email Address</th>
              <th>Website</th>
              <th>Skills</th>
              <th>Cover Letter Paragraph</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6">{this.state.applicants.length} Applicants, {skillCount} Unique Skills</td>
            </tr>
          </tfoot>
        </table>
      );
    }

    return table;
  }
}

export default Main;
