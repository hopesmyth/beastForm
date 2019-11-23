const polarBear = {
  name: "Polar Bear",
  type: 'beast',
  cr: 2,
  size: 'large',
  profBonus: 2,
  ac: 12,
  hp: 42,
  speed: 40,
  swimSpeed: 30,
  attributes: {
    str: 20,
    dex: 10,
    con: 16,
    int: 2,
    wis: 13,
    cha: 7,
  },
  skills: ['perception'],
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
      toHit: 7,
      reach: 5,
      range: 'melee',
      attack: 'weapon',
      target: "one target",
      hit: { piercing: { d8: 1, plus: 5 }},
    },
    {
      name: "Claws",
      toHit: 5,
      reach: 7  ,
      range: 'melee',
      attack: 'weapon',
      target: "one target",
      hit: { slashing: { d6: 2, plus: 5 }},
    }
  ]
};

export default polarBear;