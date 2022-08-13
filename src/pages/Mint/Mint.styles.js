import styled from "@emotion/styled";

export const CounterBox = styled.div`
  display: flex;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: space-evenly;
  }
`;

export const MintWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1280px) {
    height: auto;
  }
`;

export const MaxTransaction = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
