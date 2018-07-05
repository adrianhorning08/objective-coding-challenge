import React from 'react';
import TableRowElement from './tableRowElements/trElement';
import NoApplicantsRow from './tableRowElements/NoApplicantsRow';

const RowItem = props => {

  const createRowElement = (key, first, job, applicant, skill) => {
    return (
      <NoApplicantsRow
        key = {props.job._id}
        first = {true}
        job = {props.job}
        />
    );
  };

  if (props.job.applicants.length === 0) {
    return createRowElement(props.job_id, true, props.job, false, false);
  } else {
      return props.job.applicants.map((applicant, appIdx) => {
        return applicant.skills.map((skill,skillIdx) => {
          if (appIdx === 0 && skillIdx === 0) {
            return (
              <TableRowElement
                key = {applicant._id}
                first = {true}
                job = {props.job}
                applicant = {applicant}
                skill = {skill}
                />
            );
          } else if (appIdx !== 0 && skillIdx === 0) {
            return (
              <TableRowElement
                key = {applicant._id}
                first = {false}
                job = {props.job}
                applicant = {applicant}
                skill = {skill}
                />
            );
          } else {
            return (
              <tr key={skill._id}>
                <td>{skill.name}</td>
              </tr>
            );
          }
        });
    });
  }
};

export default RowItem;
