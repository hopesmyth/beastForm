import React from 'react';
import {renderBonus} from "../../utils/stringUtils";

class SavesTable extends React.Component {

  render() {
    const { saves } = this.props;

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
          <td>{renderBonus(saves.str)}</td>
          <td>{renderBonus(saves.dex)}</td>
          <td>{renderBonus(saves.con)}</td>
          <td>{renderBonus(saves.int)}</td>
          <td>{renderBonus(saves.wis)}</td>
          <td>{renderBonus(saves.cha)}</td>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default SavesTable;