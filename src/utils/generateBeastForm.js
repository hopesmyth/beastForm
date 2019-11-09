import {defaultBeast, defaultSaves, defaultSkills} from "../statBlocks/defaults";
import {attributeNames, skillAttributes, skillNames} from "./constants";
import getStatBonus from "./getStatBonus";

const combineAttributes = ({ beast, character }) => {
  const beastAtts = beast.attributes;
  const charAtts = character.attributes;
  return {
    str: beastAtts.str,
    dex: beastAtts.dex,
    con: beastAtts.con,
    int: charAtts.int,
    wis: charAtts.wis,
    cha: charAtts.cha,
  };
};

const combineSaves = ({ beast, character, attributes }) => {
  const beastProf = beast.profBonus;
  const beastSaves = beast.saves;
  const charProf = character.profBonus;
  const charSaves = character.saves;

  const combined = {...defaultSaves};

  attributeNames.forEach(att => {
    let saveBonus = 0;
    const beastIsProf = beastSaves.includes(att);
    const charIsProf = charSaves.includes(att);
    if (beastIsProf && charIsProf) {
      saveBonus = Math.max(beastProf, charProf);
    } else if (beastIsProf) {
      saveBonus = beastProf;
    } else if (charIsProf) {
      saveBonus = charProf;
    }
    combined[att] = getStatBonus(attributes[att]) + saveBonus;
  });

  return combined;
};

const combineSkills = ({ beast, character, attributes }) => {
  const beastProf = beast.profBonus;
  const beastSkills = beast.skills;
  const beastExpertise = beast.expertise;
  const charProf = character.profBonus;
  const charSkills = character.skills;
  const charExpertise = character.expertise;

  const combined = {...defaultSkills};

  skillNames.forEach(skill => {
    let skillBonus = 0;
    if (beastSkills.includes(skill)) {
      skillBonus = beastProf;
    }
    if (beastExpertise.includes(skill)) {
      skillBonus = beastProf * 2;
    }
    if (charSkills.includes(skill)) {
      skillBonus = Math.max(skillBonus, charProf);
    }
    if (charExpertise.includes(skill)) {
      skillBonus = Math.max(skillBonus, charProf * 2)
    }
    let baseScore = getStatBonus(attributes[skillAttributes[skill]]);
    combined[skill] = baseScore + skillBonus;
  });

  return combined;
};

const generateBeastForm = ({ beast: _beast, character }) => {
  const beast = {...defaultBeast, ..._beast};

  const attributes = combineAttributes({ beast, character });
  const saves = combineSaves({ beast, character, attributes });
  const skills = combineSkills({ beast, character, attributes });

  return {
    ...beast,
    attributes,
    saves,
    skills,
  }
};

export default generateBeastForm;