/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  padding: 20px;
`;
const Paragraph = styled.p`
  color: #000;
  font-size: 22px;
`;
const Icons = styled.div`
  display: flex;
`;
const IconButton = styled.a`
  cursor: pointer;
  background: none;
  border: none;
  transition: all 0.5s ease;
  color: #4267b2;
  :hover {
    color: #405de6;
  }
  svg {
    font-size: 40px;
  }
`;

const ContactScreen: FC = () => (
  <ContactWrapper>
    <Icons>
      <IconButton
        href="https://www.facebook.com/%C5%A0K-Kozara-Gradi%C5%A1ka-104948812039944"
        target="_blank"
      >
        <FacebookIcon sx={{ fontSize: '22px' }} />
      </IconButton>
      <IconButton
        style={{ color: '#C13584' }}
        href="https://www.google.com/"
        target="_blank"
      >
        <InstagramIcon sx={{ fontSize: '22px' }} />
      </IconButton>
    </Icons>
    <Paragraph>
      Sahovski klub <span style={{ fontWeight: 600 }}>Kozara</span> Gradiska je
      sportska organizacija koja se bavi organizacijom takmicenja i promocijom
      sahovske igre. Nas cilj je predstaviti nas rad i objavljivati infromacije
      o sahu.
    </Paragraph>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.023108957016!2d17.251272615288325!3d45.146128262631905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47675e9df4c2a83b%3A0x7335812576d31e53!2sMitropolita%20Georgija%20Nikolajevi%C4%87a%2022%2C%20Gradi%C5%A1ka%2078400!5e0!3m2!1shr!2sba!4v1650281944478!5m2!1shr!2sba"
      width="800"
      height="530"
      title="Sk kozara"
      loading="lazy"
    />
  </ContactWrapper>
);

export default ContactScreen;
