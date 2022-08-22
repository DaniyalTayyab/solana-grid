import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { MintButton } from "./Mint.styles";
import Header from "../../components/Header/Header";
import MintModal from "../../components/Modal/mintingModal";
import { GoldDivider } from "../Home/home.styles";
import { MintProfileWrapper, TotalPrice } from "./Mint.styles";
import MintCounter from "./MintCounter";
import {
  CounterBox,
  MintWrapper,
  MaxTransaction,
  TotalPriceLine,
} from "./Mint.styles";
import { Overlay } from "../../components/Modal/modal.styles";

function Mint() {
  const [mintingModal, setMintingModal] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  return (
    <Box>
      <MintModal
        theme={theme}
        open={mintingModal}
        closeModal={() => setMintingModal(false)}
      />
      <Box>
        <Header profileScreen />
      </Box>
      <GoldDivider theme={theme} />
      <MintWrapper
        style={{
          position: "relative",
          backgroundImage:
            theme === "dark"
              ? "url(/background.png)"
              : "url(/background-light.png)",
        }}
      >
        <Overlay open={mintingModal} />
        <MintProfileWrapper theme={theme}>
          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              font: "normal normal normal 38px/50px Roboto",
              fontWeight: "medium",
              letterSpacing: "0px",
              color: theme === "dark" ? "#E1C869" : "white",
              opacity: 1,
            }}
          >
            <MaxTransaction> Max Mint per Transaction : 5</MaxTransaction>
            <CounterBox>
              <MintCounter variant="Small" balance="0.001 SOL" />
              <MintCounter variant="Medium" balance="0.001 SOL" />
              <MintCounter variant="Large" balance="0.001 SOL" />
              <MintCounter variant="Mega" balance="0.001 SOL" />
            </CounterBox>
            <TotalPrice>
              Total Price:
              <TotalPriceLine></TotalPriceLine>
            </TotalPrice>
            <GoldDivider
              height="4px"
              theme={theme}
              style={{ marginTop: "3px" }}
            />
            <MintButton
              style={{ borderRadius: "56px" }}
              onClick={() => setMintingModal(true)}
              theme={theme}
            >
              Mint Now
            </MintButton>
          </Box>
        </MintProfileWrapper>
        <Box style={{ marginTop: "0", width: "100%" }}>
          <GoldDivider theme={theme} />
          <Footer />
        </Box>
      </MintWrapper>
    </Box>
  );
}

export default Mint;
