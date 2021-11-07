import styled from "styled-components";
import { useState } from "react";
import Ps5Header from "../assets/console_UI/Header.png";
import { motion } from "framer-motion";
import AppArray from "./mockGameDB";
import PlayStationApps from "./playStationApps";
import Background from "./background";
import Playable from "./playable";
const PlayStationUserInterface = () => {
  const [currentApp, setCurrentApp] = useState(2);
  const [movement, setMovement] = useState(-130);

  const moveAppBar = (AppMovement) => {
    AppArray[currentApp + AppMovement].isSelected = true;
    setCurrentApp(currentApp + AppMovement);
    setMovement(movement + 130 * -AppMovement);
    AppArray[currentApp].isSelected = false;
  };

  const onKeyPressed = (e) => {
    if (e.key === "ArrowLeft" && currentApp !== 2) {
      moveAppBar(-1);
    } else if (e.key === "ArrowRight" && currentApp !== 3) {
      moveAppBar(1);
    }
  };

  return (
    <PlayStation5UI onKeyDown={onKeyPressed} tabIndex="0">
      <Background AppArray={AppArray} currentApp={currentApp}></Background>
      <Header src={Ps5Header} />
      <AppSelection>
        <motion.div
          animate={{
            x: movement,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 0.25, type: "tween" }}
        >
          <PlayStationApps items={AppArray} />
        </motion.div>
      </AppSelection>
      <Playable AppArray={AppArray} currentApp={currentApp}></Playable>
    </PlayStation5UI>
  );
};

const PlayStation5UI = styled.div`
  min-width: 1920px;
  min-height: 1080px;
  max-width: 1920px;
  max-height: 1080px;
  background: black;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.img`
  padding-top: 30px;
  width: 1800px;
  z-index: 1;
`;

const AppSelection = styled.div``;

export default PlayStationUserInterface;
