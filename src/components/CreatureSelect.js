import React from 'react';
import renderFraction from "../utils/renderFraction";

class CreatureSelect extends React.Component {

  render() {
    const { creatures, selectedBeast, selectFunc } = this.props;

    return (
      <select value={selectedBeast} onChange={(e) => {selectFunc(e.target.value)}}>
        {creatures.map(c =>
          <option key={c.index} value={c.index}>
            {c.name} ({renderFraction(c.cr)})
          </option>
        )}
      </select>
    )
  }
}

export default CreatureSelect;