import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  gap: 32px;
  justify-content: start;
  align-items: center;

  > p {
    font-size: 24px;
    font-weight: 900;
  }
`;

const Title = styled.p`
  color: #a8a8a8;
`;

const Content = styled.p`
  color: black;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>📢 공지</Title>
        <Content>
          버스 전광판 기능 테스트 중입니다. 이용에 참고해 주세요.
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Footer;
