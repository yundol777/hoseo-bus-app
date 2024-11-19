import styled from "styled-components";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import shuttle from "../assets/images/shuttle.png";
import num1000 from "../assets/images/1000.png";
import sh5 from "../assets/images/sh5.png";
import num810 from "../assets/images/810.png";
import num820 from "../assets/images/820.png";
import num821 from "../assets/images/821.png";
import num822 from "../assets/images/822.png";

const BusRouteContainer = styled.div`
  min-height: 100vh;
  background-color: #f7f7f7;
  font-family: "Noto Sans", "Apple SD Gothic Neo", sans-serif;

  display: flex;
  flex-direction: column;
`;

const RouteHeader = styled.div`
  margin-top: 30px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;

  > a {
    text-decoration: none;
    font-size: 0.75rem;
    color: #a8a8a8;
    &:visited,
    &:active,
    &:focus {
      color: #a8a8a8; /* 링크의 모든 상태에서 색상 유지 */
    }

    &:hover {
      color: #7f7f7f;
    }
  }

  > h2 {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 900;
    color: #7f7f7f;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #cccccc;
  margin: 6px 0;
`;

const RouteMain = styled.div`
  padding: 0.75rem 24px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const Bus = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 20px;
  margin-top: 4px;
  border-radius: 5px;
  color: white;
  background-color: ${(props) =>
    props.busName === "셔틀버스"
      ? "#A51622"
      : props.busName === "1000번"
      ? "#6782EA"
      : props.busName === "순환5번"
      ? "#ECAB56"
      : "#3CAB5D"};
  font-size: 12px;
  font-weight: 900;
`;

const RouteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 10px;
  padding: 1rem 6px;
`;

const BusRoute = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  return (
    <BusRouteContainer>
      <Header />
      <RouteHeader>
        <Link onClick={handleBack}>&lt; 뒤로가기</Link>
        <h2>버스 노선 모아보기</h2>
        <Divider />
      </RouteHeader>
      <RouteMain>
        <Bus busName="셔틀버스">셔틀버스</Bus>
        <RouteContainer>
          <img src={shuttle} alt="" />
        </RouteContainer>
        <Bus busName="1000번">1000번</Bus>
        <RouteContainer>
          <img src={num1000} alt="" />
        </RouteContainer>
        <Bus busName="순환5번">순환5번</Bus>
        <RouteContainer>
          <img src={sh5} alt="" />
        </RouteContainer>
        <Bus busName="810번">810번</Bus>
        <RouteContainer>
          <img src={num810} alt="" />
        </RouteContainer>
        <Bus busName="820번">820번</Bus>
        <RouteContainer>
          <img src={num820} alt="" />
        </RouteContainer>
        <Bus busName="821번">821번</Bus>
        <RouteContainer>
          <img src={num821} alt="" />
        </RouteContainer>
        <Bus busName="822번">822번</Bus>
        <RouteContainer>
          <img src={num822} alt="" />
        </RouteContainer>
      </RouteMain>
    </BusRouteContainer>
  );
};

export default BusRoute;
