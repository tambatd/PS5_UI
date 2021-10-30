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
