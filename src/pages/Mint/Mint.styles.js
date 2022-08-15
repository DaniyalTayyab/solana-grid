import styled from "@emotion/styled";

export const CounterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(2, 179px); */
  grid-template-rows: repeat(2, 150px);
  /* grid-column-gap: 65px;
  grid-row-gap: 40px; */
  grid-column-gap: 45px;
  grid-row-gap: 20px;
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

export const MaxTransaction = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
