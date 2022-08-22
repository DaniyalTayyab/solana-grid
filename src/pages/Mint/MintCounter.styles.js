import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CoutnerWrapper = styled.div`
  padding: 10px 20px;
  // width: 215px;
  // height: 150px;
  width: 190px;
  height: 150px;
  margin-right: 7px;
  box-shadow: 0px 10px 20px #00000029;
  border: 1px solid #707070;
  border-radius: 20px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media screen and (max-height: 1102px) {
    width: 225px;
    height: 170px;
  }

  @media screen and (max-height: 980px) {
    width: 215px;
    height: 150px;
  }

  @media screen and (max-height: 882px) {
    width: 190px;
    height: 150px;
  }

  @media screen and (max-height: 580px) {
    width: 60px;
    height: 55px;
    margin-top: 10px;
    border-radius: 7px;
  }
`;

export const CounterBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 188px;
  // height: 40px;
  width: 160px;
  height: 35px;
  margin-top: 17px;
  box-shadow: 0px 3px 15px #00000040;
  border-radius: 10px;
  opacity: 0.8;
  text-align: left;
  font: normal normal normal 26px/32px Roboto;
  letter-spacing: 0.65px;
  color: #105372;

  @media (max-height: 580px) {
    border-radius: 4px;
    margin-top: 13px;
    margin-bottom: 0;
    width: 100px;
    height: 20px;
  }
`;

export const Variant = styled(Box)`
  width: 100%;
  display: grid;
  place-items: center;
  font: normal normal 600 26px/32px Poppins;
  letter-spacing: 0px;
  opacity: 0.9;
  font-size: 16px;

  @media (max-height: 580px) {
    height: 10px;
    margin-top: -16px;
    margin-bottom: 0;
    font-size: 8px;
  }
`;

export const Balance = styled(Box)`
  width: 100%;
  display: grid;
  place-items: center;
  font: normal normal normal 26px/32px Roboto;
  letter-spacing: 0.65px;
  color: #ffffff;
  opacity: 1;
  margin-top: 6px;
  // fontSize: 20px;
  font-size: 18px;
  font-weight: bold;

  @media (max-height: 580px) {
    height: 10px;
    font-size: 8px;
    margin-top: 8px;
    margin-bottom: 0;
  }
`;

export const CountButtons = styled.button`
  background: transparent;
  border: none;
  margin-right: 10px;
  text-align: left;
  font: normal normal normal 26px/32px Roboto;
  letter-spacing: 0.65px;
  color: #105372;
  margin-left: 10px;
  cursor: pointer;

  @media (max-height: 580px) {
    font-size: 10px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Counter = styled.div`
  width: 60%;
  display: grid;
  place-items: center;
  font-size: 18px;

  @media (max-height: 580px) {
    font-size: 10px;
    margin-left: 0;
    margin-right: 0;
    padding: 0 10px;
  }
`;
