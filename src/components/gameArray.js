import App from "./playstationApp";
import styled from "styled-components";

const PlayStationApps = ({ items }) => {
  return (
    <AppSelection>
      {items.map((PlayStationApp, index) => (
        <App
          key={index}
          logo={PlayStationApp.gameIcon}
          active={PlayStationApp.isSelected}
          gameType={PlayStationApp.gameType}
          nameGeneric={PlayStationApp.nameGeneric}
        />
      ))}
    </AppSelection>
  );
};

const AppSelection = styled.div`
  z-index: 1;
  display: flex;
  width: 1920px;
  padding: 40px;
  padding-right: 0px;
  padding-left: 30px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
  align-items: flex-start;
`;

export default PlayStationApps;
