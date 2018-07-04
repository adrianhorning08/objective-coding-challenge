import React from 'react';

const TableRowElement = props => {
  return (
    <tr key={props.applicant.id}>
      {props.first ?
        <td
          rowSpan={props.job.skillCount ? props.job.skillCount : 1}
          className="job-name">
          {props.job.name}
        </td>
        : null}

      <td
        rowSpan={props.applicant.skills.length}
        className="applicant-name">
        {props.applicant ? props.applicant.name : null}
      </td>

      <td
        rowSpan={props.applicant.skills.length}>
        <a href={`mailto:${props.applicant.email}`}>
          {props.applicant.email}
        </a>
      </td>

      <td
        rowSpan={props.applicant.skills.length}>
        <a href={`http://${props.applicant.website}/`}>
          {props.applicant.website}
        </a>
      </td>

      {props.skill ?
        <td>
          {props.skill.name}
        </td> :
        <td></td>
      }

      <td rowSpan={props.applicant.skills.length}>
        {props.applicant.cover_letter}
      </td>
    </tr>
  );
};

export default TableRowElement;
