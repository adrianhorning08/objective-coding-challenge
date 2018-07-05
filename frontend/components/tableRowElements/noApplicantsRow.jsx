import React from 'react';

const NoApplicantsRow = props => {
  return (
    <tr key={props.job._id}>
      <td
        rowSpan="1"
        className="job-name">
        {props.job.name}
      </td>

      <td
        rowSpan="1"
        className="applicant-name">
      </td>

      <td
        rowSpan={props.skill ? props.applicant.skills.length : 1}>
      </td>

      <td
        rowSpan="1">
      </td>

      <td>
      </td>

      <td rowSpan="1">
      </td>
    </tr>
  );
};

export default NoApplicantsRow;
