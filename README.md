# Ps5 UI

This is an example PlayStation 5 UI built in React

![Alt Text](https://github.com/tambatd/PS5_UI/blob/master/public/Ps5UI.gif?raw=true)

## Tech Stack

**Client:** React js, JavaScript, Styled Components, Framer Motion

## Installation

Install via npm

```bash
  cd ps5
  npm install
  npm run start
```

## Usage/Examples

Arrow keys can be used to move between apps. Since this app is forced into 1920x1080 you'll need to either view this on a fully 1920x1080 display, or zoom out in order to use it properly.

Additional apps/games can be added on via adding an additional object to mockGameDB.js

```javascript
 {
    nameGeneric: null,
    gameIcon: null,
    gameType: "ps4",
    gameLogo: null,
    gameBG: null,
    isGame: false,
    isSelected: false,
  },
```

From there you can increase the currentApp integer on line 29 in ps5.js to be in line with how far you'd like app selectability to be

```javascript
const onKeyPressed = (e) => {
  if (e.key === "ArrowLeft" && currentApp !== 2) {
    AppArray[currentApp - 1].isSelected = true;
    substract();
    AppArray[currentApp].isSelected = false;
    setMovement(movement + 130);
    /*line 29*/
  } else if (e.key === "ArrowRight" && currentApp !== 3) {
    AppArray[currentApp + 1].isSelected = true;
    add();
    AppArray[currentApp].isSelected = false;
    setMovement(movement - 130);
  }
};
```

## Issues

Here is a list of issues with this project

- Fade in animations only occuring once on start
- No background animation
- animations for game info and name not similar to the PS5 at all
- Using onKeyDown and not window.addEventListener("keydown", downHandler);
- Selected app icon needs to be a little bit bigger
- I used {props} as a reference instead of each value separately {AppArray, currentApp, etc.} this make it harder for people to read what props are read

## Questions you may have

#### Why Framer Motion and not pure css?

At PlayStation I'm under the assumption that an animation library exists internally for developer use. As such I decided to go with a common react animation library to save time and focus on developing the core of the app. I could have certainly done this via keyframe animation.

#### Was this difficult

Yes 🥺
