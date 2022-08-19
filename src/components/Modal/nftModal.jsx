import { InputUnstyled } from "@mui/base";
import { Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UploadIcon from "../../assets/svg-icons/UploadIcon";
import UploadLight from "../../assets/svg-icons/UploadLight";
import { GoldDivider } from "../../pages/Home/home.styles";
import {
  BioInputComponent,
  DoneButton,
  InputComponent,
  UploadButton,
  NFTModalWrapper,
  NFTFormWrapper,
  RightFormContainer,
  GoldDividerBox,
  LeftFormContainer,
  FormTitle,
  FormInput,
} from "./modal.styles";

const textStyle = {
  textAlign: "left",
  font: "normal normal normal 22px/24px Poppins",
  fontWeight: "medium",
  letterSpacing: "0px",
  color: "#FFFFFF",
  opacity: 1,
  width: 70,
  marginRight: 15,
};
function NftModal(props) {
  const { open, closeModal, theme, createNFT } = props;
  const style = {
    background:
      theme === "dark"
        ? "transparent linear-gradient(180deg, #132842 0%, #136687 48%, #042036 100%) 0% 0% no-repeat padding-box"
        : "transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box",
  };
  return (
    <Modal
      open={open}
      onClose={() => closeModal()}
      closeAfterTransition
      disableAutoFocus
    >
      <Fade in={open}>
        <NFTModalWrapper style={style}>
          <span
            onClick={() => closeModal()}
            style={{
              color: "#fff",
              fontSize: "22px",
              fontWeight: "bold",
              position: "absolute",
              top: "15px",
              right: "30px",
              cursor: "pointer",
            }}
          >
            x
          </span>
          <Box
            style={{
              height: "104px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 24,
              }}
            >
              <Typography
                style={{
                  textAlign: "left",
                  font: "normal normal normal 24px/35px Roboto",
                  letterSpacing: "0px",
                  color: theme === "dark" ? "#E1C869" : "white",
                  opacity: 1,
                }}
              >
                NFT ID:
              </Typography>
              <Typography
                style={{
                  textAlign: "left",
                  font: "normal normal normal 24px/35px Roboto",
                  letterSpacing: "0px",
                  color: theme === "dark" ? "#E1C869" : "white",
                  opacity: 1,
                }}
              >
                150156
              </Typography>
              {/* <Box style={{ marginLeft: "auto" }}>
                <CloseIcon />
              </Box> */}
            </Box>
            <GoldDividerBox>
              <GoldDivider height="3px" theme={theme} />
            </GoldDividerBox>
          </Box>

          <NFTFormWrapper>
            <LeftFormContainer
              id="left-form"
              // style={{
              //   width: 463,
              //   height: "100%",
              //   paddingLeft: 56,
              // }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <FormTitle>Name:</FormTitle>
                <FormInput
                  components={{ Input: InputComponent }}
                  placeholder="Name"
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <FormTitle>Bio:</FormTitle>
                <FormInput
                  components={{ Input: BioInputComponent }}
                  placeholder="Bio"
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FormTitle>Link:</FormTitle>
                <FormInput
                  components={{ Input: InputComponent }}
                  placeholder="Link"
                />
              </Box>
            </LeftFormContainer>
            <RightFormContainer id="right-form">
              <Box
                style={{
                  width: 279,
                  height: 271,
                  background: "#737373 0% 0% no-repeat padding-box",
                  boxShadow: "0px 10px 20px #00000040",
                  borderRadius: "10px",
                  opacity: 1,
                }}
              />
              <label htmlFor="upload-button" style={{ paddingTop: 37 }}>
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="upload-button"
                />
                <UploadButton
                  startIcon={
                    theme === "dark" ? <UploadIcon /> : <UploadLight />
                  }
                  theme={theme}
                >
                  Upload Image
                </UploadButton>
              </label>
            </RightFormContainer>
          </NFTFormWrapper>
          {/* end */}
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <DoneButton
              onClick={() => {
                closeModal();
                createNFT();
              }}
              theme={theme}
            >
              Done
            </DoneButton>
          </Box>
        </NFTModalWrapper>
      </Fade>
    </Modal>
  );
}

export default NftModal;
