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
  switch (bonus) {
    case bonus > 0:
      return `+${bonus}`;
    case bonus < 0:
      return `-${bonus}`;
    default:
      return `${bonus}`;
  }
};