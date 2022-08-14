import { Popper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from "../../assets/svg-icons/CloseIcon";
import NFTImage from "../../assets/nft-image.png";
import NFTSmall from "../../assets/smallnft.png";
import NFTMedium from "../../assets/mediumnft.png";
import NFTLarge from "../../assets/largenft.png";
import NFTUltra from "../../assets/ultranft.png";
import NFTMega from "../../assets/meganft.png";
import { DescriptionWrapper, MainText, SecondaryText } from "./popup.styles";

export default function Popup(props) {
  const { popup, theme, closePopup, boxSize } = props;

  return (
    <Popper open={Boolean(popup)} anchorEl={popup}>
      <Box
        style={{
          width: "271px",
          height: "400px",
          background:
            theme === "dark"
              ? "transparent linear-gradient(180deg, #132842 0%, #136687 48%, #042036 100%) 0% 0% no-repeat padding-box"
              : "transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box",
          boxShadow: "0px 10px 20px #F0D87B00",
          border: "1px solid #F0D87B",
          opacity: 0.95,
          borderRadius: "40px",
        }}
      >
        <div
          style={{
            float: "right",
            marginRight: 10,
            marginTop: 10,
            cursor: "pointer ",
          }}
          onClick={() => closePopup()}
        >
          <CloseIcon />
        </div>
        <Box
          style={{
            width: "100%",
            display: "grid",
            placeItems: "center",
            marginTop: 30,
          }}
        >
          <img
            alt="not found"
            src={boxSize === "small" ? NFTSmall : boxSize === "medium" ? NFTMedium : boxSize === "large" ? NFTLarge : boxSize === "ultra" ? NFTUltra : boxSize === "mega" ? NFTMega : NFTSmall }
            style={{
              width: "184px",
              height: "184px",
              // border: "2px solid #F0D87B",
              borderRadius: "20px",
            }}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "80px",
            marginTop: 10,
          }}
        >
          <Typography
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              font: "normal normal normal 17px/24px Poppins",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: 1,
              marginRight: 12,
            }}
          >
            NFT ID:
          </Typography>
          <Typography
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              font: "normal normal normal 14px/24px Poppins",
              letterSpacing: "0px",
              color: "#FFFFFF",
              opacity: 1,
            }}
          >
            012345658
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            marginTop: 25,
            paddingRight: 15,
          }}
        >
          <DescriptionWrapper>
            <MainText style={{ fontSize: "14px" }}>Link:</MainText>
            <SecondaryText style={{ fontSize: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </SecondaryText>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <MainText style={{ fontSize: "14px" }}>Description:</MainText>
            <SecondaryText style={{ fontSize: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore.
            </SecondaryText>
          </DescriptionWrapper>
        </Box>
      </Box>
    </Popper>
  );
}
