import React from 'react';
import {capitalise, renderBonus} from "../../utils/stringUtils";

const Damage = ({ hit }) => {
  let dice = Object.keys(hit);
  dice.splice(dice.indexOf("plus"));

  return (
    <>({
      dice.map(die => <React.Fragment key={die}>{hit[die]}{die} + </React.Fragment>)
    }{hit['plus']})</>
  );
};

const Attack = ({ attack }) => (
  <>
    <p>
      <strong>{attack.name}.</strong> <em>{capitalise(attack.range)} {capitalise(attack.attack)} Attack: </em>
      {renderBonus(attack.toHit)} to hit, reach {attack.reach} ft., {attack.target}.
      <br/>
      <em>Hit: </em>
      {Object.keys(attack.hit).map((type, i) => {
        const hit = attack.hit[type];
        let dice = Object.keys(hit);
        dice.splice(dice.indexOf("plus"));
        return (
         <React.Fragment key={type}>{i > 0 ? "plus " : ""}<Damage hit={hit}/> {type} damage</React.Fragment>
        );
      })}. {attack.description}
    </p>
  </>
);

const Action = ({ action }) => (
  <p><strong>{action.name}.</strong> {action.description}</p>
);

class Actions extends React.Component {

  render() {
    const { actions } = this.props;

    return (
      <div>
        { actions.map(action => action.attack ?
          <Attack key={action.name} attack={action}/> :
          <Action key={action.name} action={action}/> ) }
      </div>
    )
  }
}

export default Actions;