import styled from "styled-components";

const BoardContainer = styled.div`
  box-sizing: border-box;
  margin: 30px 24px;
`;

const Date = styled.div`
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
  margin: 8px 0;
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
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  .bus {
    display: flex;
    justify-content: space-between;
    font-weight: 900;

    > .name {
    }

    > .leftTime {
      color: #a51622;
    }
  }
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
  position: absolute;
  bottom: 0;
  width: calc(100% + 4px);
  margin-left: -2px;
  margin-bottom: -2px;
  padding-left: 26px;

  height: 40px;
  border: 3px solid #a51622;
  border-radius: 10px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  font-weight: 900;
  color: #000000;
`;

const Board = () => {
  return (
    <BoardContainer>
      <Date>
        <p className="date">9월 27일 금요일</p>
        <p className="time">오후 1 : 30 : 25</p>
      </Date>
      <BoardMain>
        <BusPrint>
          <ShuttleBusPrint>
            <div className="bus">
              <p className="name">셔틀버스</p>
              <p className="leftTime">2분</p>
            </div>
            <div className="bus">
              <p className="name">셔틀버스</p>
              <p className="leftTime">15분</p>
            </div>
          </ShuttleBusPrint>
          <CityBusPrint>
            <div className="bus">
              <p className="name">1000번</p>
              <p className="leftTime">4분</p>
            </div>
            <div className="bus">
              <p className="name">순환5번</p>
              <p className="leftTime">18분</p>
            </div>
          </CityBusPrint>
        </BusPrint>
        <Highlight>
          <p>곧도착 : 셔틀버스</p>
        </Highlight>
      </BoardMain>
    </BoardContainer>
  );
};

export default Board;
