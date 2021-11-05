import milesMoralesIcon from "../assets/apps/spiderManMilesMorales/icon.png";
import milesMoralesLogo from "../assets/apps/spiderManMilesMorales/logo.png";
import milesMoralesBG from "../assets/apps/spiderManMilesMorales/bg.png";

import ghostsOfTsushimaIcon from "../assets/apps/ghostOfTsushima/icon.png";
import ghostsOfTsushimaLogo from "../assets/apps/ghostOfTsushima/logo.png";
import ghostsOfTsushimaBG from "../assets/apps/ghostOfTsushima/bg.png";

import playStationStoreIcon from "../assets/console_UI/PSStore.png";
import playStationExploreIcon from "../assets/console_UI/PSExplore.png";
import NBA2k22Icon from "../assets/apps/nba2k21/icon.png";

import Destiny2Icon from "../assets/apps/destiny/icon.png";
import PSNowIcon from "../assets/console_UI/PSNow.png";
import PSLibraryIcon from "../assets/console_UI/library.png";

import PSPlusIcon from "../assets/console_UI/PSPlus.png";
import GoGIcon from "../assets/apps/GuardiansOfTheGalaxy/icon.png";
import VanguardIcon from "../assets/apps/CallOfDutyVanguard/icon.png";

const AppArray = [
  {
    nameGeneric: "PlayStation Store",
    gameType: null,
    gameIcon: playStationStoreIcon,
    gameLogo: null,
    gameBG: milesMoralesBG,
    isGame: false,
    isSelected: false,
  },
  {
    nameGeneric: "Explore",
    gameType: null,
    gameIcon: playStationExploreIcon,
    gameLogo: null,
    isGame: false,
    isSelected: false,
  },
  {
    nameGeneric: "Marvel's Spider-Man: Miles Morale",
    subText:
      "The worlds of Peter Parker and Spider-Man collide in an original action-packed story",
    gameType: "ps5",
    gameIcon: milesMoralesIcon,
    gameLogo: milesMoralesLogo,
    gameBG: milesMoralesBG,
    isGame: true,
    isSelected: true,
  },
  {
    nameGeneric: "Ghost's of Tsushima",
    gameType: "ps4",
    subText:
      "Venture beyond the battlefield to experience the ancient beauty of Tsushina",

    gameIcon: ghostsOfTsushimaIcon,
    gameLogo: ghostsOfTsushimaLogo,
    gameBG: ghostsOfTsushimaBG,
    isGame: true,
    isSelected: false,
  },
  {
    gameIcon: NBA2k22Icon,
    nameGeneric: "NBA2k22",
    gameType: "ps4",
    subText:
      "Play as the Los Angeles Clippers and take on the infamous Los Angeles Lakers",
    gameLogo: null,
    gameBG: null,
    isGame: true,
    isSelected: false,
  },
  {
    gameIcon: Destiny2Icon,
    nameGeneric: null,
    gameType: null,

    gameLogo: null,
    gameBG: null,
    isGame: true,
    isSelected: false,
  },
  {
    gameIcon: VanguardIcon,
    nameGeneric: null,
    gameType: null,

    gameLogo: null,
    gameBG: null,
    isGame: true,
    isSelected: false,
  },
  {
    gameIcon: PSPlusIcon,
    nameGeneric: null,
    gameType: null,

    gameLogo: null,
    gameBG: null,
    isGame: false,
    isSelected: false,
  },
  {
    gameIcon: PSNowIcon,
    nameGeneric: null,
    gameType: null,

    gameLogo: null,
    gameBG: null,
    isGame: false,
    isSelected: false,
  },
  {
    gameIcon: GoGIcon,
    nameGeneric: null,
    gameType: null,

    gameLogo: null,
    gameBG: null,
    isGame: true,
    isSelected: false,
  },
  {
    gameIcon: PSLibraryIcon,
    nameGeneric: null,
    gameType: null,

    gameLogo: null,
    gameBG: null,
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
