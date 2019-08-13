import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function wolf() {
  let beast = new Beast();
  beast.name = "Wolf";
  beast.size = "Medium";
  beast.ac = 13;
  beast.hp = 11;
  beast.speed = 40;
  beast.atts.setAtts([12, 15, 12, 3, 12, 6]);
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
  atk.desc = "+4 to hit, reach 5ft., one target.";
  atk.hitDesc = "2d4 + 2 piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.";
  beast.addAction(atk);
  return beast;
}

function blackBear() {
  let beast = new Beast();
  beast.name = "Black Bear";
  beast.size = "Medium";
  beast.ac = 11;
  beast.hp = 19;
  beast.speed = 40;
  beast.climbSpeed = 30;
  beast.atts.setAtts([15, 10, 14, 2, 12, 7]);
  beast.skills = [skill.PERCEPTION]
  let feat = new Action();
  feat.name = "Keen Smell";
  feat.desc = "You have advantage on Wisdom (Perception) checks that rely on smell.";
  beast.addFeature(feat);
  let atk = new Action();
  atk.name = "Multiattack"
  atk.desc = "You make two attacks: one with your bite and one with your claws."
  beast.addAction(atk);
  atk = new Attack();
  atk.name = "Bite";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+3 to hit, reach 5ft., one target.";
  atk.hitDesc = "1d6 + 2 piercing damage.";
  beast.addAction(atk);
  atk = new Attack();
  atk.name = "Claws";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+3 to hit, reach 5ft., one target.";
  atk.hitDesc = "2d4 + 2 piercing damage.";
  beast.addAction(atk);
  return beast;
}

