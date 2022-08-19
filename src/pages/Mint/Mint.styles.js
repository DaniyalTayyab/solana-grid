import styled from "@emotion/styled";

export const CounterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(2, 179px); */
  grid-template-rows: repeat(2, 150px);
  /* grid-column-gap: 65px;
  grid-row-gap: 40px; */
  grid-column-gap: 65px;
  grid-row-gap: 60px;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
  }
`;

export const MintWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 540px;
  min-height: 540px;

  @media screen and (max-width: 1280px) {
    height: auto;
  }
`;

export const MintProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) =>
    props.theme === "dark"
      ? "transparent linear-gradient(111deg, #132842 0%, #136587 48%, #052137 100%) 0% 0% no-repeat padding-box"
      : "transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box"};
  border-radius: 10px;
  width: 71%;
  /* min-height: 520px; */
  min-height: 72.08vh;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 67px;
  padding-right: 67px;

  @media screen and (max-width: 768px) {
    width: 500px;
    padding-bottom: 20px;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

export const MaxTransaction = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
