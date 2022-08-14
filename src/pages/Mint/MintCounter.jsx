import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function MintCounter(props) {
  const { variant, balance } = props;
  const [count, setCount] = useState(0);
  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      style={{
        padding: "10px 20px",
        width: "236px",
        height: "156px",
        marginRight: "7px",
        background:
          theme === "dark"
            ? "transparent linear-gradient(129deg, #D3B651 0%, #F0D87B 46%, #C77131 100%) 0% 0% no-repeat padding-box"
            : "transparent linear-gradient(129deg, #6C26B1 0%, #6C26B1 100%) 0% 0% no-repeat padding-box",
        boxShadow: "0px 10px 20px #00000029",
        border: "1px solid #707070",
        borderRadius: "20px",
        opacity: 1,
        display: "flex",
        flexDirection: "column",
        marginTop: "30px",
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
          marginTop: 10,
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
          marginTop: 30,
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "198px",
            height: "45px",
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
          <div style={{ width: "60%", display: "grid", placeItems: "center" }}>
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
    </div>
  );
}

export default MintCounter;
