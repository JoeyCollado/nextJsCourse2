
export type Game = {
    id: string;
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    rating: number;
    developer: string;
    publisher: string;
    releaseDate: string;
    platforms: string[];
    gameplayMechanics: string[];
    story: string;
    setting: string;
    combatStyle: string;
    worldDesign: string;
    playerChoiceImpact: boolean;
    multiplayer: boolean;
    expansionContent: string[];
    difficulty: string;
    progressionSystem: string;
  };
  
  export const games: Game[] = [
    {
      id: "1",
      slug: "elden-ring",
      title: "Elden Ring",
      category: "action-rpg",
      description:
        "Elden Ring is an open-world action RPG developed by FromSoftware and published by Bandai Namco Entertainment. Known for its intricate lore and vast, interconnected world, it offers players an unforgettable adventure where every choice matters.",
      image:
        "https://assetsio.gnwcdn.com/elden-ring-walkthrough-8042-1647018411119.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      rating: 9.5,
      developer: "FromSoftware",
      publisher: "Bandai Namco Entertainment",
      releaseDate: "February 25, 2022",
      platforms: [
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
        "PC",
      ],
      gameplayMechanics: [
        "Soul-based combat",
        "Open-world exploration",
        "Staggered enemy difficulty",
        "Crafting and upgrading gear",
        "Mount riding",
      ],
      story:
        "The story centers around the player character, the Tarnished, who is tasked with seeking the shattered Elden Ring and restoring the world to its former glory. Along the journey, players will encounter powerful demigods and discover hidden secrets about the universe.",
      setting:
        "The world of the Lands Between, a desolate yet mystical realm filled with ruins, dangerous creatures, and ancient secrets.",
      combatStyle:
        "The combat is fast-paced and tactical, focused on stamina management, dodging, and precise strikes. It includes both melee and ranged combat.",
      worldDesign:
        "The world is seamlessly connected with vast open fields, intricate dungeons, and varied environments such as rolling hills, haunted forests, and towering castles.",
      playerChoiceImpact: true,
      multiplayer: true,
      expansionContent: ["Shadow of the Erdtree (upcoming)"],
      difficulty:
        "Very challenging, requiring patience and skillful learning of enemy patterns.",
      progressionSystem:
        "Character progression is based on leveling up through the accumulation of Souls, which can be spent on upgrading stats like strength, dexterity, intelligence, etc.",
    },
    {
      id: "2",
      slug: "god-of-war",
      title: "God of War",
      category: "action-adventure",
      description:
        "God of War blends visceral action with an emotional story set in the world of Norse mythology. It redefines the franchise with a more personal journey for Kratos, taking him on an adventure alongside his son, Atreus, through a beautiful yet dangerous world.",
      image:
        "https://www.superjumpmagazine.com/content/images/size/w2000/2022/04/god-of-war-2018-featured-image.jpg",
      rating: 9.8,
      developer: "Santa Monica Studio",
      publisher: "Sony Interactive Entertainment",
      releaseDate: "April 20, 2018",
      platforms: ["PlayStation 4", "PlayStation 5"],
      gameplayMechanics: [
        "Third-person action combat",
        "Puzzle-solving",
        "Weapon upgrade system",
        "Dual character control (Kratos and Atreus)",
        "RPG elements like skill trees and crafting",
      ],
      story:
        "Kratos, the God of War, embarks on a journey with his son, Atreus, to fulfill the final wish of his deceased wife – to scatter her ashes at the highest peak of the Nine Realms. Along the way, they confront gods and monsters from Norse mythology.",
      setting:
        "The Nine Realms of Norse mythology, each realm unique with different landscapes and threats, ranging from frost-covered lands to fiery depths.",
      combatStyle:
        "Combat focuses on close-range, brutal hand-to-hand and weapon attacks, with Kratos wielding the Leviathan Axe and Blades of Chaos, complemented by Atreus’s bow and magic.",
      worldDesign:
        "The world is interconnected, with several sprawling, open-world environments. It offers exploration, puzzles, and combat encounters in a stunning, detailed setting.",
      playerChoiceImpact: false,
      multiplayer: false,
      expansionContent: ["God of War: Ragnarok"],
      difficulty:
        "Challenging combat with a focus on strategic use of abilities and quick reflexes.",
      progressionSystem:
        "Kratos and Atreus can level up and acquire new abilities. Armor sets, enchantments, and upgrades provide further customization to playstyles.",
    },
    {
      id: "3",
      slug: "the-witcher-3",
      title: "The Witcher 3: Wild Hunt",
      category: "action-rpg",
      description:
        "The Witcher 3: Wild Hunt is an expansive action RPG set in a dark fantasy world. Players control Geralt of Rivia, a monster hunter searching for his adopted daughter, while navigating a morally complex world filled with political intrigue, magical beasts, and ancient sorcery.",
      image:
        "https://sm.ign.com/t/ign_ap/preview/w/we-played-/we-played-the-witcher-3-wild-hunt-for-6-hours-ign_936e.1200.jpg",
      rating: 9.7,
      developer: "CD Projekt Red",
      publisher: "CD Projekt",
      releaseDate: "May 19, 2015",
      platforms: [
        "PlayStation 4",
        "Xbox One",
        "PC",
        "Nintendo Switch",
        "PlayStation 5",
        "Xbox Series X/S",
      ],
      gameplayMechanics: [
        "Open-world exploration",
        "Monster hunting and tracking",
        "Dialogue choices impacting outcomes",
        "Alchemy and potion brewing",
        "Gwent card game",
      ],
      story:
        "Geralt of Rivia, a seasoned Witcher, is on a quest to find his adopted daughter, Ciri, who is being pursued by the Wild Hunt, a mysterious and dangerous group. Along the way, Geralt becomes embroiled in a war between Nilfgaard and the Northern Kingdoms, facing moral dilemmas and dangerous foes.",
      setting:
        "The game is set in a richly detailed open world filled with war-torn kingdoms, ancient ruins, dark forests, and villages that tell their own stories. Each area feels alive and immersive.",
      combatStyle:
        "The combat involves a mix of swordplay and magic. Geralt uses his Witcher Signs to cast spells and his swords to defeat both human and monstrous foes. Tactical preparation is key, with signs, potions, and bombs.",
      worldDesign:
        "The world is vast and open, with diverse landscapes ranging from lush forests and swamps to barren deserts and snow-covered mountains. Every location is densely packed with quests and lore.",
      playerChoiceImpact: true,
      multiplayer: false,
      expansionContent: ["Hearts of Stone", "Blood and Wine"],
      difficulty:
        "Challenging, with enemies requiring preparation and adaptation to specific weaknesses, particularly through alchemy and magic.",
      progressionSystem:
        "Geralt's progression revolves around leveling up, acquiring new skills, crafting gear, and making choices that shape the outcome of the story. There is a wide range of combat and non-combat abilities.",
    },
    {
      id: "4",
      slug: "cyberpunk-2077",
      title: "Cyberpunk 2077",
      category: "action-rpg",
      description:
        "Cyberpunk 2077 is a futuristic RPG set in the dystopian world of Night City. Players control V, a mercenary navigating the streets filled with high-tech weaponry, corruption, and cybernetic enhancements. Despite initial criticism, the game offers deep world-building, branching storylines, and a rich narrative.",
      image: "https://cdn.mos.cms.futurecdn.net/BeyhFdCM2ugLQjX8vX7fuQ.jpg",
      rating: 7.5,
      developer: "CD Projekt Red",
      publisher: "CD Projekt",
      releaseDate: "December 10, 2020",
      platforms: [
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
        "PC",
      ],
      gameplayMechanics: [
        "First-person combat",
        "Hacking and cybernetic upgrades",
        "Choice-based dialogue",
        "Vehicle driving and combat",
        "Open-world exploration",
      ],
      story:
        "Set in Night City, players assume the role of V, a customizable protagonist, as they seek a way to remove a dangerous AI known as Johnny Silverhand from their mind. The game explores themes of identity, technology, and power, while offering players the chance to make impactful decisions.",
      setting:
        "Night City, a sprawling cyberpunk metropolis, filled with neon lights, dangerous factions, and towering skyscrapers. The world is dense and alive with various districts, each with its own culture and history.",
      combatStyle:
        "Combat is a mix of gunplay and hacking, with players able to approach fights in a variety of ways. Stealth, explosive gunfire, and cybernetic abilities are all part of the experience.",
      worldDesign:
        "The open world is vertical, densely packed with skyscrapers, alleyways, and dark corners. The setting includes a dynamic weather system and day-night cycle, which significantly impact gameplay and NPC behavior.",
      playerChoiceImpact: true,
      multiplayer: false,
      expansionContent: ["Phantom Liberty"],
      difficulty:
        "Moderate, with varying difficulty depending on the approach to combat and hacking.",
      progressionSystem:
        "Character development focuses on enhancing cyberware, weapons, and combat skills, with branching skill trees based on playstyle preferences.",
    },
  ];
  
  export const categories = [
    { slug: "action-rpg", name: "Action RPG" },
    { slug: "action-adventure", name: "Action Adventure" },
  ];
  