import PlayStationApp from "./playstationApp";
import styled from "styled-components";

const PlayStationApps = ({ items }) => {
  return (
    <AppSelection>
      {items.map((App, index) => (
        <PlayStationApp
          key={index}
          logo={App.gameIcon}
          active={App.isSelected}
          gameType={App.gameType}
          nameGeneric={App.nameGeneric}
        />
      ))}
    </AppSelection>
  );
};

const AppSelection = styled.div`
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
