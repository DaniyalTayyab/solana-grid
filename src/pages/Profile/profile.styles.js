import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) =>
    props.theme === "dark"
      ? "transparent linear-gradient(111deg, #132842 0%, #136587 48%, #052137 100%) 0% 0% no-repeat padding-box"
      : "transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box"};
  border-radius: 10px;
  width: 71%;
  min-height: 520px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 67px;
  padding-right: 67px;

  @media screen and (max-width: 768px) {
    width: 500px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;
export const AddNFTBox = styled.div`
  cursor: pointer;
  width: 300px;
  height: 400px;
  // width: 346px;
  // height: 437px;
  /* UI Properties */
  background: ${(props) =>
    props.theme === "dark" ? "#0a0a0a 0% 0% no-repeat padding-box" : "white"};
  display: grid;
  place-items: center;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 15px;
  // padding-left: 10px
  // margin-top: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
