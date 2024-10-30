import styled from "styled-components";
import Header from "../components/Header";
import Board from "../components/Board";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <Board />
    </MainContainer>
  );
};

export default Main;
