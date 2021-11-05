import styled, { keyframes } from "styled-components";
import overlay from "../assets/console_UI/overflow_button.png";
import play_game from "../assets/console_UI/play_game.png";

const Playable = (props) => {
  return (
    <PlayableDiv>
      <Logo src={props.AppArray[props.currentApp].gameLogo} />
      <Subtext>{props.AppArray[props.currentApp].subText}</Subtext>
      <Buttons>
        <PlaygameButton src={play_game}></PlaygameButton>
        <OverflowButton src={overlay}></OverflowButton>
      </Buttons>
    </PlayableDiv>
  );
};

const FadeInAnimation = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const PlayableDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 0;
  width: 1700px;
  animation-name: ${FadeInAnimation};
  animation-duration: 0.5s;
  align-items: flex-start;
  justify-content: flex-end;
  height: 550px;
`;

const Logo = styled.img`
  height: 235px;
  width: auto;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const PlaygameButton = styled.img`
  height: 75px;
  width: auto;
`;

const OverflowButton = styled.img`
  height: 75px;
  width: auto;
`;

const Subtext = styled.p`
  max-width: 775px;
  font-size: 30px;
  color: #8f8f90;
  margin-top: 45px;
  margin-bottom: 60px;
`;

export default Playable;
