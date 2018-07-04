import React from 'react';
import TableRowElement from './trElement';

const RowItem = props => {

  const createRowElement = (key, first, job, applicant, skill) => {
    return (
      <TableRowElement
        key = {key}
        first = {first}
        job = {job}
        applicant = {applicant}
        skill = {skill}
        />
    );
  };

  if (props.job.applicants.length === 0) {
    return createRowElement(props.job_id, true, props.job, false, false);
  } else {
    return props.job.applicants.map((applicant, appIdx) => {
      if (applicant.skills.length === 0) {
        return createRowElement(applicant._id, false, props.job, applicant, false);
      } else {
        return applicant.skills.map((skill,skillIdx) => {
          if (appIdx === 0 && skillIdx === 0) {
            return createRowElement(applicant._id, true, props.job, applicant, skill);
          } else if (appIdx !== 0 && skillIdx === 0) {
            return createRowElement(applicant._id, false, props.job, applicant, skill);
          } else {
            return (
              <tr key={skill._id}>
                <td>{skill.name}</td>
              </tr>
            );
          }
        });
      }
    });
  }
};

export default RowItem;
