import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function brownBear() {
  let bear = new Beast();
  bear.name = "Brown Bear"
  bear.ac = 11;
  bear.hp = 34;
  bear.speed = 40;
  bear.climbSpeed = 30;
  bear.atts.setAtts([19, 10, 16, 2, 13, 7]);
  let feat = new Action();
  feat.name = "Keen Smell";
  feat.desc = "You have advantage on Wisdom (Perception) checks that rely on smell.";
  bear.addFeature(feat);
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

function direWolf() {
  let beast = new Beast();
  beast.name = "Dire Wolf"
  beast.ac = 14;
  beast.hp = 37;
  beast.speed = 50;
  beast.atts.setAtts([17, 15, 15, 3, 12, 7]);
  beast.skills = [skill.PERCEPTION, skill.STEALTH]
  let feat = new Action();
  feat.name = "Keen Hearing and Smell";
  feat.desc = "You have advantage on Wisdom (Perception) checks that rely on hearing or smell.";
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Pack tactics";
  feat.desc = "You have advantage on attack rolls against a creature if at least one of your allies is in within 5 feet of the creature and isn't incapacitated";
  beast.addFeature(feat);
  let atk = new Attack();
  atk.name = "Bite";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+5 to hit, reach 5ft., one target.";
  atk.hitDesc = "2d6 + 3 piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.";
  beast.addAction(atk);
  return beast;
}

function giantOctopus() {
  let beast = new Beast();
  beast.name = "Giant Octopus"
  beast.ac = 11;
  beast.hp = 52;
  beast.speed = 10;
  beast.swimSpeed = 60;
  beast.atts.setAtts([17, 13, 13, 4, 10, 4]);
  beast.skills = [skill.PERCEPTION, skill.STEALTH]
  beast.profBonus = 4;
  beast.addSense("darkvision 60ft.")
  let feat = new Action();
  feat.name = "Hold Breath";
  feat.desc = "While out of water, you can hold your breath for 1 hour.";
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Underwater Camouflage";
  feat.desc = "You have advantage on Dexterity (Stealth) checks made while underwater."
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Water Breathing";
  feat.desc = "You can breath only underwater."
  beast.addFeature(feat);
  let atk = new Attack();
  atk.name = "Tentacles";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+5 to hit, reach 15ft., one target.";
  atk.hitDesc = "2d6 + 3 bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and you can't use your tentacles on another target.";
  beast.addAction(atk);
  atk = new Action();
  atk.name = "Ink Cloud (Recharges after a Short or Long Rest)";
  atk.desc = "A 20-foot radius cloud of ink extends all around you if you are underwater. The area is heavily obscured for 1 minute, although a significant current can dispurse the ink. After releasing the ink, you can use the Dash action as a bonus action."
  beast.addAction(atk);
  return beast;
}

function giantSpider() {
  let beast = new Beast();
  beast.name = "Giant Spider"
  beast.ac = 14;
  beast.hp = 26;
  beast.speed = 30;
  beast.climbSpeed = 30;
  beast.atts.setAtts([14, 16, 12, 0, 0, 0]);
  beast.skills = [skill.STEALTH]
  beast.addSense("blindsight 10ft");
  beast.addSense("darkvision 60ft");
  beast.profBonus = 4;
  let feat = new Action();
  feat.name = "Spider Climb";
  feat.desc = "You can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.";
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Web Sense";
  feat.desc = "While in contact with a web, you know the exact location of any other creature in contact with the same web.";
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Web Walker";
  feat.desc = "You ignore movement restrictions caused by webbing.";
  beast.addFeature(feat);
  let atk = new Attack();
  atk.name = "Bite";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+5 to hit, reach 5ft., one creature.";
  atk.hitDesc = "1d8 + 3 piercing damage, and the target must take a DC 11 Constitution saving throw, taking 2d8 poison damage on a failed save, or half as much damage on a successful one. If the poision damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.";
  beast.addAction(atk);
  atk = new Attack();
  atk.name = "Web (Recharge 5-6)"
  atk.type = "Ranged Weapon Attack";
  atk.desc = "+5 to hit, range 30/60 ft., one creature."
  atk.hitDesc = "The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5, vuln. to fire damage; immu. to bludgeoning, poison and psychic damage.)"
  beast.addAction(atk);
  return beast;
}

function giantToad() {
  let beast = new Beast();
  beast.name = "Giant Toad"
  beast.ac = 11;
  beast.hp = 39;
  beast.speed = 20;
  beast.swimSpeed = 40;
  beast.atts.setAtts([15, 13, 13, 0, 0, 0]);
  beast.addSense("darkvision 30ft");
  let feat = new Action();
  feat.name = "Amphibious";
  feat.desc = "You can breathe air and water.";
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Standing Leap";
  feat.desc = "Your long jump is up to 20 feet and your high jump is up to 10 feet, with or without a running start.";
  beast.addFeature(feat);
  let atk = new Attack();
  atk.name = "Bite";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+4 to hit, reach 5ft., one target.";
  atk.hitDesc = "1d10 + 2 piercing damage plus 1d10 poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the you can't bite another target.";
  beast.addAction(atk);
  atk = new Action();
  atk.name = "Swallow";
  atk.desc = "You make one bite attack against a Medium or smaller target you are grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside of you, and it takes 3d6 acid damage at the start of each of your turns. You can have only one target swallowed at a time.";
  beast.addAction(atk);
  return beast;
}

function cat() {
  let beast = new Beast();
  beast.name = "Cat :3c"
  beast.ac = 12;
  beast.hp = 2;
  beast.speed = 40;
  beast.climbSpeed = 30;
  beast.atts.setAtts([3, 14, 10, 0, 0, 0]);
  beast.skills = [skill.PERCEPTION, skill.STEALTH]
  let feat = new Action();
  feat.name = "Keen Hearing and Smell";
  feat.desc = "You have advantage on Wisdom (Perception) checks that rely on hearing or smell.";
  beast.addFeature(feat);
  let atk = new Attack();
  atk.name = "Claws";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+0 to hit, reach 5ft., one target.";
  atk.hitDesc = "1 slashing damage.";
  beast.addAction(atk);
  return beast;
}


const att = {
  STR: "STR",
  DEX: "DEX",
  CON: "CON",
  INT: "INT",
  WIS: "WIS",
  CHA: "CHA"
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
    this.saves = [];
    this.skills = [];
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
    if (this.beast.saves.includes(attribute)) {
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
    if (this.beast.skills.includes(skillIn)) {
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

  renderFeatures() {
    return (
      <div>
        {this.beast.features.map(item =>
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
    this.atts = [
      [att.STR, 10],
      [att.DEX, 10],
      [att.CON, 10],
      [att.INT, 10],
      [att.WIS, 10],
      [att.CHA, 10]]
  }

  getAtt(attribute) {
    for (let i = 0; i < this.atts.length; i++) {
      if (attribute === this.atts[i][0]) {
        return this.atts[i][1];
        return 10;
      }
    }
    return undefined;
  }

  getBonus(attribute) {
    let val = this.getAtt(attribute);
    if (val === undefined) {
      return undefined;
    }
    return Math.floor(val / 2) - 5;
  }

  setAtt(attribute, value) {
    for (let i = 0; i < this.atts.length; i++) {
      if (attribute === this.atts[i][0]) {
        this.atts[i][1] = value;
      }
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

var beastFuncs = new Map([
  ["brownBear", brownBear],
  ["direWolf", direWolf],
  ["giantOctopus", giantOctopus],
  ["giantSpider", giantSpider],
  ["giantToad", giantToad],
  ["cat", cat]
]);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chr: defaultChar(),
      value: "brownBear"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    let chr = this.state.chr;
    let beast = beastFuncs.get(this.state.value)();
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
        {beastForm.renderFeatures()}
        <br/>
        {beastForm.renderActions()}
        {skillTable(beastForm)}
        <select value={this.state.value} onChange={this.handleChange}>
          <option value={"cat"}>Cat (0)</option>
          <option value={"brownBear"}>Brown Bear (1)</option>
          <option value={"direWolf"}>Dire Wolf (1)</option>
          <option value={"giantOctopus"}>Giant Octopus (1S)</option>
          <option value={"giantSpider"}>Giant Spider (1)</option>
          <option value={"giantToad"}>Giant Toad (1S)</option>
        </select>
      </div>
    );
  }
}

export default App;
