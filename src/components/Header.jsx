import styled from "styled-components";
import logo from "../assets/images/top_logo.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 22vh;
  min-height: 120px;
  background-color: #a51622;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  padding: 26px 24px;
`;

const HeaderLogo = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;

  > img {
    width: 116px;
    height: 67px;
  }
`;

const LocalChoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 12px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    white-space: nowrap;
  }

  > select {
    --custom-background: black;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={logo} alt="Hoseo-University Logo" />
        <LocalChoice>
          <p>호서대학교 아산캠퍼스</p>
          {/* <select>
            <option value="asan">아산캠퍼스</option>
            <option value="cheonan">천안캠퍼스</option>
          </select> */}
        </LocalChoice>
      </HeaderLogo>
    </HeaderContainer>
  );
};

export default Header;
