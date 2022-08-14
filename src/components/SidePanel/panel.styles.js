import styled from "@emotion/styled";

export const MainText = styled.span`
  font: normal normal normal 22px/24px Poppins;
  letter-spacing: 0px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
  min-width: 103px;
  max-width: 103px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 35px;
  width: 100%;
  margin-bottom: 22px;
  align-items: center;
`;

export const SecondaryText = styled.span`
  font: normal normal normal 18px/24px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.5;
`;

export const NFTImage = styled.div`
  width: 431px;
  height: 505px;
  margin-top: 58;
  margin-left: 54;
  border-radius: 20px;
  opacity: 1;
  margin-bottom: 67px;
  background-image: url(${(props) => props.img});
  background-size: cover;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: gold;
  }
`;
