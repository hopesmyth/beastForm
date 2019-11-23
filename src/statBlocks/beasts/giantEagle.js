const giantEagle = {
  name: "Giant Eagle",
  type: 'beast',
  cr: 1,
  size: 'large',
  profBonus: 2,
  ac: 13,
  hp: 26,
  speed: 10,
  flySpeed: 80,
  attributes: {
    str: 16,
    dex: 17,
    con: 13,
    int: 8,
    wis: 14,
    cha: 10,
  },
  skills: ['perception'],
  features: [
    {
      name: "Keen Sight",
      description: "You have advantage on Wisdom (Perception) checks that rely on sight.",
    }
  ],
  actions: [
    {
      name: "Multiattack",
      description: "You make two attacks: one with your beak and one with your talons."
    },
    {
      name: "Beak",
      toHit: 5,
      reach: 5,
      range: 'melee',
      attack: 'weapon',
      target: "one target",
      hit: { piercing: { d6: 1, plus: 3 }},
    },
    {
      name: "Talons",
      toHit: 5,
      reach: 5,
      range: 'melee',
      attack: 'weapon',
      target: "one target",
      hit: { slashing: { d6: 2, plus: 3 }},
    }
  ]
};

export default giantEagle;