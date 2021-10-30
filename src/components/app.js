import card from "../assets/console_UI/Card.png";
import styled from "styled-components";

const PlayStationApp = (props) => {
  const AppBG = styled.div`
    height: 120px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    ${props.active &&
    `
        height: 160px;
        width: 160px;
        background: url(${card});
        background-size: 160px 160px;
        transition: all 0.3s ease-out;

      `}
  `;

  const App = styled.div`
    height: 115px;
    width: 115px;
    background: url(${props.logo});
    background-size: 115px 115px;
    border-radius: 20px;
    ${props.active &&
    `
            height: 150px;
            width: 150px;
            background-size: 150px 150px;
            transition: all 0.3s ease-out;

          `}
  `;

  return (
    <AppBG>
      <App></App>
    </AppBG>
  );
};

export default PlayStationApp;
