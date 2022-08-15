import styled from "@emotion/styled";
export const GoldDivider = styled.div`
  height: ${(props) => (props.height ? props.height : "5px")};
  width: 100%;
  background: ${(props) =>
    props.theme === "dark"
      ? "transparent linear-gradient(90deg, #C4AB8E 0%, #DECAA9 20%, #C7A04B 46%, #C67B3B 69%, #F0D580 90%, #D5B139 100%) 0% 0% no-repeat padding-box"
      : "transparent linear-gradient(90deg, #FED4E7 0%, #A03D7B 100%) 0% 0% no-repeat padding-box"};
  margin-top: ${(props) => props.marginTop};
`;

export const TileCanvas = styled("div")({
  width: 1802,
  minHeight: 1122,

  position: "relative",
});

export const CanvasWrapper = styled("div")((props) => ({
  backgroundImage:
    props.theme === "dark"
      ? "url(/background.png)"
      : "url(/background-light.png)",
  display: "grid",
  placeItems: "center",
}));
