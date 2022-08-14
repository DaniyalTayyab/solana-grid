import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BuyButton } from "../Footer/footer.styles";

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

export const MintModalWrapper = styled(Box)((props) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1078px",
  height: "543px",
  background:
    props.theme === "dark"
      ? "transparent linear-gradient(110deg, #132842 0%, #136587 48%, #052137 100%) 0% 0% no-repeat padding-box"
      : "transparent linear-gradient(120deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box",
  boxShadow: "0px 10px 15px #00000029",
  borderRadius: "15px",
  opacity: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const ProgressText = styled("p")((props) => ({
  textAlign: "left",
  font: "normal normal normal 25px/33px Roboto",
  letterSpacing: "0px",
  color: props.theme === "dark" ? "#E1C869" : "white",
  opacity: 1,
}));

export const ProgressTextCompleted = styled("p")((props) => ({
  marginLeft: "auto",
  textAlign: "left",
  font: "normal normal normal 25px/33px Roboto",
  letterSpacing: "0px",
  color: props.theme === "dark" ? "#E1C869" : "white",
  opacity: 1,
}));

export const MintingInPrcessText = styled(Typography)((props) => ({
  textAlign: "left",
  font: "normal normal bold 42px/55px Roboto",
  letterSpacing: "0px",
  color: props.theme === "dark" ? "#E1C869" : "white",
  opacity: 1,
  marginTop: 90,
}));

export const GradientBackgroundBox = styled(Box)((props) => ({
  width: "872px",
  height: "21px",
  background:
    props.theme === "dark"
      ? "transparent linear-gradient(90deg, #D3B651 0%, #F0D87B 34%, #C77131 63%, #C77131 100%) 0% 0% no-repeat padding-box"
      : " transparent linear-gradient(90deg, #ECCBE6 0%, #CB96C0 23%, #C2589B 63%, #5E47B3 100%) 0% 0% no-repeat padding-box",
  borderRadius: "10px",
  opacity: 1,
  marginTop: 90,
}));

export const ProgressBarContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const ViewTransactionButton = styled(BuyButton)({
  borderRadius: "56px",
  marginTop: "auto",
  marginBottom: 50,
  boxShadow: "0px 31px 19px #00000045",
});

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
