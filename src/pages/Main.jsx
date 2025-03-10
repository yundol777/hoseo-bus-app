import styled from "styled-components";
import Header from "../components/Header";
import Board from "../components/Board";
import TimeTable from "../components/TimeTable";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
  font-family: "Noto Sans", "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;

  display: flex;
  flex-direction: column;
`;

const Main = ({ setSelectedTheme }) => {
  return (
    <MainContainer>
      <Header setSelectedTheme={setSelectedTheme} />
      <Board />
      <TimeTable />
    </MainContainer>
  );
};

export default Main;
