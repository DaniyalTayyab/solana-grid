import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import DiscordIconLight from "../../assets/svg-icons/DiscordFooterLight";

import DiscordIconGold from "../../assets/svg-icons/DiscordIcon";

import ShipIcon from "../../assets/svg-icons/ShipIcon";
import ShipIconLight from "../../assets/svg-icons/ShipIcon_light";
import TwitterIconGold from "../../assets/svg-icons/TwitterIcon";

import TwitterIconLight from "../../assets/svg-icons/TwitterLightFooter";

import {
  BuyButton,
  CopyrightText,
  FooterWrapper,
  SocailWrpper,
} from "./footer.styles";

export default function Footer() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <FooterWrapper
      style={{
        backgroundImage:
          theme === "dark"
            ? "url(/background.png)"
            : "url(/background-light.png)",
      }}
    >
      <CopyrightText theme={theme}>© All Rights Reserved</CopyrightText>

      <BuyButton
        startIcon={theme === "dark" ? <ShipIcon /> : <ShipIconLight />}
        theme={theme}
      >
        Buy on OS
      </BuyButton>
      <SocailWrpper>
        {theme === "dark" ? <DiscordIconGold /> : <DiscordIconLight />}
        <Box style={{ marginRight: 20 }}>
          {theme === "dark" ? <TwitterIconGold /> : <TwitterIconLight />}
        </Box>
      </SocailWrpper>
    </FooterWrapper>
  );
}
