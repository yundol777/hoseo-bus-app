import { useState } from "react";
import styled from "styled-components";
import Icons from "../assets/icons/Icons";
import {
  weekdaysGrouped,
  saturdayGrouped,
  sundayGrouped,
} from "../assets/data/busData";
import { Link } from "react-router-dom";

const TimeTableContainer = styled.div`
  box-sizing: border-box;
  flex: 1;
  margin: 0 24px;
`;

const TimeNav = styled.div`
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

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
`;

const TimeOption = styled.div`
  display: flex;
  gap: 6px;
`;

const Button = styled.div`
  color: ${(props) => (props.isActive ? "#ffffff" : "#474747")};
  background-color: ${(props) => (props.isActive ? "#A51622" : "#ffffff")};
  border: 1px solid #474747;
  padding: 6px 10px;
  font-weight: 900;
  border-radius: 5px;
  height: 100%;
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #cccccc;
  margin: 0.75rem 0 0.5rem 0;
`;

const BusOption = styled.div`
  padding-left: 12px;
  display: flex;
  gap: 18px;
`;

const BusOptionItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: 900;
  color: ${(props) => (props.active ? "#7F7F7F" : "#A8A8A8")};

  p {
    margin-left: 6px;
    flex: 1;
  }
`;

const TimeBoard = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-top: 1rem;
  padding: 26px 20px;
  border: 1px solid #cccccc;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-track {
    width: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cccccc; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥글기 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #7f7f7f; /* 스크롤바 호버 시 색상 */
  }
`;

const TimeSlot = styled.div`
  display: flex;
  flex-direction: column;

  .hour {
    font-weight: 900;
    font-size: 14px;
    color: #7f7f7f;
  }

  hr {
    margin: 4px 0 12px 0;
  }
`;

const BusLists = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const BusList = styled.div`
  flex: 1;
  display: flex;
  gap: 6px;
  flex-direction: column;
  justify-content: flex-start;
`;

const Buses = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
`;

const BusMinute = styled.div`
  margin-right: 2px;
  font-size: 12px;
  font-weight: 600;
  color: #7f7f7f;
`;

const MinuteBusList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Bus = styled.span`
  margin-top: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 12px;
  border-radius: 3px;
  color: white;
  background-color: ${(props) =>
    props.busName === "셔틀버스"
      ? "#A51622"
      : props.busName === "셔틀(아산)"
      ? "#6782EA"
      : props.busName === "1000번"
      ? "#6782EA"
      : props.busName === "순환5번"
      ? "#ECAB56"
      : "#66AF7C"};
  font-size: 8px;
  font-weight: 700;
