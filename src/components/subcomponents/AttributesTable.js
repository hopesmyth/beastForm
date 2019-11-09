import React from 'react';

const AttributeRow = ({ attributes }) => (
  <tr>
    <td>{attributes.str}</td>
    <td>{attributes.dex}</td>
    <td>{attributes.con}</td>
    <td>{attributes.int}</td>
    <td>{attributes.wis}</td>
    <td>{attributes.cha}</td>
  </tr>
);

class AttributesTable extends React.Component {

  render() {
    const { attributeRows } = this.props;

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
        { attributeRows.map((attr, index) => <AttributeRow key={`attributeTableRow ${index}`} attributes={attr}/> )}
        </tbody>
      </table>
    );
  }
}

export default AttributesTable;