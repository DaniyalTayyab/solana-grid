import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const FooterWrapper = styled.div`
  background: transparent;
  height: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const CopyrightText = styled.span`
  text-align: left;
  letter-spacing: 0px;
  color: ${(props) => (props.theme === "dark" ? "#b4951d" : "#8D65B5")};
  margin-left: 60px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const BuyButton = styled(Button)`
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

  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }
`;

export const SocailWrpper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
