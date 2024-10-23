import styled from "styled-components";
import logo from "../assets/images/top_logo.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #a1131f;

  padding: 30px 40px;
`;

const HeaderLogo = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;

  > img {
    width: 110px;
  }

  > p {
    font-size: 0.6rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
    white-space: nowrap;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={logo} alt="Hoseo-University Logo" />
        <p>호서대학교 아산캠퍼스</p>
      </HeaderLogo>
    </HeaderContainer>
  );
};

export default Header;
