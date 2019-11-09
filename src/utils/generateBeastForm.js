import {defaultBeast, defaultSaves} from "../statBlocks/defaults";
import {attributeNames} from "./constants";
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

const generateBeastForm = ({ beast: _beast, character }) => {
  const beast = {...defaultBeast, ..._beast};

  const attributes = combineAttributes({ beast, character });
  const saves = combineSaves({ beast, character, attributes });

  return {
    ...beast,
    attributes,
    saves,
  }
};

export default generateBeastForm;