export const renderFraction = ( value ) => {
  switch (value) {
    case 0.5:
      return '1/2';
    case 0.25:
      return '1/4';
    case 0.125:
      return '1/8';
    default:
      return `${value}`
  }
};

export const capitalise = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const renderBonus = ( bonus ) => {
  if (bonus > 0) {
    return `+${bonus}`;
  } else if (bonus < 0) {
    return `-${bonus}`;
  } else {
    return `${bonus}`;
  }
};

export const skillLongNames = {
  acrobatics: 'Acrobatics',
  animalHandling: 'Animal Handling',
  arcana: 'Arcana',
  athletics: 'Athletics',
  deception: 'Deception',
  history: 'History',
  insight: 'Insight',
  intimidation: 'Intimidation',
  investigation: 'Investigation',
  medicine: 'Medicine',
  nature: 'Nature',
  perception: 'Perception',
  performance: 'Performance',
  persuasion: 'Persuasion',
  religion: 'Religion',
  sleightOfHand: 'Sleight of Hand',
  stealth: 'Stealth',
  survival: 'Survival',
};