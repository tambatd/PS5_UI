import App from "./app";
import styled from "styled-components";

const PlayStationApps = ({ items }) => {
  console.log(items);
  return (
    <AppSelection>
      {items.map((PlayStationApp) => (
        <App
          key={PlayStationApp.nameGeneric}
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
