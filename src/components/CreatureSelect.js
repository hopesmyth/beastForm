import React from 'react';
import {renderFraction} from "../utils/stringUtils";

class CreatureSelect extends React.Component {

  render() {
    const { creatures, selected, selectFunc } = this.props;

    return (
      <select value={selected} onChange={(e) => {selectFunc(e.target.value)}}>
        {creatures.map(c =>
          <option key={c.index} value={c.index}>
            {c.name} ({renderFraction(c.cr)}{c.flySpeed ? 'F' : (c.swimSpeed ? 'S' : '' )})
          </option>
        )}
      </select>
    )
  }
}

export default CreatureSelect;