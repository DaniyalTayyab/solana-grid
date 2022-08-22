import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  CoutnerWrapper,
  CounterBox,
  Variant,
  Balance,
  CountButtons,
  Counter,
} from "./MintCounter.styles";

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
      <Variant
        style={{
          color: theme === "dark" ? "#303030" : "white",
        }}
      >
        {variant}
      </Variant>
      <Balance>{balance}</Balance>
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
        <CounterBox
          style={{
            background:
              "transparent linear-gradient(180deg, #FFFFFF 0%, #808080 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <CountButtons
            onClick={() => setCount((count) => (count > 1 ? count - 1 : 0))}
          >
            -
          </CountButtons>
          <Divider
            orientation="vertical"
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <Counter>{count}</Counter>
          <Divider
            orientation="vertical"
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <CountButtons
            onClick={() => setCount((count) => (count < 3 ? count + 1 : count))}
          >
            +
          </CountButtons>
        </CounterBox>
      </div>
    </CoutnerWrapper>
  );
}

export default MintCounter;
