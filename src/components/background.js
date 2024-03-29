import styled, { keyframes } from "styled-components";

const Background = ({ AppArray, currentApp }) => {
  return <BackgroundImage src={AppArray[currentApp].gameBG}></BackgroundImage>;
};

const FadeInAnimation = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const BackgroundImage = styled.img`
  width: 1920px;
  height: 1080px;
  position: absolute;
  animation-name: ${FadeInAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: initial;
`;
export default Background;
