import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.theme === 'dark'
      ? 'transparent linear-gradient(111deg, #132842 0%, #136587 48%, #052137 100%) 0% 0% no-repeat padding-box'
      : 'transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box'};
  border-radius: 10px;
  width: 81%;
  // min-height: 843px;
  margin-top: 75px;
  margin-bottom: 75px;
  padding-left: 67px;
  padding-right: 67px;
  padding-bottom: 48px;
`;
export const AddNFTBox = styled.div`
  cursor: pointer;
  width: 346px;
  height: 437px;
  /* UI Properties */
  background: ${(props) =>
    props.theme === 'dark' ? '#0a0a0a 0% 0% no-repeat padding-box' : 'white'};
  display: grid;
  place-items: center;
  border-radius: 10px;
  margin-right: 20px;
  margin-top: 20px;
`;
