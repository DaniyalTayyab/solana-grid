import { Box } from "@mui/system";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { GoldDivider } from "../Home/home.styles";
import { AddNFTBox, ProfileWrapper, BlackBackground } from "./profile.styles";
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
      <GoldDivider theme={theme} style={{ marginTop: "126px" }} />

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
            <Box
              style={{
                display: "grid",
                placeItems: "center",
                textAlign: "left",
                font: "normal normal bold 23px Roboto",
                letterSpacing: "0px",
                color: theme === "dark" ? "#E1C869" : "white",
                marginTop: "5px",
              }}
            >
              What do you own?
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                marginTop: "15px",
              }}
            >
              {dummyArr.map((obj, index) => (
                <Box
                  key={`${index}nft`}
                  style={{
                    // width: "300px",
                    // height: "400px",
                    width: "250px",
                    height: "350px",
                    background:
                      theme === "dark"
                        ? "#0A0A0A 0% 0% no-repeat padding-box"
                        : "white",
                    borderRadius: "10px",
                    marginRight: 20,
                    marginBottom: 15,
                    marginTop: 15,
                  }}
                >
                  <Box
                    style={{
                      width: "100%",
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 17,
                    }}
                  >
                    <img
                      src={NFTImage}
                      alt="not found"
                      style={{
                        // width: 254,
                        // height: 190,
                        width: 200,
                        height: 190,
                      }}
                    />
                  </Box>
                  {/* new size and id */}
                  <Box
                    style={{
                      color: "white",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      font: "normal normal normal 12px Poppins",
                      fontSize: "14px",
                    }}
                  >
                    <Typography
                      style={{
                        textAlign: "left",
                        letterSpacing: "0px",
                        // font: "normal normal normal 17px/32px Poppins",
                        color: theme === "dark" ? "#B4951D" : "#6C26B1",
                        opacity: 1,
                      }}
                    >
                      Size: 16x16
                    </Typography>
                    <Typography
                      style={{
                        textAlign: "left",
                        letterSpacing: "0px",
                        // font: "normal normal normal 17px/32px Poppins",
                        color: theme === "dark" ? "#B4951D" : "#6C26B1",
                        opacity: 1,
                      }}
                    >
                      ID: 152236
                    </Typography>
                  </Box>
                  {/* new size and id */}

                  {/* new other stuff */}
                  <Box
                    style={{
                      // width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: 28,
                      marginTop: 10,
                      color: theme === "dark" ? "white" : "black",
                    }}
                  >
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
                          font: "normal normal normal 12px/20px Poppins",
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
                          font: "normal normal normal 10px/14px Poppins",
                          letterSpacing: "0px",
                          color: theme === "dark" ? "white" : "black",
                          opacity: 0.5,
                          fontSize: "12px",
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
                          font: "normal normal normal 12px/20px Poppins",
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
                          font: "normal normal normal 10px/14px Poppins",
                          letterSpacing: "0px",
                          color: theme === "dark" ? "white" : "black",
                          opacity: 0.5,
                          fontSize: "12px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </Typography>
                    </Box>
                  </Box>
                  {/* new other stuff */}
                </Box>
              ))}
              {/* ADD NFT box */}
              <AddNFTBox onClick={() => toggleCreateNFTModal()} theme={theme}>
                {theme === "dark" ? <AddNFTIcon /> : <AddNFTIconLight />}
              </AddNFTBox>
              {/* ADD NFT box */}
            </Box>
            {/* social icons */}
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 30,
              }}
            >
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
              <Button
                style={{
                  width: "127px",
                  height: "34px",
                  background:
                    theme === "dark"
                      ? "transparent linear-gradient(107deg, #D3B651 0%, #F3DF8E 55%, #C77131 100%) 0% 0% no-repeat padding-box"
                      : "#6C26B1 0% 0% no-repeat padding-box",
                  boxShadow: "0px 13px 34px #F0D87B1A",
                  borderRadius: "8px",
                  opacity: 1,
                  color: theme === "dark" ? "black" : "white",
                  marginTop: 20,
                  textTransform: "none",
                  marginBottom: 20,
                }}
                onClick={toggleEditSocialModal}
              >
                Edit Socials
              </Button>
            </Box>
            {/* social icons */}
            <GoldDivider theme={theme} />
          </ProfileWrapper>
        </Box>
        <Box style={{ marginTop: "20px" }}>
          <GoldDivider theme={theme} />
        </Box>
      </BlackBackground>
    </div>
  );
}
