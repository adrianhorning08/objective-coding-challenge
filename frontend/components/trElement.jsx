import React from 'react';

const TableRowElement = props => {
  return (
    <tr key={props.applicant ? props.applicant.id : props.job._id}>
      {props.first ?
        <td
          rowSpan={props.job.skillCount ? props.job.skillCount : 1}
          className="job-name">
          {props.job.name}
        </td>
        : null}

      <td
        rowSpan={props.skill ? props.applicant.skills.length : 1}
        className="applicant-name">
        {props.applicant ? props.applicant.name : null}
      </td>

      <td
        rowSpan={props.skill ? props.applicant.skills.length : 1}>
        <a href={`mailto:${props.applicant.email}`}>
          {props.applicant.email}
        </a>
      </td>

      <td
        rowSpan={props.skill ? props.applicant.skills.length : 1}>
        {props.applicant ?
          <a href={`http://${props.applicant.website}/`}>
            {props.applicant.website}
          </a>
          : null
        }
      </td>

      {props.skill ?
        <td>
          {props.skill.name}
        </td>
        :
        <td>
        </td>
      }

      <td rowSpan={props.skill ? props.applicant.skills.length : 1}>
        {props.applicant ?
          props.applicant.cover_letter ?
          props.applicant.cover_letter :
          "This fool aint got a cover letter!?"
          : null
        }
      </td>
    </tr>
  );
};

export default TableRowElement;
