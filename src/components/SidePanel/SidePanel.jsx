import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import NFT from "../../assets/nft3.png";
import NFTSmall from "../../assets/smallnft.png";
import NFTMedium from "../../assets/mediumnft.png";
import NFTLarge from "../../assets/largenft.png";
import NFTUltra from "../../assets/ultranft.png";
import NFTMega from "../../assets/meganft.png";
import CloseIcon from "../../assets/svg-icons/CloseIcon";
import GoldHeartIcon from "../../assets/svg-icons/GoldHeartIcon";
import { GoldDivider } from "../../pages/Home/home.styles";
import {
  DescriptionWrapper,
  MainText,
  SecondaryText,
  NFTImage,
  SidePanelWrapper,
  NFTIdText,
} from "./panel.styles";

export default function SidePanel(props) {
  const { toggleDrawer, sidePanel, theme, boxSize } = props;

  return (
    <Drawer anchor="right" open={sidePanel} onClose={() => toggleDrawer()}>
      <SidePanelWrapper
        style={{
          // width: "577px",
          background:
            theme === "dark"
              ? "transparent linear-gradient(180deg, #132842 0%, #136687 48%, #042036 100%) 0% 0% no-repeat padding-box"
              : "transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box",
          // boxShadow: "0px 3px 6px #00000029",
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
          <NFTImage
            img={
              boxSize === "small"
                ? NFTSmall
                : boxSize === "medium"
                ? NFTMedium
                : boxSize === "large"
                ? NFTLarge
                : boxSize === "ultra"
                ? NFTUltra
                : boxSize === "mega"
                ? NFTMega
                : NFTSmall
            }
          />
        </Box>
        <GoldDivider height="3px" />
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            // marginLeft: 176,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NFTIdText>NFT ID:</NFTIdText>
          <Typography
            style={{
              font: "normal normal normal 22px/24px Poppins",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: 0.5,
              fontSize: "18px",
              marginRight: 70,
              marginLeft: 20,
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
      </SidePanelWrapper>
    </Drawer>
  );
}
