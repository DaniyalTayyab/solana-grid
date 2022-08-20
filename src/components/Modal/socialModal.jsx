import { Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  MintingInPrcessText,
  SocialModalWrapper,

  StyledInput,
  SaveButton,
} from "./modal.styles";
import axios from "axios";
import TwitterGoldIcon from "../../assets/svg-icons/TwitterGoldIcon";
import TwitterIconLight from "../../assets/svg-icons/TwitterIcon_light";
import DiscordGoldIcon from "../../assets/svg-icons/DiscordGoldIcon";
import DiscordLight from "../../assets/svg-icons/DiscordIcon_light";
import InstagramIcon from "../../assets/svg-icons/InstagramIcon";
import InstagramIconLight from "../../assets/svg-icons/InstagramIcon_light";

function SocialModal(props) {
  const { open, closeModal, theme } = props;
  const startMint = () => {
    axios.get("dummyroute.solidity.com/test").then((res) => {
      console.log(res);
    });
  };
  return (
    <Modal
      open={open}
      onClose={() => closeModal()}
      closeAfterTransition
      disableAutoFocus
    >
      <Fade in={open} >
        <SocialModalWrapper
          theme={theme}
          style={{
            // height: "350px",
            justifyContent: "flex-start",
            background:
              theme === "dark"
                ? "transparent linear-gradient(180deg, #132842 0%, #136687 48%, #042036 100%) 0% 0% no-repeat padding-box"
                : "transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <Typography
            style={{
              position: "absolute",
              top: "15px",
              right: "25px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#fff",
            }}
            onClick={() => closeModal()}
          >
            x
          </Typography>
          <MintingInPrcessText
            theme={theme}
            style={{
              fontSize: "25px",
              marginBottom: "10px",
              marginTop: "0",
              color: props.theme === "dark" ? "#E1C869" : "white",
            }}
          >
            Your Socials
          </MintingInPrcessText>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "500px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {theme === "dark" ? <TwitterGoldIcon /> : <TwitterIconLight />}
              <Box
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                :
              </Box>
              <StyledInput type="text" />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {theme === "dark" ? (
                <InstagramIcon style={{ height: "20px" }} />
              ) : (
                <InstagramIconLight />
              )}
              <Box
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                :
              </Box>
              <StyledInput type="text" />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {theme === "dark" ? <DiscordGoldIcon /> : <DiscordLight />}
              <Box
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                :
              </Box>
              <StyledInput type="text" />
            </Box>
          </Box>
          <SaveButton
            theme={theme}
            onClick={() => startMint()}
            // style={{ marginTop: "20px", padding: "15px", marginBottom: "20px" }}
          >
            Save
          </SaveButton>
        </SocialModalWrapper>
      </Fade>
    </Modal>
  );
}

export default SocialModal;
