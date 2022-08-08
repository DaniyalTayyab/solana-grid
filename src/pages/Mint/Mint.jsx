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
      <Box
        style={{
          width: "100%",
          backgroundImage:
            theme === "dark"
              ? "url(/background.png)"
              : "url(/background-light.png)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProfileWrapper theme={theme}>
          <Box
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              font: "normal normal normal 38px/50px Roboto",
              fontWeight: "medium",
              letterSpacing: "0px",
              color: theme === "dark" ? "#E1C869" : "white",
              opacity: 1,
              marginTop: 15,
              flexDirection: "column",
            }}
          >
            <div> Max Mint per Transaction : 5</div>
            <Box
              style={{
                maxWidth: "900px",

                display: "flex",
                paddingBottom: "40px",
                paddingLeft: "40px",
                paddingRight: "40px",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <MintCounter variant="Small" balance="0.001 SOL" />
              <MintCounter variant="Medium" balance="0.001 SOL" />
              <MintCounter variant="Large" balance="0.001 SOL" />
              <MintCounter variant="Mega" balance="0.001 SOL" />
              <MintCounter variant="Ultra" balance="0.001 SOL" />
            </Box>
            <Box style={{ marginTop: 60, marginBottom: 40 }}>
              Total Price{" "}
              <span style={{ textDecoration: "underline", marginLeft: 20 }}>
                {" "}
                200$
              </span>
            </Box>
            <GoldDivider height="4px" theme={theme} />
            <BuyButton
              style={{ borderRadius: "56px", marginTop: 40 }}
              onClick={() => setMintingModal(true)}
              theme={theme}
            >
              Mint Now
            </BuyButton>
          </Box>
        </ProfileWrapper>
        <Box style={{ marginTop: "auto", width: "100%" }}>
          <GoldDivider theme={theme} />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default Mint;
