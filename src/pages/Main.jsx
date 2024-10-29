import styled from "styled-components";
import Header from "../components/Header";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #2c2c2c;
`;

const Main = () => {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
};

export default Main;
