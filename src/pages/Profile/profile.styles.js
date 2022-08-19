import styled from "@emotion/styled";
import { Box } from "@mui/material";

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
  min-height: 70vh;
  margin-top: 40px;
  margin-bottom: 15px;
  padding-left: 67px;
  padding-right: 67px;

  @media screen and (max-width: 1030px) {
    height: 70vh;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
    padding-bottom: 20px;
    overflow-y: auto;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

export const BlackBackground = styled(Box)`
  height: 85.09vh;

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

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