function brownBear() {
  let bear = new Beast();
  bear.name = "Brown Bear";
  bear.size = "Large";
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
  beast.name = "Dire Wolf";
  beast.size = "Large";
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
  beast.name = "Giant Octopus";
  beast.size = "Large";
  beast.ac = 11;
  beast.hp = 52;
  beast.speed = 10;
  beast.swimSpeed = 60;
  beast.atts.setAtts([17, 13, 13, 4, 10, 4]);
  beast.skills = [skill.PERCEPTION, skill.STEALTH];
  beast.expertise = [skill.PERCEPTION, skill.STEALTH];
  beast.addSense("darkvision 60ft.");
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
  beast.name = "Giant Spider";
  beast.size = "Large";
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
  beast.name = "Giant Toad";
  beast.size = "Large";
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

function polarBear() {
  let beast = new Beast();
  beast.name = "Polar Bear";
  beast.size = "Large";
  beast.ac = 12;
  beast.hp = 42;
  beast.speed = 40;
  beast.swimSpeed = 30;
  beast.atts.setAtts([20, 10, 16, 2, 13, 7]);
  beast.skills = [skill.PERCEPTION]
  let feat = new Action();
  feat.name = "Keen Smell";
  feat.desc = "You have advantage on Wisdom (Perception) checks that rely on smell.";
  beast.addFeature(feat);
  let atk = new Action();
  atk.name = "Multiattack"
  atk.desc = "You make two attacks: one with your bite and one with your claws."
  beast.addAction(atk);
  atk = new Attack();
  atk.name = "Bite";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+7 to hit, reach 5ft., one target.";
  atk.hitDesc = "1d8 + 5 piercing damage.";
  beast.addAction(atk);
  atk = new Attack();
  atk.name = "Claws";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+7 to hit, reach 5ft., one target.";
  atk.hitDesc = "2d6 + 5 piercing damage.";
  beast.addAction(atk);
  return beast;
}

function caveBear() {
  let beast = polarBear();
  beast.name = "Cave Bear";
  beast.addSense("darkvision 60ft");
  return beast;
}

function giantConstrictor() {
  let beast = new Beast();
  beast.name = "Giant Constrictor Snake";
  beast.size = "Huge";
  beast.ac = 12;
  beast.hp = 60;
  beast.speed = 30;
  beast.swimSpeed = 30;
  beast.atts.setAtts([19, 14, 12, 1, 10, 3]);
  beast.skills = [skill.PERCEPTION]
  let atk = new Attack();
  atk.name = "Bite";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+6 to hit, reach 10ft., one creature.";
  atk.hitDesc = "2d6 + 4 piercing damage.";
  beast.addAction(atk);
  atk = new Attack();
  atk.name = "Constrict";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+6 to hit, reach 5ft., one creature.";
  atk.hitDesc = "2d8 + 4 bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and you can't constrict another target.";
  beast.addAction(atk);
  return beast;
}

function giantElk() {
  let beast = new Beast();
  beast.name = "Giant Elk";
  beast.size = "Huge";
  beast.ac = 14;
  beast.hp = 42;
  beast.speed = 60;
  beast.atts.setAtts([19, 16, 14, 7, 14, 10]);
  beast.skills = [skill.PERCEPTION]
  let feat = new Action();
  feat.name = "Charge";
  feat.desc = "If you move at least 20 feet straight towards a target and hit it with a ram attack on the same turn, the target takes an extra 2d6 damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.";
  beast.addFeature(feat);
  let atk = new Attack();
  atk.name = "Ram";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+6 to hit, reach 10ft., one target.";
  atk.hitDesc = "2d6 + 4 bludgeoning damage.";
  beast.addAction(atk);
  atk = new Attack();
  atk.name = "Hooves";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+6 to hit, reach 5ft., one prone creature.";
  atk.hitDesc = "4d8 + 4 bludgeoning damage.";
  beast.addAction(atk);
  return beast;
}

function hunterShark() {
  let beast = new Beast();
  beast.name = "Hunter Shark";
  beast.size = "Large";
  beast.ac = 12;
  beast.hp = 45;
  beast.speed = 0;
  beast.swimSpeed = 40;
  beast.atts.setAtts([18, 13, 15, 1, 10, 4]);
  beast.skills = [skill.PERCEPTION]
  beast.addSense("blindsight 30ft.")
  let feat = new Action();
  feat.name = "Blood Frenzy";
  feat.desc = "You have advantage on melee attack rolls against any creature that doesn't have all its hit points.";
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Water Breathing";
  feat.desc = "You can only breathe underwater.";
  beast.addFeature(feat);
  let atk = new Attack();
  atk.name = "Bite";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+6 to hit, reach 5ft., one target.";
  atk.hitDesc = "2d8 + 4 piercing damage.";
  beast.addAction(atk);
  return beast;
}

function saberToothedTiger() {
  let beast = new Beast();
  beast.name = "Saber-Toothed Tiger";
  beast.size = "Large";
  beast.ac = 12;
  beast.hp = 52;
  beast.speed = 40;
  beast.atts.setAtts([18, 14, 15, 3, 12, 8]);
  beast.skills = [skill.PERCEPTION, skill.STEALTH]
  beast.expertise = [skill.STEALTH]
  let feat = new Action();
  feat.name = "Keen Smell";
  feat.desc = "You have advantage on Wisdom (Perception) checks that rely on smell.";
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Pounce";
  feat.desc = "If you move at least 20 feet straight toward a target creature and then hit it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving through or be knocked prone. If the target is prone, you can make one bite attack against it as a bonus action."
  beast.addFeature(feat);
  let atk = new Attack();
  atk.name = "Bite";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+6 to hit, reach 5ft., one target.";
  atk.hitDesc = "1d10 + 5 piercing damage.";
  beast.addAction(atk);
  atk = new Attack();
  atk.name = "Claw";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+6 to hit, reach 5ft., one target.";
  atk.hitDesc = "2d6 + 5 slashing damage."
  beast.addAction(atk);
  return beast;
}

function cat() {
  let beast = new Beast();
  beast.name = "Cat :3c";
  beast.size = "Tiny";
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

function deer() {
  let beast = new Beast();
  beast.name = "Deer";
  beast.size = "Medium";
  beast.ac = 13;
  beast.hp = 4;
  beast.speed = 50;
  beast.atts.setAtts([11, 16, 11, 2, 14, 5]);
  let atk = new Attack();
  atk.name = "Bite";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+2 to hit, reach 5ft., one target.";
  atk.hitDesc = "1d4 piercing damage.";
  beast.addAction(atk);
  return beast;
}

function ridingHorse() {
  let beast = new Beast();
  beast.name = "Riding Horse";
  beast.size = "Large";
  beast.ac = 10;
  beast.hp = 13;
  beast.speed = 60;
  beast.atts.setAtts([16, 10, 12, 2, 11, 7]);
  let atk = new Attack();
  atk.name = "Hooves";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+2 to hit, reach 5ft., one target.";
  atk.hitDesc = "2d4 + 3 piercing damage.";
  beast.addAction(atk);
  return beast;
}

function dryad() {
  let beast = new Beast();
  beast.name = "Dryad";
  beast.size = "Medium";
  beast.ac = 11;
  beast.hp = 22;
  beast.speed = 30;
  beast.atts.setAtts([10, 12, 11, 14, 15, 18]);
  beast.addSense("darkvision 60ft.");
  beast.skills = [skill.PERCEPTION, skill.STEALTH];
  beast.expertise = [skill.STEALTH];
  let feat = new Action();
  feat.name = "Innate Spellcasting";
  feat.desc = "The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no material components: At will: druidcraft; 3/day each: entangle, goodberry; 1/day each: barkskin, pass without trace, shillelagh";
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Magic Resistance";
  feat.desc = "The dryad has advantage on saving throws against spells and other magical effects.";
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Speak with Beasts and Plants";
  feat.desc = "The dryad can communicate with beasts and plants as if they shared a language.";
  beast.addFeature(feat);
  feat = new Action();
  feat.name = "Tree Stride";
  feat.desc = "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be large or bigger.";
  beast.addFeature(feat);
  let atk = new Attack();
  atk.name = "Club";
  atk.type = "Melee Weapon Attack";
  atk.desc = "+2 to hit (+6 to hit with shillelagh), reach 5ft., one target.";
  atk.hitDesc = "1d4 bludgeoning damage, or 1d8+4 bludgeoning damage with shillelagh.";
  beast.addAction(atk);
  let action = new Action();
  action.name = "Fey Charm";
  action.desc = "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can . Each time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target 's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours. The dryad can have no more than one humanoid and up to three beasts charmed at a time.";
  beast.addAction(action);
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
      this.profBonus = 3;
      this.skills = new Set();
    }

    getAtts() {
      return this.atts;
    }
}

class Beast {
  constructor() {
    this.name = "";
    this.cr = 0;
    this.size = "Medium";
    this.type = "Beast";
    this.atts = new Attributes();
    this.saves = [];
    this.skills = [];
    this.expertise = [];
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

  load(json) {
    let input = JSON.parse(json);
    console.log(input);
    this.name = input.name;
    this.size = input.size;
    this.type = input.type;
    let atts = new Attributes();
    atts.atts = input.atts.atts;
    this.atts = atts;
    this.saves = input.saves;
    this.skills = input.skills;
    this.expertise = input.expertise;
    this.hp = input.hp;
    this.ac = input.ac;
    this.profBonus = input.profBonus;
    this.actions = input.actions;
    this.speed = input.speed;
    this.climbSpeed = input.climbSpeed;
    this.flySpeed = input.flySpeed;
    this.swimSpeed = input.swimSpeed;
    this.senses = input.senses;
    this.features = input.features;
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

  getAtt(attribute) {
    return this.atts.getAtt(attribute);
  }

  getBonus(attribute) {
    let val = this.getAtt(attribute);
    if (val === undefined) {
      return undefined;
    }
    return Math.floor(val / 2) - 5;
  }

  getSkill(skillIn) {
    let attr = skillAtt(skillIn);
    let val = this.getBonus(attr);
    let prof = 0;
    if (this.skills.includes(skillIn)) {
      prof = this.profBonus;
    }
    if (this.expertise.includes(skillIn)) {
      prof = this.profBonus * 2;
    }
    return val + prof;
  }

  renderActions() {
    return (
      <div>
        {this.actions.map(item =>
          //<div>{item.render()}</div>
          <div>{'type' in item ?
            <div>
              <p><strong>{item.name}.</strong> <em>{item.type}:</em> {item.desc}<br/>
              <em>Hit:</em> {item.hitDesc}</p>
            </div>
            :
            <div>
              <p><strong>{item.name}.</strong> {item.desc}</p>
            </div>}
          </div>
        )}
      </div>
    );
  }

  renderFeatures() {
    return (
      <div>
        {this.features.map(item =>
          //<div>{item.render()}</div>
          <div><p>{item.render()}</p></div>
        )}
      </div>
    );
  }

  renderSenses() {
    return (
      <div>
        <p><strong>Senses </strong>
          {this.senses.map(sense => (
            <span>{sense}, </span>
          ))}
        passive Perception {this.getSkill(skill.PERCEPTION) + 10}</p>
      </div>
    )
  }

  renderSpeed() {
    let list = [];
    let beast = this;
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
    if (this.beast.expertise.includes(skillIn)) {
      prof = Math.max(this.beast.profBonus * 2, prof);
    }
    return val + prof;
  }

  getSkillSymbol(skillIn) {
    let char = false;
    let beast = false;
    let beastExp = false;
    let redundant = false;
    let prof = 0;
    if (this.character.skills.has(skillIn)) {
      prof = this.character.profBonus;
      char = true;
    }
    if (this.beast.skills.includes(skillIn)) {
      if (this.beast.profBonus > prof) {
        beast = true;
        prof = this.beast.profBonus;
      }
      else {
        redundant = true;
      }
    }
    if (this.beast.expertise.includes(skillIn)) {
      if (this.beast.profBonus * 2 > prof) {
        beastExp = true;
        redundant = false;
        prof = this.beast.profBonus;
      }
      else {
        redundant = true;
      }
    }
    if (redundant) {
      return (<ion-icon name="refresh-circle"></ion-icon>);
    }
    if (beastExp) {
      return (<ion-icon name="add-circle"></ion-icon>);
    }
    if (beast) {
      return (<ion-icon name="add-circle-outline"></ion-icon>);
    }
    if (char) {
      return (<ion-icon name="radio-button-on"></ion-icon>);
    }
    return (<ion-icon name="radio-button-off"></ion-icon>);
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
          <td>{renderBonus(beastForm.getSkill(entry[1]))}</td>
          <th>{beastForm.getSkillSymbol(entry[1])}</th>
        </tr>
      ))}
    </table>
  )
}

