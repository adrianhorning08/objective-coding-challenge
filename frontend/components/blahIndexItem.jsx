import React from 'react';

const blahIndexItem = props => {

  return props.job.applicants.map(applicant => {
          return (
               <tr key={applicant.id}>
                 <td rowSpan={props.job.skillCount} className="job-name">{props.job.name}</td>
                 <td rowSpan={applicant.skills.length} className="applicant-name">{applicant.name}</td>
                 <td rowSpan={applicant.skills.length}><a href={`mailto:${applicant.email}`}>{applicant.email}</a></td>
                 <td rowSpan={applicant.skills.length}><a href={`http://${applicant.website}/`}>{applicant.website}</a></td>
                 <td>{applicant.skills[0].name}</td>
                 <td rowSpan={applicant.skills.length}>{applicant.cover_letter}</td>
               </tr>
          );
     });
};

export default blahIndexItem;
