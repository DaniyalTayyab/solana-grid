import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import DiscordIconLight from "../../assets/svg-icons/DiscordFooterLight";
import DiscordIconGold from "../../assets/svg-icons/DiscordIcon";
// import DiscordIconGold from "../../assets/svg-icons/DiscordGoldIcon";
// import DiscordIconLight from "../../assets/svg-icons/DiscordIcon_light";
import ShipIcon from "../../assets/svg-icons/ShipIcon";
import ShipIconLight from "../../assets/svg-icons/ShipIcon_light";
import TwitterIconGold from "../../assets/svg-icons/TwitterIcon";
import TwitterIconLight from "../../assets/svg-icons/TwitterLightFooter";
// import TwitterIconGold from "../../assets/svg-icons/TwitterGoldIcon";
// import TwitterIconLight from "../../assets/svg-icons/TwitterIcon_light";
import { BuyButton, CopyrightText, FooterWrapper } from "./footer.styles";

export default function Footer() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <FooterWrapper>
      <CopyrightText theme={theme}>© All Rights Reserved</CopyrightText>

      <BuyButton
        startIcon={theme === "dark" ? <ShipIcon /> : <ShipIconLight />}
        theme={theme}
      >
        Buy on OS
      </BuyButton>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {theme === "dark" ? <DiscordIconGold /> : <DiscordIconLight />}
        <Box style={{ marginLeft: 20, marginRight: 60 }}>
          {theme === "dark" ? <TwitterIconGold /> : <TwitterIconLight />}
        </Box>
      </Box>
    </FooterWrapper>
  );
}
