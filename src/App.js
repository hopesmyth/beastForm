import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const att = {
  STR: "strength",
  DEX: "dexterity",
  CON: "constitution",
  INT: "intelligence",
  WIS: "wisdom",
  CHA: "charisma"
}

const skill = {
  ACROBATICS: "Acrobatics",
  ANIMAL_HANDLING: "Animal Handling",
  ARCANA: "Arcana",
  ATHLETICS: "Athletics",
  DECEPTION: "Deception",
  HISTORY: "History",
  INSIGHT: "Insight",
  INTIMIDATION: "Intimidation",
  INVESTIGATION: "Investigation",
  MEDICINE: "Medicine",
  NATURE: "Nature",
  PERCEPTION: "Perception",
  PERFORMANCE: "Performance",
  PERSUASION: "Persuasion",
  RELIGION: "Religion",
  SLEIGHT_OF_HAND: "Sleight of Hand",
  STEALTH: "Stealth",
  SURVIVAL: "Survival"
}

function skillAtt(skillIn) {
  switch (skillIn) {
    case skill.ATHLETICS:
      return att.STR;
    case skill.ACROBATICS:
    case skill.SLEIGHT_OF_HAND:
    case skill.STEALTH:
      return att.DEX;
    case skill.ARCANA:
    case skill.HISTORY:
    case skill.INVESTIGATION:
    case skill.NATURE:
    case skill.RELIGION:
      return att.INT;
    case skill.INSIGHT:
    case skill.MEDICINE:
    case skill.PERCEPTION:
    case skill.SURVIVAL:
      return att.WIS;
    case skill.ANIMAL_HANDLING:
    case skill.DECEPTION:
    case skill.INTIMIDATION:
    case skill.PERFORMANCE:
    case skill.PERSUASION:
      return att.CHA;
    default:
      return undefined;
  }
}

class Action {
  constructor() {
    this.name = "";
    this.desc = "";
  }

  render() {
    return (
      <div>
        <p><strong>{this.name}.</strong> {this.desc}</p>
      </div>
    )
  }
}

class Attack {
  constructor() {
    this.name = "";
    this.type = "";
    this.desc = "";
    this.hitDesc = "";
  }

  render() {
    return (
      <div>
        <p><strong>{this.name}.</strong> <em>{this.type}:</em> {this.desc}<br/>
        <em>Hit:</em> {this.hitDesc}</p>
      </div>
    )
  }
}

class Character {
    constructor() {
      this.atts = new Attributes;
      this.saves = new Set();
      this.profBonus = 2;
      this.skills = new Set();
    }

    getAtts() {
      return this.atts;
    }
}

class Beast {
  constructor() {
    this.name = "";
    this.atts = new Attributes();
    this.saves = new Set();
    this.skills = new Set();
    this.hp = 10;
    this.ac = 10;
    this.profBonus = 2;
    this.actions = [];
    this.speed = 30;
    this.climbSpeed = 0;
    this.flySpeed = 0;
    this.swimSpeed = 0;
    this.senses = [];
    this.features = [];
  }

  addAction(action) {
    this.actions.push(action);
  }

  addFeature(feature) {
    this.features.push(feature);
  }

  addSense(sense) {
    this.senses.push(sense);
  }

}

class BeastForm {
  constructor(character, beast) {
    this.character = character;
    this.beast = beast;
    this.profBonus = 2;
  }

  getAtt(attribute) {
    switch (attribute) {
      case att.STR:
      case att.DEX:
      case att.CON:
        return this.beast.atts.getAtt(attribute);
      case att.INT:
      case att.WIS:
      case att.CHA:
        return this.character.atts.getAtt(attribute);
      default:
        return undefined;
    }
  }

  getBonus(attribute) {
    let val = this.getAtt(attribute);
    if (val === undefined) {
      return undefined;
    }
    return Math.floor(val / 2) - 5;
  }

  getSave(attribute) {
    let val = this.getBonus(attribute);
    let prof = 0;
    if (this.character.saves.has(attribute)) {
      prof = this.character.profBonus;
    }
    if (this.beast.saves.has(attribute)) {
      prof = Math.max(this.beast.profBonus, prof);
    }
    return val + prof;
  }

  getSkill(skillIn) {
    let attr = skillAtt(skillIn);
    let val = this.getBonus(attr);
    let prof = 0;
    if (this.character.skills.has(skillIn)) {
      prof = this.character.profBonus;
    }
    if (this.beast.skills.has(skillIn)) {
      prof = Math.max(this.beast.profBonus, prof);
    }
    return val + prof;
  }

  renderActions() {
    return (
      <div>
        {this.beast.actions.map(item =>
          <div>{item.render()}</div>
        )}
      </div>
    );
  }

  renderSenses() {
    return (
      <div>
        <p><strong>Senses </strong>
          {this.beast.senses.map(sense => (
            <span>{sense}, </span>
          ))}
        passive Perception {this.getSkill(skill.PERCEPTION) + 10}</p>
      </div>
    )
  }

