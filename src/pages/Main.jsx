import styled from "styled-components";
import Header from "../components/Header";
import Board from "../components/Board";
import TimeTable from "../components/TimeTable";
import useIsLargeScreen from "../hooks/useIsLargeScreen";
import QRGuide from "../components/QRGuide";
import Footer from "../components/Footer";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
  font-family: "Noto Sans", "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;

  display: flex;
  flex-direction: column;
`;

const BoardContainer = styled.div`
  margin: 24px auto;
  padding: 0 24px;
  width: 1440px;
  flex: 1;
  display: flex;
  gap: 24px;
`;

const Main = ({ setSelectedTheme }) => {
  const isLargeScreen = useIsLargeScreen();

  if (isLargeScreen) {
    return (
      <MainContainer>
        <Header setSelectedTheme={setSelectedTheme} />
        <BoardContainer>
          <Board />
          <QRGuide />
        </BoardContainer>
        <Footer />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Header setSelectedTheme={setSelectedTheme} />
      <Board />
      <TimeTable />
    </MainContainer>
  );
};

export default Main;
