import card from "../assets/console_UI/Card.png";
import styled from "styled-components";
import ps4Image from "../assets/apps/appType/ps4.png";
import ps5Image from "../assets/apps/appType/ps5.png";

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

  const PSAppInfo = styled.div`
    display: none;
    color: white;
    text-align: left;
    font-size: 25px;
    margin: 0;
    position: absolute;
    transform: translateX(185px) translateY(-35px);
    ${props.active &&
    `
    display: flex;
    align-items: center;
          `}
  `;

  const Img = styled.img`
    height: 25px;
    width: auto;
    padding-right: 10px;
  `;

  return (
    <div>
      <AppBG>
        <App></App>
      </AppBG>

      <PSAppInfo>
        {props.gameType == "ps4" ? (
          <Img src={ps4Image} />
        ) : (
          <Img src={ps5Image} />
        )}
        {props.nameGeneric}
      </PSAppInfo>
    </div>
  );
};

export default PlayStationApp;