var beastFuncs = new Map([
  ["blackBear", blackBear],
  ["brownBear", brownBear],
  ["direWolf", direWolf],
  ["giantOctopus", giantOctopus],
  ["giantSpider", giantSpider],
  ["giantToad", giantToad],
  ["caveBear", caveBear],
  ["giantConstrictor", giantConstrictor],
  ["polarBear", polarBear],
  ["giantElk", giantElk],
  ["hunterShark", hunterShark],
  ["saberToothedTiger", saberToothedTiger],
  ["cat", cat],
  ["deer", deer],
  ["ridingHorse", ridingHorse],
  ["wolf", wolf],
  ["dryad", dryad]
]);

function sizeSquares(sizeClass) {
  switch (sizeClass) {
    case "Tiny":
      return 2.5;
    case "Small":
      return 5;
    case "Medium":
      return 5;
    case "Large":
      return 10;
    case "Huge":
      return 15;
    case "Gargantuan":
      return 20;
    default:
      return 0;
  }
}

function renderBonus(number) {
  if (number > 0) {
    return "+" + number;
  } else {
    return "" + number;
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chr: defaultChar(),
      value: "brownBear",
      noOfSummons: 0,
      summonHP: [],
      summon: "brownBear"
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeNoOfSummons = this.changeNoOfSummons.bind(this);
    this.changeSummon = this.changeSummon.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  changeSummon(event) {
    let oldSummon = beastFuncs.get(this.state.summon)();
    let oldMaxHp = oldSummon.hp;
    let newSummon = beastFuncs.get(event.target.value)();
    let newMaxHp = newSummon.hp;
    let summonHPs = this.state.summonHP;
    let noOfSummons = this.state.noOfSummons;
    for (var i = 0; i < noOfSummons; i++) {
      if (summonHPs[i] == oldMaxHp) {
        summonHPs[i] = newMaxHp;
      }
    }
    this.setState({summon: event.target.value, summonHP: summonHPs});
  }

  changeNoOfSummons(event) {
    let num = event.target.value;
    let summon = beastFuncs.get(this.state.summon)();
    let summonHPs = [];
    for (var i = 0; i < num; i++) {
      summonHPs.push(summon.hp)
    }
    this.setState({noOfSummons: num, summonHP: summonHPs})
  }

  renderSummonHP() {
    let hps = this.state.summonHP;
    let summon = beastFuncs.get(this.state.summon)();
    let name = summon.name;
    return (
      <div>
        {hps.map((item, index) =>
          <div>
          <h3>{name} {index + 1}: {item} hp</h3>
          <button onClick={() => this.adjustSummonHP(index, -1)}>-1</button>
          <button onClick={() => this.adjustSummonHP(index, -5)}>-5</button>
          <button onClick={() => this.adjustSummonHP(index, -10)}>-10</button>
          <button onClick={() => this.resetSummonHP(index)}>Reset</button>
          </div>
        )}
      </div>
    )
  }

  adjustSummonHP(index, hp) {
    let summonHPs = this.state.summonHP;
    summonHPs[index] += hp;
    this.setState({summonHP: summonHPs});
  }

  resetSummonHP(index) {
    let summonHPs = this.state.summonHP;
    let summon = beastFuncs.get(this.state.summon)();
    summonHPs[index] = summon.hp;
    this.setState({summonHP: summonHPs});
  }

  render() {
    let chr = this.state.chr;
    let beast = beastFuncs.get(this.state.value)();
    let beastForm = new BeastForm(chr, beast);
    let summon = beastFuncs.get(this.state.summon)();

    /*
    let str = JSON.stringify(brownBear());
    beast = new Beast();
    beast.load(str);
    beastForm = new BeastForm(chr, beast);
    */

    return (
      <div className="App">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value={"cat"}>Cat (0)</option>
          <option value={"deer"}>Deer (0)</option>
          <option value={"ridingHorse"}>Riding Horse (1/4)</option>
          <option value={"wolf"}>Wolf (1/4)</option>
          <option value={"blackBear"}>Black Bear (1/2)</option>
          <option value={"brownBear"}>Brown Bear (1)</option>
          <option value={"direWolf"}>Dire Wolf (1)</option>
          <option value={"giantOctopus"}>Giant Octopus (1S)</option>
          <option value={"giantSpider"}>Giant Spider (1)</option>
          <option value={"giantToad"}>Giant Toad (1S)</option>
          <option value={"caveBear"}>Cave Bear (2)</option>
          <option value={"giantConstrictor"}>Giant Constrictor Snake (2)</option>
          <option value={"giantElk"}>Giant Elk (2)</option>
          <option value={"hunterShark"}>Hunter Shark (2)</option>
          <option value={"polarBear"}>Polar Bear (2)</option>
          <option value={"saberToothedTiger"}>Saber-Toothed Tiger (2)</option>
        </select>
        <h1>{beast.name}</h1>
        <p><em>{beast.size} {beast.type} ({sizeSquares(beast.size)} x {sizeSquares(beast.size)}ft.)</em></p>
        <p><strong>Armor Class</strong> {beast.ac}</p>
        <p><strong>Hit Points</strong> {beast.hp}</p>
        {beast.renderSpeed()}
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
          {attrTable(x => renderBonus(beastForm.getBonus(x)))}
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
        {attrTable(x => renderBonus(beastForm.getSave(x)))}
        </table>
        {beastForm.renderSenses()}
        {beast.renderFeatures()}
        <hr/>
        {beast.renderActions()}
        {skillTable(beastForm)}
        <h1>Conjure Animals</h1>
        <select value={this.state.noOfSummons} onChange={this.changeNoOfSummons}>
          <option value={0}>-</option>
          <option value={1}>1 beast (CR 2)</option>
          <option value={2}>2 beasts (CR 1)</option>
          <option value={4}>4 beasts (CR 1/2)</option>
          <option value={8}>8 beasts (CR 1/4)</option>
        </select>
        <select value={this.state.summon} onChange={this.changeSummon}>
          <option value={"wolf"}>Wolf (1/4)</option>
          <option value={"blackBear"}>Black Bear (1/2)</option>
          <option value={"brownBear"}>Brown Bear (1)</option>
          <option value={"direWolf"}>Dire Wolf (1)</option>
          <option value={"giantOctopus"}>Giant Octopus (1)</option>
          <option value={"giantSpider"}>Giant Spider (1)</option>
          <option value={"giantToad"}>Giant Toad (1)</option>
          <option value={"caveBear"}>Cave Bear (2)</option>
          <option value={"giantConstrictor"}>Giant Constrictor Snake (2)</option>
          <option value={"giantElk"}>Giant Elk (2)</option>
          <option value={"hunterShark"}>Hunter Shark (2)</option>
          <option value={"polarBear"}>Polar Bear (2)</option>
          <option value={"saberToothedTiger"}>Saber-Toothed Tiger (2)</option>
          <option value={"dryad"}>Dryad (1, Fey)</option>
        </select>
        {this.renderSummonHP()}
        <p><em>{summon.size} {summon.type} ({sizeSquares(summon.size)} x {sizeSquares(summon.size)}ft.)</em></p>
        <p><strong>Armor Class</strong> {summon.ac}</p>
        <p><strong>Max Hit Points</strong> {summon.hp}</p>
        {summon.renderSpeed()}
        <table class="center">
          <tr>
            <th>STR</th>
            <th>DEX</th>
            <th>CON</th>
            <th>INT</th>
            <th>WIS</th>
            <th>CHA</th>
          </tr>
          {attrTable(x => summon.atts.getAtt(x))}
          {attrTable(x => renderBonus(summon.atts.getBonus(x)))}
        </table>
        {summon.renderSenses()}
        {summon.renderFeatures()}
        <hr/>
        {summon.renderActions()}
      </div>
    );
  }
}

export default App;
