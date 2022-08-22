import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CounterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-template-rows: repeat(2, 150px);

  grid-column-gap: 65px;
  grid-row-gap: 60px;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
  }

  @media (max-height: 1102px) {
    grid-column-gap: 85px;
    grid-row-gap: 100px;
  }

  @media (max-height: 980px) {
    grid-column-gap: 75px;
    grid-row-gap: 75px;
  }

  @media (max-height: 882px) {
    grid-column-gap: 65px;
    grid-row-gap: 60px;
  }

  @media (max-height: 580px) {
    grid-template-columns: repeat(2, 130px);
    grid-template-rows: repeat(2, 100px);
    grid-column-gap: 15px;
    grid-row-gap: 0px;
    height: 200px;
    margin-left: 45px;
    margin-top: -10px;
  }

  @media (max-width: 500px) {
    grid-row-gap: 20px;
  }
`;

export const MintWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 540px; */
  min-height: 340px;

  @media screen and (max-width: 1280px) {
    height: auto;
  }

  @media screen and (max-height: 980px) {
    min-height: 800px;
  }

  @media screen and (max-height: 882px) {
    min-height: 540px;
  }

  @media screen and (max-height: 580px) {
    min-height: 250px;
  }
`;

export const MintProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) =>
    props.theme === "dark"
      ? "transparent linear-gradient(111deg, #132842 0%, #136587 48%, #052137 100%) 0% 0% no-repeat padding-box"
      : "transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box"};
  border-radius: 10px;
  width: 71%;
  /* min-height: 520px; */
  min-height: 71vh;
  padding-left: 67px;
  padding-right: 67px;
  margin-top: 25px;
  margin-bottom: 25px;

  @media screen and (max-height: 1102px) {
    min-height: 72vh;
    margin-top: 46px;
    margin-bottom: 46px;
    padding-bottom: 10px;
  }

  @media screen and (max-height: 980px) {
    min-height: 72vh;
    margin-top: 29px;
    margin-bottom: 29px;
  }

  @media screen and (max-height: 882px) {
    min-height: 72vh;
    margin-top: 20px;
    margin-bottom: 11px;
    padding-bottom: 10px;
  }

  @media screen and (max-height: 580px) {
    width: 51%;
    min-height: 57.68vh;
    margin-top: 20px;
    margin-bottom: 11px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
    padding-bottom: 20px;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 220px;
  }
`;

export const MaxTransaction = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-height: 580px) {
    font-size: 13px;
  }
`;

export const TotalPrice = styled.div`
  margin-top: 70px;
  font-size: 22px;
  display: flex;
  align-items: baseline;

  @media screen and (max-height: 1102px) {
    margin-top: 120px;
    margin-bottom: 30px;
  }

  @media screen and (max-height: 980px) {
    margin-top: 90px;
    margin-bottom: 10px;
  }

  @media screen and (max-height: 881px) {
    margin-top: 80px;
  }

  @media (max-height: 580px) {
    margin-top: 1px;
    margin-bottom: 0;
    font-size: 12px;
  }

  @media (max-width: 500px) {
    align-items: center;
    line-height: 25px;
    margin-top: 50px;
    /* margin-bottom: -10px; */
  }
`;

export const TotalPriceLine = styled.div`
  width: 200px;
  border-bottom: 1px solid #d7b179;
  margin-left: 15px;

  @media (max-height: 580px) {
    width: 100px;
  }
`;

export const MintButton = styled(Button)`
  width: 200px;
  height: 38px;
  /* UI Properties */
  color: #303030;
  background: ${(props) =>
    props.theme === "dark"
      ? "transparent linear-gradient(106deg, #d3b651 0%, #f3df8e 55%, #c77131 100%) 0% 0% no-repeat padding-box"
      : "transparent linear-gradient(106deg, #3D2E87 0%, #8C2DDF 100%) 0% 0% no-repeat padding-box"};
  box-shadow: 0px 13px 34px #f0d87b1a;
  border-radius: 8px;
  text-align: left;
  font: normal normal 600 16px/24px Poppins;
  letter-spacing: 0px;
  color: ${(props) => (props.theme === "dark" ? "#303030" : "white")};

  @media screen and (max-height: 1102px) {
    margin-top: 40px;
  }

  @media screen and (max-height: 980px) {
    margin-top: 20px;
  }

  @media screen and (max-height: 882px) {
    /* margin-top: -10px; */
  }

  @media (max-height: 580px) {
    width: 110px;
    height: 22px;
    font-size: 10px;
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }
`;
