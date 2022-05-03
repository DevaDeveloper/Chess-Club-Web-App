import * as React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  zIndex: 99999,
  borderRadius: '50px',
};
const BtnStyle = styled.button`
  max-width: 30px;
  max-height: 30px;
  background: transparent;
  border: none;
  font-size: 22px;
  cursor: pointer;
  transition: ease 0.4s all;
  &:hover {
    background: #efdbdb;
  }
`;

const Img = styled.img`
  @media (max-width: 767px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

const ImgModal = ({ url, closeModal }) => (
  <div>
    <Box sx={style}>
      <Img
        src={url}
        alt="slika"
        style={{ maxWidth: '700px', maxHeight: '700px' }}
      />
      <BtnStyle onClick={closeModal}>X</BtnStyle>
    </Box>
  </div>
);

export default ImgModal;
