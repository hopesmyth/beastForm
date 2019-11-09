const blackBear = {
  name: "Black Bear",
  type: 'beast',
  cr: 0.5,
  size: 'medium',
  profBonus: 1,
  ac: 11,
  hp: 34,
  speed: 40,
  climbSpeed: 30,
  attributes: {
    str: 15,
    dex: 10,
    con: 14,
    int: 2,
    wis: 12,
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
      toHit: 3,
      reach: 5,
      range: 'melee',
      attack: 'weapon',
      target: "one target",
      hit: { piercing: { d6: 1, plus: 2 }},
    },
    {
      name: "Claws",
      toHit: 3,
      reach: 5,
      range: 'melee',
      attack: 'weapon',
      target: "one target",
      hit: { slashing: { d4: 2, plus: 2 }},
    }
  ]
};

export default blackBear;