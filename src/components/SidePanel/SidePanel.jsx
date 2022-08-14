import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
// import NFT from "../../assets/nft-image.png";
import NFT from "../../assets/nft3.png";
import CloseIcon from "../../assets/svg-icons/CloseIcon";
import GoldHeartIcon from "../../assets/svg-icons/GoldHeartIcon";
import { GoldDivider } from "../../pages/Home/home.styles";
import {
  DescriptionWrapper,
  MainText,
  SecondaryText,
  NFTImage,
} from "./panel.styles";

export default function SidePanel(props) {
  const { toggleDrawer, sidePanel, theme } = props;
  return (
    <Drawer anchor="right" open={sidePanel} onClose={() => toggleDrawer()}>
      <Box
        style={{
          width: "577px",
          background:
            theme === "dark"
              ? "transparent linear-gradient(180deg, #132842 0%, #136687 48%, #042036 100%) 0% 0% no-repeat padding-box"
              : "transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
        }}
      >
        <Box style={{ float: "right" }} onClick={() => toggleDrawer()}>
          <CloseIcon />
        </Box>
        <Box
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NFTImage img={NFT} />
        </Box>
        <GoldDivider height="3px" />
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 176,
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: 1,
              font: "normal normal normal 28px/24px Poppins",
              marginRight: 12,
            }}
          >
            NFT ID:
          </Typography>
          <Typography
            style={{
              font: "normal normal normal 22px/24px Poppins",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: 0.5,
              marginRight: 70,
            }}
          >
            012558683
          </Typography>
          <GoldHeartIcon />{" "}
          <Typography
            style={{
              marginLeft: 15,
              font: "normal normal normal 22px/24px Poppins",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: 0.5,
            }}
          >
            4.5k
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 11,
            marginTop: 33,
            paddingRight: 15,
          }}
        >
          <DescriptionWrapper>
            <MainText>Name:</MainText>
            <SecondaryText>David Beckham</SecondaryText>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <MainText>Bio:</MainText>
            <SecondaryText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SecondaryText>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <MainText>Link:</MainText>
            <SecondaryText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SecondaryText>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <MainText>Owner:</MainText>
            <SecondaryText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SecondaryText>
          </DescriptionWrapper>
        </Box>
      </Box>
    </Drawer>
  );
}
