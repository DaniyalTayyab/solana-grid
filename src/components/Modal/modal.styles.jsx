import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BuyButton } from "../Footer/footer.styles";

export const NFTModalWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 794;
  height: 600;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  opacity: 1;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 560px;
  }
`;

export const NFTFormWrapper = styled(Box)`
  margin-top: 50px;
  display: flex;
  height: 357px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

export const RightFormContainer = styled(Box)`
  height: 100%;
  width: 331px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
`;

export const InputComponent = styled.input`
  width: 292px;
  min-height: 45px;
  border: 2px solid #89b0c0;
  border-radius: 10px;
  opacity: 1;
  outline: 0;
  background: transparent;
  text-align: left;
  font: normal normal normal 18px/24px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.5;
  text-indent: 10px;
`;

export const BioInputComponent = styled.input`
  width: 292px;
  min-height: 200px;
  border: 2px solid #89b0c0;
  border-radius: 10px;
  opacity: 1;
  outline: 0;
  background: transparent;
  text-align: left;
  font: normal normal normal 18px/24px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.5;
  text-indent: 10px;
`;
export const UploadButton = styled(Button)(`
  background:${(props) =>
    props.theme === "dark"
      ? "transparent linear-gradient(103deg, #d3b651 0%, #f3df8e 55%, #c77131 100%) 0% 0% no-repeat padding-box"
      : " #6C26B1 0% 0% no-repeat padding-box"};
  box-shadow: 0px 13px 34px #f0d87b1a;
  border-radius: 56px;
  opacity: 1;
  position:relative;
  z-index:5;
  text-transform:none;
  color: white  ;
  width: 185px;
  height: 38px;

 
`);

export const MintModalWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 500px;
  box-shadow: 0px 10px 15px #00000029;
  border-radius: 15px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 560px;
  }
`;

export const ProgressText = styled("p")((props) => ({
  textAlign: "left",
  font: "normal normal normal 25px/33px Roboto",
  letterSpacing: "0px",
  color: props.theme === "dark" ? "#E1C869" : "white",
  opacity: 1,
  marginTop: 2,
}));

export const ProgressTextCompleted = styled("p")((props) => ({
  marginLeft: "auto",
  textAlign: "left",
  font: "normal normal normal 25px/33px Roboto",
  letterSpacing: "0px",
  color: props.theme === "dark" ? "#E1C869" : "white",
  opacity: 1,
  marginTop: 2,
}));

export const MintingInPrcessText = styled(Typography)`
  text-align: left;
  font: normal normal bold 42px/55px Roboto;
  letter-spacing: 0px;
  opacity: 1;
  margin-top: 90px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const GradientBackgroundBox = styled(Box)`
  width: 672px;
  height: 21px;
  border-radius: 10px;
  opacity: 1;
  margin-top: 90px;

  @media screen and (max-width: 768px) {
    width: 530px;
  }
`;

export const ProgressBarContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const ViewTransactionButton = styled(BuyButton)`
  border-radius: 56px;
  margin-top: 50px;
  margin-bottom: 50;
  box-shadow: 0px 31px 19px #00000045;
  padding: 25px 20px;
`;

export const DoneButton = styled(Button)(`
  width: 200px;
  height: 48px;
  background:${(props) =>
    props.theme === "dark"
      ? "transparent linear-gradient(103deg, #d3b651 0%, #f3df8e 55%, #c77131 100%) 0% 0% no-repeat padding-box"
      : " #6C26B1 0% 0% no-repeat padding-box"};
  box-shadow: 0px 13px 34px #f0d87b1a;
  border-radius: 8px;
  opacity: 1;
  text-align: left;
  text-transform:none;
font: normal normal 600 16px/24px Poppins;
letter-spacing: 0px;
color:white;
`);

export const StyledInput = styled.input`
  height: 20px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
  display: ${(props) => (props.open ? "block" : "none")};
`;
