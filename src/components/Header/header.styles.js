import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  background: ${(props) =>
    props.theme === "dark"
      ? "transparent linear-gradient(90deg, #132842 0%, #136789 49%, #042036 100%) 0% 0% no-repeat padding-box"
      : "transparent linear-gradient(247deg, #5E47B3 0%, #C2589B 100%) 0% 0% no-repeat padding-box"};
  /* height: ${(props) => (props.profileScreen ? "274px" : "126px")}; */
  height: 126px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.profileScreen ? "center" : "")};
  flex-direction: ${(props) => (props.profileScreen ? "column" : "row")};

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;
export const RightItems = styled.div`
  margin-left: auto;
  margin-right: 75px;
  display: flex;
  align-items: center;
`;

export const DisconnectButton = styled.button`
  font: normal normal 600 16px/24px Poppins;
  letter-spacing: 0px;
  color: ${(props) => (props.theme === "dark" ? "#303030" : "white")};
  opacity: 1;
  width: 200px;
  height: 38px;
  margin-left: 18px;
  margin-right: 24px;
  /* UI Properties */
  background: ${(props) =>
    props.theme === "dark"
      ? "transparent linear-gradient(106deg, #d3b651 0%, #f3df8e 55%, #c77131 100%) 0% 0% no-repeat padding-box"
      : "transparent linear-gradient(106deg, #6C26B1 0%, #6C26B1 100%) 0% 0% no-repeat padding-box"};
  // box-shadow: 0px 13px 34px #f0d87b1a;
  border: none;
  box-shadow: 0px 31px 18px #00000045;
  border-radius: 56px;
  opacity: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  margin-top: ${(props) => (props.profileScreen ? "80px" : "0px")};
  margin-bottom: ${(props) => (props.profileScreen ? "45px" : "0px")};
  display: grid;
  font: normal normal 600 28px/42px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-left: ${(props) => (props.profileScreen ? "0px" : "123px")};
  place-items: center;
  border-radius: 50%;
`;

export const AccountText = styled.span`
  text-align: left;
  font: normal normal bold 38px/50px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.theme === "dark" ? "#e1c869" : "white")};
  opacity: 1;
  margin-bottom: 30px;
`;

export const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${(props) => (props.profileScreen ? 1 : 2000)};
`;

export const ProfileIcon = styled(Link)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ThemeIconWrapper = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  position: relative;
  margin-left: auto;
  top: -110px;
  margin-right: 110px;

  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }
`;
