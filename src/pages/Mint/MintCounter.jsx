import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CoutnerWrapper } from "./MintCounter.styles";

function MintCounter(props) {
  const { variant, balance } = props;
  const [count, setCount] = useState(0);
  const theme = useSelector((state) => state.theme.value);
  return (
    <CoutnerWrapper
      style={{
        background:
          theme === "dark"
            ? "transparent linear-gradient(129deg, #D3B651 0%, #F0D87B 46%, #C77131 100%) 0% 0% no-repeat padding-box"
            : "transparent linear-gradient(129deg, #6C26B1 0%, #6C26B1 100%) 0% 0% no-repeat padding-box",
      }}
      {...props}
    >
      <Box
        style={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          font: "normal normal 600 26px/32px Poppins",
          letterSpacing: "0px",
          color: theme === "dark" ? "#303030" : "white",
          opacity: 0.9,
          // fontSize: "22px",
          fontSize: "16px",
        }}
      >
        {variant}
      </Box>
      <Box
        style={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          font: "normal normal normal 26px/32px Roboto",
          letterSpacing: "0.65px",
          color: "#FFFFFF",
          opacity: 1,
          marginTop: "6px",
          // fontSize: "20px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {balance}
      </Box>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: 25,
          marginTop: 10,
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // width: "188px",
            // height: "40px",
            width: "160px",
            height: "35px",
            marginTop: "17px",
            background:
              "transparent linear-gradient(180deg, #FFFFFF 0%, #808080 100%) 0% 0% no-repeat padding-box",
            boxShadow: "0px 3px 15px #00000040",
            borderRadius: "10px",
            opacity: 0.8,
            textAlign: "left",
            font: "normal normal normal 26px/32px Roboto",
            letterSpacing: "0.65px",
            color: "#105372",
          }}
        >
          <button
            onClick={() => setCount((count) => (count > 1 ? count - 1 : 0))}
            style={{
              background: "transparent",
              border: "none",
              marginRight: "10px",
              textAlign: "left",
              font: "normal normal normal 26px/32px Roboto",
              letterSpacing: "0.65px",
              color: "#105372",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          >
            -
          </button>
          <Divider
            orientation="vertical"
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <div
            style={{
              width: "60%",
              display: "grid",
              placeItems: "center",
              fontSize: "18px",
            }}
          >
            {count}
          </div>
          <Divider
            orientation="vertical"
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <button
            onClick={() => setCount((count) => (count < 3 ? count + 1 : count))}
            style={{
              cursor: "pointer",
              background: "transparent",
              border: "none",
              marginLeft: "10px",
              textAlign: "left",
              font: "normal normal normal 26px/32px Roboto",
              letterSpacing: "0.65px",
              color: "#105372",
              marginRight: "10px",
            }}
          >
            +
          </button>
        </Box>
      </div>
    </CoutnerWrapper>
  );
}

export default MintCounter;
