import styled, { useTheme } from "styled-components";
import logo from "../assets/images/top_logo.png";
import Icons from "../assets/icons/Icons";

const HeaderContainer = styled.div`
  width: 100%;
  height: 22vh;
  min-height: 120px;
  background-color: ${(props) => props.theme.primary};
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
  cursor: pointer;

  > p {
    margin: 0 4px;
    font-size: 12px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    white-space: nowrap;
  }

  > select {
    --custom-background: black;
  }
`;

const Header = ({ setSelectedTheme }) => {
  const theme = useTheme();
  console.log("Header received setSelectedTheme:", setSelectedTheme);
  const toggleTheme = () => {
    const newTheme = theme.campus === "asan" ? "cheonan" : "asan";
    setSelectedTheme(newTheme);
    localStorage.setItem("campus", newTheme);
  };
  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={logo} alt="Hoseo-University Logo" />
        <LocalChoice onClick={toggleTheme}>
          <p>호서대학교 {theme.campus === "asan" ? "아산" : "천안"}캠퍼스</p>
          <Icons.ChangeButton />
        </LocalChoice>
      </HeaderLogo>
    </HeaderContainer>
  );
};

export default Header;
