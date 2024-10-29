import styled from "styled-components";
import Header from "../components/Header";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #2c2c2c;
`;

const Main = () => {
  return (
    <MainContainer>
      <h1>안녕하세요</h1>
      {/* <Header></Header> */}
    </MainContainer>
  );
};

export default Main;
