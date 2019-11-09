const brownBear = {
  name: "Brown Bear",
  type: 'beast',
  cr: 1,
  size: 'large',
  profBonus: 1,
  ac: 11,
  hp: 34,
  speed: 40,
  climbSpeed: 30,
  attributes: {
    str: 19,
    dex: 10,
    con: 16,
    int: 2,
    wis: 13,
    cha: 7,
  },
  features: [
    {
      name: "Keen Smell",
      description: "You have advantage on Wisdom (Perception) checks that rely on smell.",
    }
  ],
  actions: [
    {
      name: "Multiattack",
      description: "You make two attacks: one with your bite and one with your claws."
    },
    {
      name: "Bite",
      toHit: 5,
      reach: 5,
      range: 'melee',
      attack: 'weapon',
      target: "one target",
      hit: { piercing: { d8: 1, plus: 4 }},
    },
    {
      name: "Claws",
      toHit: 5,
      reach: 5,
      range: 'melee',
      attack: 'weapon',
      target: "one target",
      hit: { slashing: { d6: 2, plus: 4 }},
    }
  ]
};

export default brownBear;