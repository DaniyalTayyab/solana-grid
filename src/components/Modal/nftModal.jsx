import { InputUnstyled } from '@mui/base';
import { Fade, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import UploadIcon from '../../assets/svg-icons/UploadIcon';
import UploadLight from '../../assets/svg-icons/UploadLight';
import { GoldDivider } from '../../pages/Home/home.styles';
import {
  BioInputComponent,
  DoneButton,
  InputComponent,
  UploadButton,
} from './modal.styles';

const textStyle = {
  textAlign: 'left',
  font: 'normal normal normal 22px/24px Poppins',
  fontWeight: 'medium',
  letterSpacing: '0px',
  color: '#FFFFFF',
  opacity: 1,
  width: 70,
  marginRight: 15,
};
function NftModal(props) {
  const { open, closeModal, theme, createNFT } = props;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 794,
    minHeight: 794,
    background:
      theme === 'dark'
        ? 'transparent linear-gradient(180deg, #132842 0%, #136687 48%, #042036 100%) 0% 0% no-repeat padding-box'
        : 'transparent linear-gradient(180deg, #C2589B 0%, #5E47B3 100%) 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '10px',
    opacity: 1,
  };
  return (
    <Modal
      open={open}
      onClose={() => closeModal()}
      closeAfterTransition
      disableAutoFocus
    >
      <Fade in={open}>
        <Box style={style}>
          <Box
            style={{
              height: '104px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 24,
              }}
            >
              <Typography
                style={{
                  textAlign: 'left',
                  font: 'normal normal normal 34px/45px Roboto',
                  letterSpacing: '0px',
                  color: theme === 'dark' ? '#E1C869' : 'white',
                  opacity: 1,
                }}
              >
                NFT ID:
              </Typography>
              <Typography
                style={{
                  textAlign: 'left',
                  font: 'normal normal normal 34px/45px Roboto',
                  letterSpacing: '0px',
                  color: theme === 'dark' ? '#E1C869' : 'white',
                  opacity: 1,
                }}
              >
                150156
              </Typography>
              {/* <Box style={{ marginLeft: 'auto' }}>
                <CloseIcon />
              </Box> */}
            </Box>
            <Box style={{ width: '348px', marginTop: 27 }}>
              <GoldDivider height='3px' theme={theme} />
            </Box>
          </Box>

          <Box
            style={{
              marginTop: 100,

              display: 'flex',
              flexDirectiom: 'row',
              height: 357,
            }}
          >
            <Box
              id='left-form'
              style={{
                width: 463,

                height: '100%',
                paddingLeft: 56,
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 25,
                }}
              >
                <Typography style={textStyle}>Name:</Typography>
                <InputUnstyled
                  components={{ Input: InputComponent }}
                  placeholder='Name'
                />
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 25,
                }}
              >
                <Typography style={textStyle}>Bio:</Typography>
                <InputUnstyled
                  components={{ Input: BioInputComponent }}
                  placeholder='Bio'
                />
              </Box>{' '}
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Typography style={textStyle}>Link:</Typography>
                <InputUnstyled
                  components={{ Input: InputComponent }}
                  placeholder='Link'
                />
              </Box>
            </Box>
            <Box
              id='right-form'
              style={{
                height: '100%',
                width: 331,
                display: 'flex',
                flexDirection: 'column',

                alignItems: 'center',
              }}
            >
              <Box
                style={{
                  width: 279,
                  height: 271,
                  background: '#737373 0% 0% no-repeat padding-box',
                  boxShadow: '0px 10px 20px #00000040',
                  borderRadius: '10px',
                  opacity: 1,
                }}
              />
              <label htmlFor='upload-button' style={{ paddingTop: 37 }}>
                <input
                  type='file'
                  style={{ display: 'none' }}
                  id='upload-button'
                />
                <UploadButton
                  startIcon={
                    theme === 'dark' ? <UploadIcon /> : <UploadLight />
                  }
                  theme={theme}
                >
                  Upload Image
                </UploadButton>
              </label>
            </Box>
          </Box>
          {/* end */}
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 100,
            }}
          >
            <DoneButton
              onClick={() => {
                closeModal();
                createNFT();
              }}
              theme={theme}
            >
              Done
            </DoneButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default NftModal;
