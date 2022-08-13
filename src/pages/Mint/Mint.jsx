import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { BuyButton } from "../../components/Footer/footer.styles";
import Header from "../../components/Header/Header";
import MintModal from "../../components/Modal/mintingModal";
import { GoldDivider } from "../Home/home.styles";
import { ProfileWrapper } from "../Profile/profile.styles";
import MintCounter from "./MintCounter";
import { CounterBox, MintWrapper, MaxTransaction } from "./Mint.styles";

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
          backgroundImage:
            theme === "dark"
              ? "url(/background.png)"
              : "url(/background-light.png)",
        }}
      >
        <ProfileWrapper theme={theme}>
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
            <Box>
              Total Price{" "}
              <span style={{ textDecoration: "underline", marginLeft: 20 }}>
                {" "}
                200$
              </span>
            </Box>
            <GoldDivider height="4px" theme={theme} />
            <BuyButton
              style={{ borderRadius: "56px", marginTop: 10 }}
              onClick={() => setMintingModal(true)}
              theme={theme}
            >
              Mint Now
            </BuyButton>
          </Box>
        </ProfileWrapper>
        <Box style={{ marginTop: "0", width: "100%" }}>
          <GoldDivider theme={theme} />
          <Footer />
        </Box>
      </MintWrapper>
    </Box>
  );
}

export default Mint;
