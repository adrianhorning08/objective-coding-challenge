import React from 'react';
import JobIndexItem from './jobIndexItem';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null,
      applicants: null,
      skills: null
    }
  }

  async componentDidMount() {
   const models = ['jobs', 'applicants', 'skills'];
   await models.forEach(async (model) => {
     const resp = await fetch(`/api/${model}`);
     const json = await resp.json();
     this.setState( { [model]: json } );
   })
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

    if (this.state.applicants) {
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
            {this.state.jobs.map(job => {
            <td rowspan="10" class="job-name">Web Developer</td>
              return <JobIndexItem
                        key = {job.id}
                        applicants = {this.state.applicants}
                        skills = {this.state.skills}
                      />
            })}
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
