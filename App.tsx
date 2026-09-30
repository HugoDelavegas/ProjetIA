import { useState } from "react";

type Platform =
  | "PlayStation 2"
  | "Xbox"
  | "GameCube"
  | "PC"
  | "Game Boy Advance"
  | "PlayStation 3"
  | "Xbox 360"
  | "Nintendo DS"
  | "Wii"
  | "PlayStation 4"
  | "Xbox One"
  | "Nintendo Switch"
  | "PlayStation 5"
  | "Xbox Series X"
  | "iOS / Android"
  | "PlayStation Portable";

interface Game {
  id: number;
  title: string;
  year: number;
  platform: Platform;
  genre: string;
  description: string;
  howToPlay: string;
  players: string;
  cover: string;
}

const PLATFORM_COLORS: Record<Platform, string> = {
  "PlayStation 2": "#0070d1",
  Xbox: "#52b043",
  GameCube: "#6a0dad",
  PC: "#cccccc",
  "Game Boy Advance": "#8b00ff",
  "PlayStation Portable": "#003087",
  "Nintendo DS": "#e4000f",
  "PlayStation 3": "#003791",
  "Xbox 360": "#52b043",
  Wii: "#c0c0c0",
  "PlayStation 4": "#003791",
  "Xbox One": "#107c10",
  "Nintendo Switch": "#e4000f",
  "PlayStation 5": "#003791",
  "Xbox Series X": "#107c10",
  "iOS / Android": "#ff9500",
};

