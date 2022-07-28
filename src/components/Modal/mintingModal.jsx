import { Fade, Modal } from '@mui/material';
import { Box } from '@mui/system';
import {
  GradientBackgroundBox,
  MintingInPrcessText,
  MintModalWrapper,
  ProgressBarContainer,
  ProgressText,
  ProgressTextCompleted,
  ViewTransactionButton,
} from './modal.styles';
import axios from 'axios';

function MintModal(props) {
  const { open, closeModal, theme } = props;
  const startMint = () => {
    axios.get('dummyroute.solidity.com/test').then((res) => {
      console.log(res);
    });
  };
  return (
    <Modal
      open={open}
      onClose={() => closeModal()}
      closeAfterTransition
      disableAutoFocus
    >
      <Fade in={open}>
        <MintModalWrapper theme={theme}>
          <MintingInPrcessText theme={theme}>
            Minting in Process
          </MintingInPrcessText>
          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <GradientBackgroundBox theme={theme} />
            <ProgressBarContainer theme={theme}>
              <ProgressText theme={theme}>0</ProgressText>
              <ProgressTextCompleted theme={theme}>100</ProgressTextCompleted>
            </ProgressBarContainer>
          </Box>
          <ViewTransactionButton theme={theme} onClick={() => startMint()}>
            View Transaction
          </ViewTransactionButton>
        </MintModalWrapper>
      </Fade>
    </Modal>
  );
}

export default MintModal;
