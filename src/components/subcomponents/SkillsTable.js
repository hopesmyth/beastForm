import React from 'react';
import {renderBonus, skillLongNames} from "../../utils/stringUtils";
import {skillAttributes} from "../../utils/constants";


class SkillsTable extends React.Component {

  render() {
    const { skills } = this.props;

    return (
      <table className="center">
        <tbody>
        {Object.keys(skills).map(skill =>
          <tr key={skill}>
            <th>{skillLongNames[skill]}</th>
            <td>{skillAttributes[skill].toUpperCase()}</td>
            <td>{renderBonus(skills[skill])}</td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}

export default SkillsTable;