const GAMES: Game[] = [
  {
    id: 1,
    title: "Tony Hawk's Pro Skater 2",
    year: 2000,
    platform: "PlayStation 2",
    genre: "Sport / Skate",
    description:
      "Le jeu de skate qui a tout changé. Enchaînez des tricks dans des environnements iconiques comme le Hangar ou la School. Bande-son légendaire avec Rage Against the Machine, Dead Kennedys, Anthrax.",
    howToPlay:
      "Utilisez les boutons pour sauter, grinder, grab et flip. Combinez les tricks pour multiplier votre score. Remplissez la jauge SPECIAL pour accéder aux tricks surpuissants. Completez les objectifs de chaque niveau.",
    players: "1-2 joueurs",
    cover:
      "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Grand Theft Auto III",
    year: 2001,
    platform: "PlayStation 2",
    genre: "Action / Monde ouvert",
    description:
      "La révolution du monde ouvert 3D. Liberty City, une métropole corrompue inspirée de New York. Claude, muet et implacable, gravit les échelons du crime organisé dans une ville vivante et dangereuse.",
    howToPlay:
      "Explorez Liberty City librement à pied ou en véhicule. Accomplissez des missions pour les familles criminelles. Volez des voitures, fuyez la police (étoiles 1 à 6). La liberté totale de choix est au cœur du gameplay.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Halo: Combat Evolved",
    year: 2001,
    platform: "Xbox",
    genre: "FPS",
    description:
      "Master Chief débarque sur un anneau mystérieux alien appelé Halo. Le FPS qui a prouvé que la console pouvait rivaliser avec le PC. Gunplay exceptionnel, IA ennemie intelligente, co-op 2 joueurs.",
    howToPlay:
      "Explorez les environnements avec votre armure MJOLNIR. Gérez deux armes simultanément, utilisez grenades et véhicules. Affrontez les Covenants et les Flood. Le bouclier se régénère automatiquement si vous vous abritez.",
    players: "1-2 joueurs (co-op), 2-16 (multijoueur local)",
    cover:
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Kingdom Hearts",
    year: 2002,
    platform: "PlayStation 2",
    genre: "Action-RPG",
    description:
      "La rencontre improbable entre Square Enix et Disney. Sora parcourt des mondes inspirés des films Disney avec Donald et Dingo pour combattre les Sans-cœur et retrouver ses amis disparus.",
    howToPlay:
      "Combattez en temps réel à l'épée avec Sora. Gérez vos alliés Donald et Dingo via un menu IA. Utilisez la magie (Feu, Blizzard, Tonnerre). Invocations de personnages Disney pour des attaques spéciales.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "Counter-Strike 1.6",
    year: 2003,
    platform: "PC",
    genre: "FPS Tactique",
    description:
      "Le FPS multijoueur qui a défini l'eSport compétitif. Terroristes contre Anti-terroristes. Plantez ou désamorcez la bombe, sauvez les otages. Chaque balle compte, il n'y a pas de respawn.",
    howToPlay:
      "Achetez armes et équipements en début de round avec votre argent. Communiquez avec votre équipe. Visez la tête pour les one-shots. Gérez l'économie sur plusieurs rounds. La mort est définitive jusqu'au prochain round.",
    players: "2-32 joueurs en ligne",
    cover:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 6,
    title: "World of Warcraft",
    year: 2004,
    platform: "PC",
    genre: "MMORPG",
    description:
      "L'MMORPG qui a tout changé. Azeroth, un monde fantastique peuplé de millions de joueurs. Guildes, raids épiques, PvP, crafting — WoW a défini une génération entière de joueurs.",
    howToPlay:
      "Créez votre personnage (race + classe). Accomplez des quêtes pour gagner de l'expérience et de l'équipement. Rejoignez une guilde pour les donjons et raids. Le level cap est atteint après des dizaines d'heures de jeu.",
    players: "Massivement multijoueur en ligne",
    cover:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 7,
    title: "God of War",
    year: 2005,
    platform: "PlayStation 2",
    genre: "Action / Hack & Slash",
    description:
      "Kratos, le Fantôme de Sparte, cherche la vengeance contre Ares, dieu de la guerre. Une épopée grecque brutale et grandiose. Combats viscéraux, puzzles mythologiques, boss titanesques.",
    howToPlay:
      "Combattez avec les Lames du Chaos enchaînées à vos poignets. Exécutez des combos dévastateurs. Les QTE pour les finishers spectaculaires sur les boss. Collectez les Orbes rouges pour améliorer vos capacités.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 8,
    title: "The Elder Scrolls IV: Oblivion",
    year: 2006,
    platform: "Xbox 360",
    genre: "RPG / Monde ouvert",
    description:
      "Cyrodiil, la province impériale de Tamriel. Les portes d'Oblivion s'ouvrent dans tout le monde. Un RPG en monde ouvert d'une liberté absolue : soyez guerrier, mage, voleur ou tout à la fois.",
    howToPlay:
      "Explorez librement Cyrodiil. Personnalisez votre personnage avec des compétences qui évoluent en les pratiquant. Rejoignez des guildes (Guerriers, Mages, Voleurs, Assassins). Fermez les portes d'Oblivion pour sauver l'Empire.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 9,
    title: "Wii Sports",
    year: 2006,
    platform: "Wii",
    genre: "Sport / Party Game",
    description:
      "Le jeu qui a amené les grands-parents à jouer aux jeux vidéo. Tennis, bowling, golf, baseball, boxe — cinq sports contrôlés par les mouvements physiques de la Wiimote. Accessible à tous.",
    howToPlay:
      "Agitez la Wiimote pour reproduire les mouvements du sport choisi. Tennis : mimez un revers ou un coup droit. Bowling : lancez physiquement la balle. La détection de mouvement fait le reste.",
    players: "1-4 joueurs",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 10,
    title: "Call of Duty 4: Modern Warfare",
    year: 2007,
    platform: "PlayStation 3",
    genre: "FPS",
    description:
      "Le jeu qui a redéfini le FPS multijoueur en ligne. Le système de progression avec déblocage de perks, killstreaks et armes a créé une addiction absolue. La campagne solo reste une référence.",
    howToPlay:
      "Combattez dans des environnements contemporains modernes. Gagnez de l'XP pour débloquer armes, perks et killstreaks (UAV, Airstrike, Hélico). Modes : TDM, Domination, Search & Destroy.",
    players: "1 joueur, 2-18 en ligne",
    cover:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 11,
    title: "Grand Theft Auto IV",
    year: 2008,
    platform: "PlayStation 3",
    genre: "Action / Monde ouvert",
    description:
      "Niko Bellic arrive à Liberty City depuis l'Europe de l'Est, poursuivant le rêve américain. Un portrait sombre et cinématographique de l'immigration et du crime organisé.",
    howToPlay:
      "Explorez Liberty City en conduisant, en hélico ou à pied. Accomplissez missions scénarisées et activités annexes. Gérez vos relations via téléphone portable. Système de couverture en combat.",
    players: "1 joueur, 2-16 en ligne",
    cover:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 12,
    title: "Minecraft",
    year: 2009,
    platform: "PC",
    genre: "Survie / Création",
    description:
      "Un monde infini de blocs à explorer, construire et survivre. Aucun objectif imposé — récoltez ressources, construisez abris, combattez monstres la nuit. La liberté créative absolue.",
    howToPlay:
      "Mode Survie : récoltez bois, pierres, minerais. Craftez outils, armes, armures. Construisez un abri avant la nuit. Mode Créatif : ressources infinies. Combattez l'Ender Dragon pour 'finir' le jeu.",
    players: "1 joueur, jusqu'à centaines en ligne",
    cover:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 13,
    title: "Red Dead Redemption",
    year: 2010,
    platform: "PlayStation 3",
    genre: "Action / Western",
    description:
      "John Marston parcourt le Far West crépusculaire pour retrouver ses anciens complices. Un poème mélancolique sur la fin d'une époque. Grand Ouest américain saisissant.",
    howToPlay:
      "Explorez le Grand Ouest à cheval ou à pied. Acceptez des missions ou des quêtes secondaires. Chassez la faune sauvage, jouez au poker, affrontez au duel. Le système Dead Eye ralentit le temps pour viser.",
    players: "1 joueur, multijoueur en ligne",
    cover:
      "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 14,
    title: "The Elder Scrolls V: Skyrim",
    year: 2011,
    platform: "Xbox 360",
    genre: "RPG / Monde ouvert",
    description:
      "Vous êtes le Dovahkiin, seul capable de stopper Alduin le Dévoreur du Monde. Skyrim, province nordique glaciale, offre des centaines d'heures de liberté totale. Le RPG indétrônable.",
    howToPlay:
      "Développez votre personnage librement en pratiquant des compétences. Apprenez des Cris de Dragon. Explorez 5 grandes villes et des dizaines de donjons. Rejoignez des guildes : Compagnons, Collège, Thieves Guild.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 15,
    title: "Journey",
    year: 2012,
    platform: "PlayStation 3",
    genre: "Aventure / Art",
    description:
      "Un pèlerinage silencieux vers une montagne lumineuse à travers des déserts dorés. Rencontrez anonymement d'autres joueurs dans une expérience contemplative unique. Chef-d'œuvre visuel et émotionnel.",
    howToPlay:
      "Avancez vers la montagne. Volez grâce aux écharpes. Communiquez avec les autres joueurs uniquement par des sons musicaux. Découvrez les glyphes anciens pour la lore. Durée : ~2 heures.",
    players: "1-2 joueurs (co-op anonyme en ligne)",
    cover:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 16,
    title: "The Last of Us",
    year: 2013,
    platform: "PlayStation 3",
    genre: "Action / Aventure",
    description:
      "Joel et Ellie traversent les États-Unis post-apocalyptiques ravagés par un champignon parasite. Un voyage brutal et déchirant sur la survie, la paternité et ce qu'on est prêt à faire pour protéger ceux qu'on aime.",
    howToPlay:
      "Gérez ressources rares (munitions, matériaux). Combattez ou contournez les Infectés et les Pillards. Craftez équipements de survie. L'IA d'Ellie participe activement au combat.",
    players: "1 joueur, multijoueur compétitif",
    cover:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 17,
    title: "Dark Souls II",
    year: 2014,
    platform: "PlayStation 4",
    genre: "Action-RPG / Souls-like",
    description:
      "Drangleic, un royaume maudit où la mort est une porte de retour. Difficile, impitoyable, mais d'une profondeur fascinante. Chaque mort enseigne quelque chose. La maîtrise apporte une satisfaction sans égale.",
    howToPlay:
      "Explorez les niveaux interconnectés avec patience. Apprenez les patterns des ennemis. Gérez stamina en combat. Mourez, perdez vos âmes, recommencez plus fort. Coopération et invasion multijoueur.",
    players: "1 joueur, coop/invasion en ligne",
    cover:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 18,
    title: "The Witcher 3: Wild Hunt",
    year: 2015,
    platform: "PlayStation 4",
    genre: "RPG / Monde ouvert",
    description:
      "Geralt de Riv cherche sa fille adoptive Ciri à travers un monde médiéval-fantastique ravagé par la guerre. Le RPG en monde ouvert le plus primé de tous les temps. Narration magistrale.",
    howToPlay:
      "Explorez un monde ouvert immense (Velen, Novigrad, Skellige). Acceptez des contrats de monstres, résolvez des quêtes complexes. Jouez au Gwent. Préparez des potions et huiles d'alchimiste avant les combats.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 19,
    title: "Overwatch",
    year: 2016,
    platform: "PC",
    genre: "FPS / Hero Shooter",
    description:
      "Blizzard réinvente le FPS avec 21 héros uniques. Tracer, Reaper, Mercy, Pharah — chaque personnage raconte une histoire et demande une maîtrise spécifique.",
    howToPlay:
      "Formez une équipe de 6 joueurs (Tank, DPS, Healer). Utilisez les ultimes au bon moment. Adaptez votre composition selon l'équipe adverse. Objectifs : capturer/défendre des points, pousser un payload.",
    players: "2-12 joueurs en ligne",
    cover:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 20,
    title: "The Legend of Zelda: Breath of the Wild",
    year: 2017,
    platform: "Nintendo Switch",
    genre: "Action-Aventure / Open World",
    description:
      "Link se réveille après 100 ans d'amnésie dans un Hyrule en ruines. Un open world d'une liberté physique totale — grimpez n'importe quelle surface, volez avec le paravoile.",
    howToPlay:
      "Explorez Hyrule sans limite. Résolvez les 120 sanctuaires. Cuisinez des plats pour vous soigner. Les armes se cassent — gérez votre inventaire. Affrontez Ganon quand vous vous sentez prêt.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 21,
    title: "God of War (2018)",
    year: 2018,
    platform: "PlayStation 4",
    genre: "Action-Aventure",
    description:
      "Kratos et son fils Atreus dispersent les cendres de la mère sur le plus haut sommet des Neuf Royaumes nordiques. Un reboot bouleversant — brutal mais profondément humain. Plan-séquence intégral.",
    howToPlay:
      "Combattez avec la Hache Léviathan lancée/rappelée et les Lames du Chaos. Dirigez Atreus (flèches, distractions). Explorez les royaumes interconnectés. Améliorez armures et armes avec ressources craftées.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 22,
    title: "Red Dead Redemption 2",
    year: 2018,
    platform: "PlayStation 4",
    genre: "Action / Western",
    description:
      "Arthur Morgan, hors-la-loi au cœur du gang Van der Linde, vit les derniers jours du Far West sauvage en 1899. Chef-d'œuvre de narration et de détails. Le monde vivant le plus ambitieux jamais créé.",
    howToPlay:
      "Explorez l'Amérique du début du XXe siècle à cheval. Chassez, pêchez, jouez au poker. Gérez l'honneur (Noble/Déshonorant). Votre cheval est votre partenaire — nourrissez-le et nettoyez-le.",
    players: "1 joueur, multijoueur Red Dead Online",
    cover:
      "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 23,
    title: "Death Stranding",
    year: 2019,
    platform: "PlayStation 4",
    genre: "Action / Livraison",
    description:
      "Sam Porter Bridges reconnecte une Amérique fracturée en livrant des colis. Hideo Kojima subvertit tous les codes du jeu vidéo. La connexion comme thème central.",
    howToPlay:
      "Planifiez vos itinéraires et équilibrez votre charge. Gérez stamina, terrain, pluie chronogène et Échoués (BT). Construisez des routes et ziplines que les autres joueurs verront dans leur monde.",
    players: "1 joueur (monde partagé asynchrone)",
    cover:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 24,
    title: "Cyberpunk 2077",
    year: 2020,
    platform: "PlayStation 5",
    genre: "RPG / Action",
    description:
      "Night City, mégapole nocturne et cyberpunk. V, mercenaire, se retrouve avec la conscience de Johnny Silverhand dans la tête. Un RPG d'action dans un futur dystopique saturé de néons.",
    howToPlay:
      "Choisissez votre build (Réflexes/Technique/Intelligence/Corps). Hackez les ennemis et l'environnement, combattez à distance ou corps à corps. Les choix de dialogue impactent le monde et la fin.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 25,
    title: "Returnal",
    year: 2021,
    platform: "PlayStation 5",
    genre: "Roguelite / TPS",
    description:
      "Selene Vassos s'écrase sur la planète Atropos et revit sa mort en boucle. Roguelite ultra-difficile exploitant le DualSense (résistance des gâchettes, retour haptique).",
    howToPlay:
      "Évitez les patterns de balles ennemis en esquivant. Chaque mort remet les armes à zéro — seuls quelques éléments persistent. Les armes ont des traits aléatoires à découvrir. Boss monumentaux.",
    players: "1-2 joueurs (co-op en ligne)",
    cover:
      "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 26,
    title: "Elden Ring",
    year: 2022,
    platform: "PlayStation 5",
    genre: "Action-RPG / Souls-like",
    description:
      "FromSoftware rencontre George R.R. Martin. Les Terres Intermédiaires, un royaume ouvert d'une beauté crépusculaire. Devenez le Seigneur de l'Anneau en affrontant des boss légendaires.",
    howToPlay:
      "Explorez librement à cheval (Torrent). Combattez avec patience : parez, esquivez, attaquez dans les fenêtres. Construisez votre build (Force, Dextérité, Intelligence, Foi, Arcane). Co-op et invasion en ligne.",
    players: "1 joueur, co-op/invasion en ligne",
    cover:
      "https://images.unsplash.com/photo-1534434426633-e7e4e19f8e69?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 27,
    title: "The Legend of Zelda: Tears of the Kingdom",
    year: 2023,
    platform: "Nintendo Switch",
    genre: "Action-Aventure",
    description:
      "Hyrule s'étend vers le ciel et les profondeurs. Link acquiert des pouvoirs fondamentaux — Ultrason, Amalgame, Emprise, Rétrospective — permettant une liberté de création sans précédent.",
    howToPlay:
      "Amalgamez des objets pour créer véhicules, armes et solutions inédites. Explorez 3 couches : îles célestes, surface, profondeurs. La physique sandbox vous permet de résoudre chaque problème à votre façon.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 28,
    title: "Astro Bot",
    year: 2024,
    platform: "PlayStation 5",
    genre: "Plateforme 3D",
    description:
      "Astro Bot sauve des Bots perdus dans l'univers à travers des niveaux célébrant l'histoire de PlayStation. Team Asobi signe le jeu de plateforme 3D le plus inventif depuis des années.",
    howToPlay:
      "Courez, sautez, planez et utilisez les capacités offertes par chaque niveau. Le DualSense vibre et résiste selon les matériaux. Trouvez les Bots cachés pour débloquer des bonus. Boss créatifs.",
    players: "1 joueur",
    cover:
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 29,
    title: "Monster Hunter Wilds",
    year: 2025,
    platform: "PlayStation 5",
    genre: "Action / Chasse",
    description:
      "La série Monster Hunter atteint un nouveau sommet. Les Terres Sauvages, un écosystème vivant où les monstres migrent. Chasse épique, crafting profond, co-op 4 joueurs fluide.",
    howToPlay:
      "Traque les monstres dans des environnements dynamiques. Choisissez parmi 14 types d'armes radicalement différents. Récoltez matériaux sur les carcasses pour crafter armures supérieures. Coopérez à 4.",
    players: "1-4 joueurs co-op en ligne",
    cover:
      "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 30,
    title: "Grand Theft Auto VI",
    year: 2026,
    platform: "PlayStation 5",
    genre: "Action / Monde ouvert",
    description:
      "Le retour de Vice City. Lucia et Jason, un duo de criminels en fuite, dans un État de Leonida ultra-détaillé. Rockstar repousse une fois de plus les limites du monde ouvert.",
    howToPlay:
      "Explorez un monde ouvert générationnel avec deux protagonistes jouables. Accomplissez des missions et braquages planifiés. Conduisez, naviguez, pilotez dans une Floride fictive grouillant de vie.",
    players: "1 joueur, multijoueur en ligne",
    cover:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300&fit=crop&auto=format",
  },
];

