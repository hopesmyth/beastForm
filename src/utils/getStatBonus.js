

const getStatBonus = (stat) => {
  return Math.floor((stat - 10) / 2);
};

export default getStatBonus;