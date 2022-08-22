import { Box } from "@mui/system";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { GoldDivider } from "../Home/home.styles";
import {
  AddNFTBox,
  ProfileWrapper,
  BlackBackground,
  AddNFTCardWrpper,
  SocialWrapper,
  EditSocialBtn,
  ProfileBottomDividerBox,
  WhatDoYouOwn,
  NFTCardImage,
  IDAndSizeTextWrapper,
  NFTCardImageWrapper,
  NameBioWrapper,
} from "./profile.styles";
import NFTImage from "../../assets/nft-image.png";
import { Button, Typography } from "@mui/material";
import AddNFTIcon from "../../assets/svg-icons/AddNFTIcon";
import DiscordGoldIcon from "../../assets/svg-icons/DiscordGoldIcon";
import InstagramIcon from "../../assets/svg-icons/InstagramIcon";
import TwitterGoldIcon from "../../assets/svg-icons/TwitterGoldIcon";
import NftModal from "../../components/Modal/nftModal";
import SocialModal from "../../components/Modal/socialModal";
import { useSelector } from "react-redux";
import AddNFTIconLight from "../../assets/svg-icons/AddNFTIcon_light";
import DiscordLight from "../../assets/svg-icons/DiscordIcon_light";
import InstagramIconLight from "../../assets/svg-icons/InstagramIcon_light";
import TwitterIconLight from "../../assets/svg-icons/TwitterIcon_light";
import axios from "axios";
import { Overlay } from "../../components/Modal/modal.styles";

const dummyArr = [1, 2];
export default function Profile() {
  const theme = useSelector((state) => state.theme.value);
  const [nftModal, setNftModal] = useState(false);
  const [socailModal, setSocialModal] = useState(false);

  const toggleCreateNFTModal = () => {
    setNftModal(!nftModal);
  };

  const toggleEditSocialModal = () => {
    setSocialModal(!socailModal);
  };

  const createNFT = () => {
    axios.post("dummyroute.solidity.com/test").then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <NftModal
        open={nftModal}
        closeModal={() => setNftModal(false)}
        theme={theme}
        createNFT={createNFT}
      />
      <SocialModal
        open={socailModal}
        closeModal={() => setSocialModal(false)}
        theme={theme}
      />
      <Box>
        <Header profileScreen />
      </Box>
      <GoldDivider theme={theme} />

      <BlackBackground
        style={{
          backgroundImage:
            theme === "dark"
              ? "url(/background.png)"
              : "url(/background-light.png)",
        }}
      >
        <Box
          style={{
            display: "grid",
            placeItems: "center",
            width: "100%",
            position: "relative",
          }}
        >
          <Overlay open={nftModal} />
          <Overlay open={socailModal} />
          <ProfileWrapper theme={theme}>
            <WhatDoYouOwn
              style={{
                color: theme === "dark" ? "#E1C869" : "white",
              }}
            >
              What do you own?
            </WhatDoYouOwn>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                marginTop: "-15px",
              }}
            >
              {dummyArr.map((obj, index) => (
                <AddNFTCardWrpper
                  key={`${index}nft`}
                  style={{
                    background:
                      theme === "dark"
                        ? "#0A0A0A 0% 0% no-repeat padding-box"
                        : "white",
                  }}
                >
                  <NFTCardImageWrapper>
                    <NFTCardImage>
                      <img
                        src={NFTImage}
                        alt="not found"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </NFTCardImage>
                  </NFTCardImageWrapper>
                  {/* new size and id */}
                  <IDAndSizeTextWrapper>
                    <Typography
                      style={{
                        textAlign: "left",
                        letterSpacing: "0px",
                        color: theme === "dark" ? "#B4951D" : "#6C26B1",
                        fontSize: "inherit",
                        opacity: 1,
                      }}
                    >
                      Size: 16x16
                    </Typography>
                    <Typography
                      style={{
                        textAlign: "left",
                        letterSpacing: "0px",
                        fontSize: "inherit",
                        color: theme === "dark" ? "#B4951D" : "#6C26B1",
                        opacity: 1,
                      }}
                    >
                      ID: 152236
                    </Typography>
                  </IDAndSizeTextWrapper>
                  {/* new size and id */}

                  {/* new other stuff */}
                  <NameBioWrapper>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography
                        style={{
                          minWidth: 70,
                          maxWidth: 70,
                          // font: "normal normal normal 12px/20px Poppins",
                          fontSize: "inherit",
                          letterSpacing: "0px",
                          color: theme === "dark" ? "white" : "black",
                          fontWeight: "400",
                        }}
                      >
                        Name:
                      </Typography>
                      <Typography
                        style={{
                          textAlign: "left",
                          // font: "normal normal normal 10px/14px Poppins",
                          fontSize: "inherit",
                          letterSpacing: "0px",
                          color: theme === "dark" ? "white" : "black",
                          opacity: 0.5,
                          // fontSize: "6px",
                        }}
                      >
                        Lorem Ipsum
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          minWidth: 70,
                          maxWidth: 70,
                          // font: "normal normal normal 12px/20px Poppins",
                          fontSize: "inherit",
                          letterSpacing: "0px",
                          color: theme === "dark" ? "white" : "black",
                        }}
                      >
                        Bio:
                      </Typography>
                      <Typography
                        style={{
                          width: "250px",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textAlign: "left",
                          // font: "normal normal normal 10px/14px Poppins",
                          fontSize: "inherit",
                          letterSpacing: "0px",
                          color: theme === "dark" ? "white" : "black",
                          opacity: 0.5,
                          // fontSize: "12px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </Typography>
                    </Box>
                  </NameBioWrapper>
                  {/* new other stuff */}
                </AddNFTCardWrpper>
              ))}
              {/* ADD NFT box */}
              <AddNFTBox onClick={() => toggleCreateNFTModal()} theme={theme}>
                {theme === "dark" ? <AddNFTIcon /> : <AddNFTIconLight />}
              </AddNFTBox>
              {/* ADD NFT box */}
            </Box>
            {/* social icons */}
            <SocialWrapper>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "350px",
                  justifyContent: "space-evenly",
                  marginTop: "20px",
                }}
              >
                {theme === "dark" ? (
                  <>
                    <TwitterGoldIcon />
                    <InstagramIcon />
                    <DiscordGoldIcon />
                  </>
                ) : (
                  <>
                    <TwitterIconLight />
                    <InstagramIconLight />
                    <DiscordLight />
                  </>
                )}
              </Box>
              <EditSocialBtn
                style={{
                  background:
                    theme === "dark"
                      ? "transparent linear-gradient(107deg, #D3B651 0%, #F3DF8E 55%, #C77131 100%) 0% 0% no-repeat padding-box"
                      : "#6C26B1 0% 0% no-repeat padding-box",

                  color: theme === "dark" ? "black" : "white",
                }}
                onClick={toggleEditSocialModal}
              >
                Edit Socials
              </EditSocialBtn>
            </SocialWrapper>
            {/* social icons */}
            <GoldDivider theme={theme} />
          </ProfileWrapper>
        </Box>
        <ProfileBottomDividerBox>
          <GoldDivider theme={theme} />
        </ProfileBottomDividerBox>
      </BlackBackground>
    </div>
  );
}
