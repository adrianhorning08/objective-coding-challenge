import React from 'react';

const TableRowElement = props => {
  return (
    <tr key={props.applicant.id}>
      {props.first ?
        <td
          rowSpan={props.job.skillCount}
          className="job-name">
          {props.job.name}
        </td>
        : null}

      <td
        rowSpan={props.applicant.skills.length}
        className="applicant-name">
        {props.applicant.name}
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

      <td>
        {props.skill.name}
      </td>

      <td rowSpan={props.applicant.skills.length}>
        {props.applicant.cover_letter}
      </td>
    </tr>
  );
};

export default TableRowElement;
