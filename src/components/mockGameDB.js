import milesMoralesIcon from "../assets/apps/spiderManMilesMorales/icon.png";
import milesMoralesLogo from "../assets/apps/spiderManMilesMorales/logo.png";
import ghostsOfTsushimaIcon from "../assets/apps/ghostOfTsushima/icon.png";
import ghostsOfTsushimaLogo from "../assets/apps/ghostOfTsushima/logo.png";
import playStationStoreIcon from "../assets/console_UI/PSStore.png";
import playStationExploreIcon from "../assets/console_UI/PSExplore.png";
//import NBA2k22Logo from "../assets/apps/nba2k21/logo.png";
import NBA2k22Icon from "../assets/apps/nba2k21/icon.png";

const AppArray = [
  {
    nameGeneric: "PlayStation Store",
    gameType: null,
    gameIcon: playStationStoreIcon,
    gameLogo: null,
    isGame: false,
    isSelected: false,
  },
  {
    nameGeneric: "Explore",
    gameType: null,
    gameIcon: playStationExploreIcon,
    gameLogo: null,
    isGame: false,
    isSelected: true,
  },
  {
    nameGeneric: "Marvel's Spider-Man: Miles Morale",
    gameType: "PS5",
    gameIcon: milesMoralesIcon,
    gameLogo: milesMoralesLogo,
    isGame: true,
    isSelected: false,
  },
  {
    nameGeneric: "Ghost's of Tsushima",
    gameType: "PS4",
    gameIcon: ghostsOfTsushimaIcon,
    gameLogo: ghostsOfTsushimaLogo,
    isGame: true,
    isSelected: false,
  },
  {
    nameGeneric: "Marvel's Spider-Man: Miles Moral",
    gameType: "PS5",
    gameIcon: milesMoralesIcon,
    gameLogo: milesMoralesLogo,
    isGame: true,
    isSelected: false,
  },
  {
    nameGeneric: "Marvel's Spider-Man: Miles Mora",
    gameType: "PS5",
    gameIcon: milesMoralesIcon,
    gameLogo: milesMoralesLogo,
    isGame: true,
    isSelected: false,
  },
  {
    nameGeneric: "Marvel's Spider-Man: Miles Mor",
    gameType: "PS5",
    gameIcon: milesMoralesIcon,
    gameLogo: milesMoralesLogo,
    isGame: true,
    isSelected: false,
  },
  {
    nameGeneric: "Marvel's Spider-Man: Miles M",
    gameType: "PS5",
    gameIcon: milesMoralesIcon,
    gameLogo: milesMoralesLogo,
    isGame: true,
    isSelected: false,
  },
  {
    nameGeneric: "Marvel's Spider-Man: Miles Morales",
    gameType: "PS5",
    gameIcon: milesMoralesIcon,
    gameLogo: milesMoralesLogo,
    isGame: true,
    isSelected: false,
  },
  {
    nameGeneric: "Marvel's Spider-Man: Miles",
    gameType: "PS5",
    gameIcon: milesMoralesIcon,
    gameLogo: milesMoralesLogo,
    isGame: true,
    isSelected: false,
  },
  {
    nameGeneric: "Marvel's Spider-Man: Miles Mo",
    gameType: "PS5",
    gameIcon: milesMoralesIcon,
    gameLogo: milesMoralesLogo,
    isGame: true,
    isSelected: false,
  },
];

export default AppArray;

/* 
If this were a more concise prototype, i.e I had more time and was working with
a group of people on this, I'd turn this file into an axios call that got it's data
from an official PS server. 

What'd be really cool is to make a front end site where users from the team's we're designing prototypes for
can add and edit app images/other things, and automatically update the back end DB array.

It'd prob increase the ability for teams across playstation to be able to see how our prototype looks in specific 
circumstances. 
*/