import styled from "styled-components";
import Header from "../components/Header";
import Board from "../components/Board";
import TimeTable from "../components/TimeTable";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
  font-family: "Noto Sans";

  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <Board />
      <TimeTable />
    </MainContainer>
  );
};

export default Main;
