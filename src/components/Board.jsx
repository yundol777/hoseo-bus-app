import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { timeState } from "../recoil/timeState";
import { comingBuses } from "../assets/data/busData";

const BoardContainer = styled.div`
  box-sizing: border-box;
  margin: 30px 24px;
`;

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > .date {
    font-weight: 900;
    color: #7f7f7f;
  }

  > .time {
    font-weight: 500;
    font-size: 14px;
    color: #a8a8a8;
  }
`;

const BoardMain = styled.div`
  background-color: white;
  position: relative;
  margin-top: 8px;
  height: 100%;
  min-height: 160px;
  border-radius: 10px;
  border: 2px solid #cccccc;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #7f7f7f;
`;

const BusPrint = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  .bus {
    display: flex;
    justify-content: space-between;
    font-weight: 900;
  }
`;

const LeftTime = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "timeLeft",
})`
  color: ${(props) =>
    props.timeLeft < 10 ? (props) => props.theme.primary : "#474747"};
`;

const ShuttleBusPrint = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const CityBusPrint = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Highlight = styled.div`
  width: calc(100% + 4px);
  margin-left: -2px;
  margin-bottom: -2px;
  padding-left: 26px;

  height: 40px;
  border: 3px solid ${(props) => props.theme.primary};
  border-radius: 10px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  font-weight: 900;
  color: #000000;
`;

const Board = () => {
  const [time, setTime] = useState(new Date());
  const [minute, setMinute] = useRecoilState(timeState);
  const [busData, setBusData] = useState([]);

  // 요일에 따른 타입 결정
  const getDayType = (day) => {
    if (day === 0) return "sunday"; // 일요일
    if (day === 6) return "saturday"; // 토요일
    return "weekdays"; // 평일
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date();
      setTime(newTime); // 1초마다 현재 시간을 갱신

      // 분 값이 변경되었을 때만 minuteState 업데이트
      const currentMinute = newTime.getMinutes();
      if (currentMinute !== minute) {
        setMinute(currentMinute);
      }
    }, 1000);

    // 타이머 정리
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const dayType = getDayType(time.getDay());
    const buses = comingBuses(dayType, time)
      .filter((bus) => bus.timeLeft <= 25) // 25분 이내 필터링
      .sort((a, b) => a.timeLeft - b.timeLeft); // 남은 시간 기준 정렬
    setBusData(buses);
  }, [minute, time]); // minute 또는 time이 변경될 때마다 실행

  return (
    <BoardContainer>
      <DateContainer>
        <p className="date">
          {`${time.getMonth() + 1}월 ${time.getDate()}일 ${
            ["일", "월", "화", "수", "목", "금", "토"][time.getDay()]
          }요일`}
        </p>
        <p className="time">
          {`${time.getHours()}시 ${String(time.getMinutes()).padStart(
            2,
            "0"
          )}분 ${String(time.getSeconds()).padStart(2, "0")}초`}
        </p>
      </DateContainer>
      <BoardMain>
        <BusPrint>
          <ShuttleBusPrint>
            {busData
              .filter((bus) => bus.type === "셔틀버스")
              .map((bus, index) => (
                <div key={index} className="bus">
                  <p className="name">{bus.bus_name}</p>
                  <LeftTime timeLeft={bus.timeLeft}>{bus.timeLeft}분</LeftTime>
                </div>
              ))}
          </ShuttleBusPrint>
          <CityBusPrint>
            {busData
              .filter((bus) => bus.type !== "셔틀버스")
              .map((bus, index) => (
                <div key={index} className="bus">
                  <p className="name">{bus.bus_name}</p>
                  <LeftTime timeLeft={bus.timeLeft}>{bus.timeLeft}분</LeftTime>
                </div>
              ))}
          </CityBusPrint>
        </BusPrint>
        <Highlight>
          <p>
            곧도착:{" "}
            {busData
              .filter((bus) => bus.timeLeft <= 2) // 남은 시간이 2분 이하인 버스 필터링
              .map((bus) => bus.bus_name) // bus_name만 추출
              .join(", ")}{" "}
            {/* 쉼표로 구분된 문자열로 표시 */}
          </p>
        </Highlight>
      </BoardMain>
    </BoardContainer>
  );
};

export default Board;
