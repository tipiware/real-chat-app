import styled from "styled-components";

export const BodyContainer = styled.div`
  color: white;
  background: #f9f9f9;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const BodyContainer0 = styled.div`
  color: white;
  background: #f9f9f9;
  margin-top: 50px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const BodyWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  justify-content: center;
`;

export const Col1Row = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

export const Col2Row = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    position: absolute;
    margin-top: 100px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 480px) {
    margin-top: -450px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #191919;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SubHeading = styled.p`
  font-weight: 500;
  margin-bottom: 25px;
  font-size: 24px;
  line-height: 24px;
  color: #74c947;
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: grey;
`;

export const ImgWrap0 = styled.div`
  max-width: 100%;
  height: 100%;
  margin-bottom: 50px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;