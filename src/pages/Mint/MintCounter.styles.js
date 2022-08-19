import styled from "@emotion/styled";

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
`;