`;

const TimeTable = () => {
  const getDefaultDay = () => {
    const today = new Date().getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
    if (today === 0) return "sunday"; // 일요일
    if (today === 6) return "saturday"; // 토요일
    return "weekdays"; // 나머지는 평일
  };

  const [activeButton, setActiveButton] = useState(getDefaultDay());
  const [activeOption, setActiveOption] = useState(null);

  const toggleOption = (option) => {
    setActiveOption(activeOption === option ? null : option);
  };

  const groupedData =
    activeButton === "weekdays"
      ? weekdaysGrouped
      : activeButton === "saturday"
      ? saturdayGrouped
      : sundayGrouped;

  function groupByMinuteRange(hourData, activeOption) {
    const rangeData = { "00": {}, 30: {} };

    hourData.forEach((bus) => {
      const shouldInclude =
        !activeOption ||
        (activeOption === "셔틀버스" && bus.type === "셔틀버스") ||
        (activeOption === "시내버스" && bus.type !== "셔틀버스");

      if (shouldInclude) {
        const minuteKey = bus.minute;
        const rangeKey = minuteKey <= 30 ? "00" : "30";

        if (!rangeData[rangeKey][minuteKey]) {
          rangeData[rangeKey][minuteKey] = [];
        }

        rangeData[rangeKey][minuteKey].push(bus);
      }
    });

    ["00", "30"].forEach((range) => {
      Object.keys(rangeData[range]).forEach((minute) => {
        rangeData[range][minute].sort((a, b) => {
          // 1단계: bus_name이 "셔틀버스"인 경우가 가장 먼저
          if (a.bus_name === "셔틀버스" && b.bus_name !== "셔틀버스") return -1;
          if (a.bus_name !== "셔틀버스" && b.bus_name === "셔틀버스") return 1;

          // 2단계: type이 "셔틀버스"인 경우가 두 번째
          if (a.type === "셔틀버스" && b.type !== "셔틀버스") return -1;
          if (a.type !== "셔틀버스" && b.type === "셔틀버스") return 1;

          // 3단계: 나머지 항목
          return 0;
        });
      });
    });

    return rangeData;
  }

  const filteredData = [];
  for (let hour = 7; hour <= 21; hour++) {
    const hourKey = `${hour.toString().padStart(2, "0")}:00`;
    const buses = groupedData[hourKey] || [];

    const minuteGrouped = groupByMinuteRange(buses, activeOption);
    filteredData.push({
      hour: hourKey,
      minuteGrouped,
    });
  }

  return (
    <TimeTableContainer>
      <TimeNav>
        <TimeOption>
          <Button
            isActive={activeButton === "weekdays"}
            onClick={() => setActiveButton("weekdays")}
          >
            평일
          </Button>
          <Button
            isActive={activeButton === "saturday"}
            onClick={() => setActiveButton("saturday")}
          >
            토요일
          </Button>
          <Button
            isActive={activeButton === "sunday"}
            onClick={() => setActiveButton("sunday")}
          >
            일요일
          </Button>
        </TimeOption>
        <Link to={"bus-route"}>노선 확인하기 &gt;</Link>
      </TimeNav>
      <Divider />
      <BusOption>
        <BusOptionItem
          active={activeOption === "셔틀버스"}
          onClick={() => toggleOption("셔틀버스")}
        >
          {activeOption === "셔틀버스" ? (
            <Icons.Checkbox />
          ) : (
            <Icons.NonCheckbox />
          )}
          <p>셔틀버스</p>
        </BusOptionItem>
        <BusOptionItem
          active={activeOption === "시내버스"}
          onClick={() => toggleOption("시내버스")}
        >
          {activeOption === "시내버스" ? (
            <Icons.Checkbox />
          ) : (
            <Icons.NonCheckbox />
          )}
          <p>시내버스</p>
        </BusOptionItem>
      </BusOption>
      <TimeBoard>
        {filteredData.map(({ hour, minuteGrouped }) => (
          <TimeSlot key={hour}>
            <div className="hour">{hour}</div>
            <Divider />
            <BusLists>
              <BusList>
                {Object.keys(minuteGrouped["00"]).map((minute) => (
                  <Buses key={minute}>
                    <BusMinute>{String(minute).padStart(2, "0")}</BusMinute>
                    <MinuteBusList>
                      {minuteGrouped["00"][minute].map((bus, index) => (
                        <Bus key={index} busName={bus.bus_name}>
                          {bus.bus_name}
                        </Bus>
                      ))}
                    </MinuteBusList>
                  </Buses>
                ))}
              </BusList>
              <Divider />
              <BusList>
                {Object.keys(minuteGrouped["30"]).map((minute) => (
                  <Buses key={minute}>
                    <BusMinute>{String(minute).padStart(2, "0")}</BusMinute>
                    {minuteGrouped["30"][minute].map((bus, index) => (
                      <Bus key={index} busName={bus.bus_name}>
                        {bus.bus_name}
                      </Bus>
                    ))}
                  </Buses>
                ))}
              </BusList>
            </BusLists>
          </TimeSlot>
        ))}
      </TimeBoard>
    </TimeTableContainer>
  );
};

export default TimeTable;
