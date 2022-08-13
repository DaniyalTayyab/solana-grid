import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RichLogo } from "../../assets/svg-icons/RichLogo.jsx";
import ThemeIcon from "../../assets/svg-icons/ThemeIcon.jsx";
import UserIcon from "../../assets/svg-icons/UserIcon.jsx";
import { changeTheme } from "../../redux/slices/themeSlice.js";
import { GoldDivider } from "../../pages/Home/home.styles.js";
import "./header.styles.js";
import {
  AccountText,
  DisconnectButton,
  FixedHeader,
  HeaderWrapper,
  Logo,
  RightItems,
} from "./header.styles.js";
import RichLogoLight from "../../assets/svg-icons/RichLogo_light.jsx";
import ThemeIconLight from "../../assets/svg-icons/ThemeIcon_light.jsx";
import ProfileIconLight from "../../assets/svg-icons/ProfileIcon_light.jsx";

export default function Header(props) {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const { profileScreen } = props;
  return (
    <HeaderWrapper profileScreen={profileScreen} theme={theme}>
      <Logo profileScreen={profileScreen}>
        {theme === "dark" ? <RichLogo /> : <RichLogoLight />}
      </Logo>
      {!profileScreen && (
        <RightItems>
          <Link to="/profile">
            {theme === "dark" ? <UserIcon /> : <ProfileIconLight />}
          </Link>
          <Link to="/mint">
            <DisconnectButton theme={theme}> Connect Wallet </DisconnectButton>
          </Link>
          <div
            onClick={() => dispatch(changeTheme())}
            style={{
              cursor: "pointer",
              width: 40,
              height: 40,
              display: "grid",
              placeItems: "center",
            }}
          >
            {theme === "dark" ? <ThemeIcon /> : <ThemeIconLight />}
          </div>
        </RightItems>
      )}
      {/* {profileScreen && <AccountText theme={theme}>My Account</AccountText>} */}
      {profileScreen && (
        <div
          onClick={() => dispatch(changeTheme())}
          style={{
            cursor: "pointer",
            width: 40,
            height: 40,
            display: "grid",
            placeItems: "center",
            position: "relative",
            marginLeft: "auto",
            top: "-90px",
            //-130
            marginRight: 110,
          }}
        >
          {theme === "dark" ? <ThemeIcon /> : <ThemeIconLight />}
        </div>
      )}
    </HeaderWrapper>
    // </FixedHeader>
  );
}
