import React from 'react';
import BlahIndexItem from './blahIndexItem';

const JobIndexItem = props => {
  const rows = [];

  props.job.applicants.forEach((applicant, appIdx) => {
    applicant.skills.forEach((skill,skillIdx) => {
      if (appIdx === 0 && skillIdx === 0) {
        rows.push(
          <tr key={applicant.id}>
            <td rowSpan={props.job.skillCount} className="job-name">{props.job.name}</td>
            <td rowSpan={applicant.skills.length} className="applicant-name">{applicant.name}</td>
            <td rowSpan={applicant.skills.length}><a href={`mailto:${applicant.email}`}>{applicant.email}</a></td>
            <td rowSpan={applicant.skills.length}><a href={`http://${applicant.website}/`}>{applicant.website}</a></td>
            <td>{skill.name}</td>
            <td rowSpan={applicant.skills.length}>{applicant.cover_letter}</td>
          </tr>
        );
      } else if (appIdx !== 0 && skillIdx === 0) {
        rows.push(
          <tr key={applicant.id}>
            <td rowSpan={applicant.skills.length} className="applicant-name">{applicant.name}</td>
            <td rowSpan={applicant.skills.length}><a href={`mailto:${applicant.email}`}>{applicant.email}</a></td>
            <td rowSpan={applicant.skills.length}><a href={`http://${applicant.website}/`}>{applicant.website}</a></td>
            <td>{skill.name}</td>
            <td rowSpan={applicant.skills.length}>{applicant.cover_letter}</td>
          </tr>
        );
      } else {
          rows.push(
            <tr><td>{skill.name}</td></tr>
          );
      }
    });

  });

  return rows.map(row => row);

};

export default JobIndexItem;
