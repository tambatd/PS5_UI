import styled from "styled-components";
import { useState, useEffect } from "react";
import Ps5Header from "../assets/console_UI/Header.png";
import App from "./app";
import spiderManMilesMorales from "../assets/apps/spiderManMilesMorales/icon.png";
import ghosts from "../assets/apps/ghostOfTsushima/icon.png";
import { motion } from "framer-motion";
import AppArray from "./mockGameDB";
import PlayStationApps from "./gameArray";
const PlayStationUserInterface = () => {
  const [currentApp, setCurrentApp] = useState(1);
  const [movement, setMovement] = useState(0);

  useEffect(() => {
    console.log(currentApp);
  }, []);

  async function add() {
    setCurrentApp(currentApp + 1);
    AppArray[currentApp].isSelected = true;
  }
  async function substract() {
    setCurrentApp(currentApp - 1);
    AppArray[currentApp].isSelected = true;
  }

  const onKeyPressed = (e) => {
    if (e.key === "ArrowLeft" && currentApp != 0) {
      AppArray[currentApp - 1].isSelected = true;
      substract();
      AppArray[currentApp].isSelected = false;
      setMovement(movement + 130);
    } else if (e.key === "ArrowRight" && currentApp != 10) {
      AppArray[currentApp + 1].isSelected = true;
      add();
      AppArray[currentApp].isSelected = false;
      setMovement(movement - 130);
    }
  };

  return (
    <PlayStation5UI onKeyDown={onKeyPressed} tabIndex={0}>
      <Header src={Ps5Header} />
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
`;

export default PlayStationUserInterface;