  renderSpeed() {
    let list = [];
    let beast = this.beast;
    if (beast.climbSpeed > 0) {
      list.push(["climb", beast.climbSpeed]);
    }
    if (beast.swimSpeed > 0) {
      list.push(["swim", beast.swimSpeed])
    }
    if (beast.flySpeed > 0) {
      list.push(["fly", beast.flySpeed])
    }

    return (
      <div>
      <p><strong>Speed</strong> {beast.speed} ft.
      {list.map(item => (
        <span>, {item[0]} {item[1]} ft.</span>
      ))}</p>
      </div>
    );
  }
}

class Attributes {
  constructor() {
    this.atts = new Map([
      [att.STR, 10],
      [att.DEX, 10],
      [att.CON, 10],
      [att.INT, 10],
      [att.WIS, 10],
      [att.CHA, 10]])
  }

  getAtt(attribute) {
    return this.atts.get(attribute);
  }

  getBonus(attribute) {
    let val = this.atts.get(attribute);
    if (val === undefined) {
      return undefined;
    }
    return Math.floor(val / 2) - 5;
  }

  setAtt(attribute, value) {
    if (this.atts.has(attribute)) {
      this.atts.set(attribute, value);
    }
  }

  setAtts(atts) {
    this.setAtt(att.STR, atts[0]);
    this.setAtt(att.DEX, atts[1]);
    this.setAtt(att.CON, atts[2]);
    this.setAtt(att.INT, atts[3]);
    this.setAtt(att.WIS, atts[4]);
    this.setAtt(att.CHA, atts[5]);
  }
}

function defaultChar() {
  let char = new Character();
  char.atts.setAtts([8, 13, 16, 12, 16, 10]);
  char.saves = new Set([att.CON, att.INT, att.WIS]);
  char.skills = new Set([skill.ATHLETICS, skill.INSIGHT, skill.NATURE, skill.PERCEPTION, skill.SURVIVAL])
  return char;
}

function bear() {
  let bear = new Beast();
  bear.name = "Bear"
  bear.ac = 11;
  bear.hp = 34;
  bear.speed = 40;
  bear.climbSpeed = 30;
  bear.atts.setAtts([19, 10, 16, 2, 13, 7]);
  let feat = new Action();
  feat.name = "Keen Smell";
  feat.desc = "You have advantage on Wisdom (Perception) checks that rely on smell.";
  let act = new Action();
  act.name = "Multiattack";
  act.desc = "You make two attacks: one with your bite and one with your claws."
  bear.addAction(act);
  let atk = new Attack();
  atk.name = "Bite";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+5 to hit, reach 5ft., one target.";
  atk.hitDesc = "1d8 + 4 piercing damage."
  bear.addAction(atk);
  let atk2 = new Attack();
  atk2.name = "Claws";
  atk2.type = "Melee Weapon Attack";
  atk2.desc = "+5 to hit, reach 5ft., one target."
  atk2.hitDesc = "2d6 + 4 slashing damage."
  bear.addAction(atk2);
  return bear;
}

function attrTable(funcIn) {
  return (
      <tr>
      <td>{funcIn(att.STR)}</td>
      <td>{funcIn(att.DEX)}</td>
      <td>{funcIn(att.CON)}</td>
      <td>{funcIn(att.INT)}</td>
      <td>{funcIn(att.WIS)}</td>
      <td>{funcIn(att.CHA)}</td>
      </tr>
  );
}

function skillTable(beastForm) {
  let entries = Object.entries(skill);
  return (
    <table class="center">
      {entries.map(entry => (
        <tr>
          <th>{entry[1]}</th>
          <td>{skillAtt(entry[1])}</td>
          <td>{beastForm.getSkill(entry[1])}</td>
        </tr>
      ))}
    </table>
  )
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chr: defaultChar(),
      beast: bear()
    }

  }

  render() {
    let chr = this.state.chr;
    let beast = this.state.beast;
    let beastForm = new BeastForm(chr, beast);

    return (
      <div className="App">
        <h1>{beast.name}</h1>
        <p><strong>Armor Class</strong> {beast.ac}</p>
        <p><strong>Hit Points</strong> {beast.hp}</p>
        {beastForm.renderSpeed()}
        <table class="center">
          <tr>
            <th>STR</th>
            <th>DEX</th>
            <th>CON</th>
            <th>INT</th>
            <th>WIS</th>
            <th>CHA</th>
          </tr>
          {attrTable(x => beastForm.getAtt(x))}
          {attrTable(x => beastForm.getBonus(x))}
        </table>
        <p>Saves</p>
        <table class="center">
        <tr>
          <th>STR</th>
          <th>DEX</th>
          <th>CON</th>
          <th>INT</th>
          <th>WIS</th>
          <th>CHA</th>
        </tr>
          {attrTable(x => beastForm.getSave(x))}
        </table>
        {beastForm.renderSenses()}
        {beastForm.renderActions()}
        {skillTable(beastForm)}
      </div>
    );
  }
}

export default App;
