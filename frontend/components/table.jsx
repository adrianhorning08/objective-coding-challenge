import React from 'react';
import RowItem from './rowItem';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null,
      applicants: null,
      skils: null
    }
    this.reFormatData = this.reFormatData.bind(this);
    this.countUniqueSkills = this.countUniqueSkills.bind(this);
    this.renderTableBody = this.renderTableBody.bind(this);
  }

  async componentDidMount() {
   const models = ['jobs', 'applicants', 'skills'];
   await models.forEach(async (model) => {
     const resp = await fetch(`/api/${model}`);
     const json = await resp.json();
     this.setState({ [model]: json });
   })
  }

  reFormatData() {
    // reformat the data
    const newState = {};
    this.state.jobs.forEach(job => {
      newState[job.id] = job;
      // create array to hold applicants of specific job
      newState[job.id].applicants = [];
      // skillCount is for rowspan later
      newState[job.id].skillCount = 0;
      this.state.applicants.forEach(applicant => {
        if (applicant.job_id === job.id) {
          // create array to hold skills of specific applicant
          applicant.skills = [];
          this.state.skills.forEach(skill => {
            if (skill.applicant_id === applicant.id) {
              newState[job.id].skillCount++;
              applicant.skills.push(skill);
            }
          })
          // if applicant doesn't have skills (thats embarassing)
          if (applicant.skills.length === 0) {
            newState[applicant.job_id].skillCount++;
            applicant.skills.push(null);
          }
          newState[job.id].applicants.push(applicant)
        }
      })
    })
    return newState;
  }

  countUniqueSkills() {
    let uniqueSkillCount = 0;
    const skills = new Set;
    if (this.state.skills) {
      this.state.skills.forEach(skill => {
        if (!skills.has(skill.name)) {
          uniqueSkillCount++;
          skills.add(skill.name)
        }
      })
    }
    return uniqueSkillCount;
  }

  renderTableBody() {
    const newData = this.reFormatData();
    return Object.values(newData).map(job => {
      return (
        <RowItem
          job = {job}
          key = {job.id}
          />
      );
    });
  }

  render() {
    let table = null;

    if (this.state.applicants && this.state.skills && this.state.jobs) {
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
            {this.renderTableBody()}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="6">{this.state.applicants.length} Applicants, {this.countUniqueSkills()} Unique Skills
              </td>
            </tr>
          </tfoot>
        </table>
      );
    }
    return table;
  }
}

export default Main;
