import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Popup from "../../components/Popup/Popup";
import SidePanel from "../../components/SidePanel/SidePanel";
import Tile from "../../components/Tile/Tile";
import { tileData } from "../../utils/tileArray";
import { CanvasWrapper, GoldDivider, TileCanvas } from "./home.styles";
import axios from "axios";

export default function Home() {
  //basic states
  const theme = useSelector((state) => state.theme.value);
  const [sidePanel, setSidePanel] = useState(false);
  const [popup, setPopup] = useState(null);
  const [boxSize, setBoxSize] = useState("small");

  const toggleSideDrawer = (type) => {
    setSidePanel(!sidePanel);
    setBoxSize(type);
  };

  const handleHover = (event) => {
    setPopup(event.currentTarget);

  };
  const closePopup = () => setPopup(false);
  useEffect(() => {
    axios.get("dummyroute.solidity.com/test").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Box>
      <SidePanel
        theme={theme}
        toggleDrawer={() => toggleSideDrawer()}
        sidePanel={sidePanel}
        boxSize={boxSize}
      />
      <Popup popup={popup} theme={theme} closePopup={() => closePopup()} boxSize={boxSize} />
      <Box>
        <Header />
      </Box>

      <CanvasWrapper theme={theme}>
        <div
          style={{
            width: "95%",
            height: 1122,
            overflow: "scroll",
            border:
              theme === "dark" ? "1px solid #F9ECB8" : "1px solid #5E47B3",
            marginTop: 60,
            marginBottom: 60,
          }}
        >
          {" "}
          <TileCanvas>
            {tileData.map((obj, index) => (
              <Tile
                theme={theme}
                key={`item${index}`}
                type={obj.type}
                coordinates={obj.coordinates}
                occupied={obj.occupied}
                url={obj.url}
                index={index}
                toggleSideDrawer={toggleSideDrawer}
                handleHover={handleHover}
               
              />
            ))}
          </TileCanvas>
        </div>
        <GoldDivider theme={theme} />
        <Footer />
      </CanvasWrapper>
    </Box>
  );
}