const ALL_YEARS = [...new Set(GAMES.map((g) => g.year))].sort((a, b) => a - b);
const ALL_PLATFORMS = [...new Set(GAMES.map((g) => g.platform))].sort();

type Tab = "description" | "howtoplay" | "info";

function GameCard({ game }: { game: Game }) {
  const [activeTab, setActiveTab] = useState<Tab>("description");
  const color = PLATFORM_COLORS[game.platform];

  return (
    <div className="game-card rounded-none p-0 overflow-hidden">
      <div className="relative h-32 overflow-hidden">
        <img
          src={game.cover}
          alt={game.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent" />
        <div className="absolute bottom-2 left-3">
          <span
            className="platform-tag text-xs"
            style={{ color, borderColor: color }}
          >
            {game.platform}
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <span
            className="pixel-font text-[8px] bg-black/70 px-2 py-1"
            style={{ color }}
          >
            {game.genre}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="pixel-font text-[10px] text-white mb-3 leading-relaxed">
          {game.title}
        </h3>

        <div className="flex gap-0 mb-3 border-b border-[#1e1e3a]">
          {(["description", "howtoplay", "info"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`mono-font text-xs px-3 py-1 transition-colors cursor-pointer ${
                activeTab === tab
                  ? "tab-active text-[#00ff41]"
                  : "text-[#888899] hover:text-white"
              }`}
            >
              {tab === "description"
                ? "INFO"
                : tab === "howtoplay"
                  ? "JOUER"
                  : "STATS"}
            </button>
          ))}
        </div>

        <div className="crt-font text-lg leading-snug text-[#cccccc] min-h-[80px]">
          {activeTab === "description" && <p>{game.description}</p>}
          {activeTab === "howtoplay" && <p>{game.howToPlay}</p>}
          {activeTab === "info" && (
            <div className="space-y-1">
              {[
                ["ANNÉE", game.year, "#00ff41"],
                ["PLATFORM", game.platform, color],
                ["GENRE", game.genre, null],
                ["JOUEURS", game.players, null],
              ].map(([label, value, col]) => (
                <div key={label as string} className="flex gap-2">
                  <span className="text-[#888899] mono-font text-sm w-20">
                    {label as string}
                  </span>
                  <span style={col ? { color: col as string } : {}}>
                    {value as string}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function YearSection({ year, games }: { year: number; games: Game[] }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div className="timeline-line h-12 shrink-0" />
        <div>
          <div className="year-badge">{year}</div>
          <p className="crt-font text-[#888899] text-lg mt-1">
            {games.length} jeu{games.length > 1 ? "x" : ""} répertorié
            {games.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ml-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | "all">(
    "all",
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = GAMES.filter((game) => {
    const matchesPlatform =
      selectedPlatform === "all" || game.platform === selectedPlatform;
    const matchesSearch =
      searchQuery === "" ||
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesSearch;
  });

  const gamesByYear = ALL_YEARS.reduce<Record<number, Game[]>>((acc, year) => {
    const yearGames = filteredGames.filter((g) => g.year === year);
    if (yearGames.length > 0) acc[year] = yearGames;
    return acc;
  }, {});

  return (
    <div className="crt-screen min-h-screen bg-[#0a0a0f]">
      <header className="border-b border-[#1e1e3a] px-6 py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff4108] via-transparent to-[#ff00ff08]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="pixel-font text-[8px] text-[#00ff41] border border-[#00ff41] px-2 py-1">
                INSERT COIN
              </span>
              <span className="neon-pink pixel-font text-[8px]">★ ★ ★</span>
            </div>
            <h1 className="pixel-font text-xl md:text-3xl neon-green leading-relaxed">
              RETRO GAME VAULT
            </h1>
            <p className="crt-font text-2xl text-[#888899] cursor-blink">
              Chronique des jeux vidéo 2000 — 2026
            </p>
          </div>
          <div className="flex gap-6 mt-4 flex-wrap">
            <div className="mono-font text-sm">
              <span className="text-[#888899]">JEUX: </span>
              <span className="neon-cyan">{GAMES.length}</span>
            </div>
            <div className="mono-font text-sm">
              <span className="text-[#888899]">ANNÉES: </span>
              <span className="neon-cyan">
                {ALL_YEARS[0]} – {ALL_YEARS[ALL_YEARS.length - 1]}
              </span>
            </div>
            <div className="mono-font text-sm">
              <span className="text-[#888899]">PLATEFORMES: </span>
              <span className="neon-cyan">{ALL_PLATFORMS.length}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="border-b border-[#1e1e3a] px-6 py-4 bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-sm">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 neon-green mono-font text-sm">
              ▶
            </span>
            <input
              type="text"
              placeholder="RECHERCHER UN JEU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0f0f1a] border border-[#1e1e3a] text-white mono-font text-sm px-4 py-2 pl-8 focus:outline-none focus:border-[#00ff41] placeholder:text-[#444455] transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedPlatform("all")}
              className={`pixel-font text-[8px] px-3 py-2 border transition-all cursor-pointer ${
                selectedPlatform === "all"
                  ? "border-[#00ff41] text-[#00ff41] bg-[#00ff4112]"
                  : "border-[#1e1e3a] text-[#888899] hover:border-[#444455]"
              }`}
            >
              ALL
            </button>
            {ALL_PLATFORMS.map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform as Platform)}
                className="mono-font text-xs px-3 py-2 border transition-all cursor-pointer text-[#888899] border-[#1e1e3a] hover:border-[#444455]"
                style={
                  selectedPlatform === platform
                    ? {
                        borderColor: PLATFORM_COLORS[platform as Platform],
                        backgroundColor: PLATFORM_COLORS[platform as Platform],
                        color: "#0a0a0f",
                      }
                    : { borderColor: "#1e1e3a" }
                }
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {Object.keys(gamesByYear).length === 0 ? (
          <div className="text-center py-20">
            <p className="pixel-font text-[10px] text-[#888899]">
              AUCUN RÉSULTAT
            </p>
            <p className="crt-font text-xl text-[#444455] mt-4">
              Modifiez vos filtres de recherche
            </p>
          </div>
        ) : (
          Object.entries(gamesByYear).map(([year, games]) => (
            <YearSection key={year} year={parseInt(year)} games={games} />
          ))
        )}
      </main>

      <footer className="border-t border-[#1e1e3a] px-6 py-6 text-center">
        <p className="pixel-font text-[8px] text-[#444455]">
          © RETRO GAME VAULT — GAME OVER? INSERT COIN TO CONTINUE
        </p>
        <div className="flex justify-center gap-4 mt-2">
          {["▲", "▼", "◀", "▶", "A", "B"].map((k, i) => (
            <span key={i} className="mono-font text-xs text-[#333344]">
              {k}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}
