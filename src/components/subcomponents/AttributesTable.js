import React from 'react';
import {renderBonus} from "../../utils/stringUtils";
import getStatBonus from "../../utils/getStatBonus";

class AttributesTable extends React.Component {

  render() {
    const { attributes } = this.props;

    return (
      <table className="center">
        <thead>
          <tr>
            <th>STR</th>
            <th>DEX</th>
            <th>CON</th>
            <th>INT</th>
            <th>WIS</th>
            <th>CON</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{attributes.str}</td>
            <td>{attributes.dex}</td>
            <td>{attributes.con}</td>
            <td>{attributes.int}</td>
            <td>{attributes.wis}</td>
            <td>{attributes.cha}</td>
          </tr>
          <tr>
            <td>{renderBonus(getStatBonus(attributes.str))}</td>
            <td>{renderBonus(getStatBonus(attributes.dex))}</td>
            <td>{renderBonus(getStatBonus(attributes.con))}</td>
            <td>{renderBonus(getStatBonus(attributes.int))}</td>
            <td>{renderBonus(getStatBonus(attributes.wis))}</td>
            <td>{renderBonus(getStatBonus(attributes.cha))}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AttributesTable;