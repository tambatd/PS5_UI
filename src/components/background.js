import styled, { keyframes } from "styled-components";

const Background = (props) => {
  return (
    <BackgroundImage
      src={props.AppArray[props.currentApp].gameBG}
    ></BackgroundImage>
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

const BackgroundImage = styled.img`
  width: 1920px;
  height: 1080px;
  position: absolute;
  z-index: 0;
  animation-name: ${FadeInAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: initial;
`;
export default Background;
