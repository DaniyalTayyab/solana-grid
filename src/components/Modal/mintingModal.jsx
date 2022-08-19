import { Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";
import {
  GradientBackgroundBox,
  MintingInPrcessText,
  MintModalWrapper,
  ProgressBarContainer,
  ProgressText,
  ProgressTextCompleted,
  ViewTransactionButton,
} from "./modal.styles";
import axios from "axios";

function MintModal(props) {
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
      <Fade in={open}>
        <MintModalWrapper
          theme={theme}
          style={{
            background:
              theme === "dark"
                ? "transparent linear-gradient(180deg, #132842 0%, #136687 48%, #042036 100%) 0% 0% no-repeat padding-box"
                : "transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box",
          }}
        >
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
          <MintingInPrcessText
            theme={theme}
            style={{
              color: props.theme === "dark" ? "#E1C869" : "white",
            }}
          >
            Minting in Process
          </MintingInPrcessText>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GradientBackgroundBox
              theme={theme}
              style={{
                background:
                  props.theme === "dark"
                    ? "transparent linear-gradient(90deg, #D3B651 0%, #F0D87B 34%, #C77131 63%, #C77131 100%) 0% 0% no-repeat padding-box"
                    : " transparent linear-gradient(90deg, #ECCBE6 0%, #CB96C0 23%, #C2589B 63%, #5E47B3 100%) 0% 0% no-repeat padding-box",
              }}
            />
            <ProgressBarContainer theme={theme}>
              <ProgressText theme={theme}>0</ProgressText>
              <ProgressTextCompleted theme={theme}>100</ProgressTextCompleted>
            </ProgressBarContainer>
          </Box>
          <ViewTransactionButton theme={theme} onClick={() => startMint()}>
            View Transaction
          </ViewTransactionButton>
        </MintModalWrapper>
      </Fade>
    </Modal>
  );
}

export default MintModal;
