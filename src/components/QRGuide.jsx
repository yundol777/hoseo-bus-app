import styled from "styled-components";
import qrImage from "../assets/images/qr_code.png";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;

  > p {
    font-size: 24px;
    color: ${(props) => props.theme.primary};
    font-weight: 900;
  }
`;

const QRWrapper = styled.div`
  border: 5px solid #cccccc;
  border-radius: 10px;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 250px;
    height: 250px;
  }
`;

const QRGuide = () => {
  return (
    <Container>
      <p>버스 시간표 및 노선 확인</p>
      <QRWrapper>
        <img src={qrImage} alt="QR code" />
      </QRWrapper>
    </Container>
  );
};

export default QRGuide;
