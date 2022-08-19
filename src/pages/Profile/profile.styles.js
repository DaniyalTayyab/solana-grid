import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const ProfileWrapper = styled.div`
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
  margin-top: 30px;
  margin-bottom: 10px;
  padding-left: 67px;
  padding-right: 67px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media all and (max-height: 1102px) {
    min-height: 74.5vh;
  }

  @media all and (max-height: 980px) {
    min-height: 72.5vh;
    padding-bottom: 10px;
  }

  @media (max-width: 882px) {
    min-heigh: 72.5vh;
  }

  @media screen and (max-width: 1030px) {
    height: 70vh;
    padding-bottom: 20px;
    overflow-y: scroll;
  }

  @media screen and (max-width: 768px) {
    max-width: 500px;
    padding-bottom: 20px;
    overflow-y: auto;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 230px;
  }
`;

export const BlackBackground = styled(Box)`
  height: 84.5vh;

  @media all and (max-height: 1102px) {
    min-height: 88vh;
    padding-bottom: 1px;
  }

  @media all and (max-height: 980px) {
    min-height: 86.05vh;
    padding-bottom: 6px;
  }

  @media all and (max-height: 882px) {
    min-height: 82vh;
  }

  @media screen and (max-width: 768px) {
    height: 90vh;
  }
`;

export const AddNFTBox = styled.div`
  cursor: pointer;
  width: 250px;
  height: 350px;
  // width: 346px;
  // height: 437px;
  /* UI Properties */
  background: ${(props) =>
    props.theme === "dark" ? "#0a0a0a 0% 0% no-repeat padding-box" : "white"};
  display: grid;
  place-items: center;
  border-radius: 10px;
  margin-top: 15px;
  margin-right: 20px;
  margin-bottom: 15px;
  // padding-left: 10px
  // margin-top: 20px;

  @media (max-height: 1102px) {
    width: 280px;
    height: 380px;
    margin-top: 45px;
  }

  @media (max-height: 980px) {
    width: 280px;
    height: 380px;
    margin-top: 45px;
  }

  @media (max-height: 882px) {
    width: 250px;
    height: 350px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    width: 280px;
    height: 380px;
  }

  @media (max-width: 500px) {
    width: 280px;
    height: 380px;
  }
`;

export const AddNFTCardWrpper = styled(Box)`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  margin-right: 20;
  margin-bottom: 15;
  margin-top: 15;

  @media (max-height: 1102px) {
    width: 280px;
    height: 380px;
    margin-top: 30px;
  }

  @media (max-height: 980px) {
    width: 280px;
    height: 380px;
    margin-top: 30px;
  }

  @media (max-height: 882px) {
    width: 250px;
    height: 350px;
  }

  @media (max-width: 500px) {
    width: 280px;
    height: 380px;
  }
`;

export const SocialWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  @media (max-height: 1102px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media (max-height: 980px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  @media (max-height: 882px) {
    margin-top: 0px;
    margin-bottom: 10px;
  }
`;

export const EditSocialBtn = styled(Button)`
  width: 127px;
  height: 34px;
  box-shadow: 0px 13px 34px #f0d87b1a;
  border-radius: 8px;
  opacity: 1;
  margin-top: 20px;
  text-transform: none;
  margin-bottom: 20px;

  @media (max-height: 1102px) {
    margin-top: 40px;
  }

  @media (max-height: 980px) {
    margin-top: 20px;
  }

  @media (max-height: 882px) {
    margin-top: 10px;
  }
`;
