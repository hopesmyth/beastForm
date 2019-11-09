import React from 'react';
import DescriptionLine from "./subcomponents/DescriptionLine";
import Speeds from "./subcomponents/Speeds";
import AttributesTable from "./subcomponents/AttributesTable";
import SavesTable from "./subcomponents/SavesTable";

class StatBlock extends React.Component {

  render() {
    const { stats } = this.props;

    return (
     <div className="beast-form">
       <h2>{stats.name}</h2>
       <DescriptionLine size={stats.size} type={stats.type}/>
       <p><strong>Armor Class</strong> {stats.ac}</p>
       <p><strong>Hit Points</strong> {stats.hp}</p>
       <Speeds stats={stats}/>
       <AttributesTable attributes={stats.attributes}/>
       <h3>Saving Throws</h3>
       <SavesTable saves={stats.saves}/>
     </div>
    )
  }
}

export default StatBlock;