import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  margin: '10px',
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.grey.A400,
  borderRadius: 15,
}));

export const PrimaryCard = ({ children }: any) => (
  <RootStyle>{children}</RootStyle>
);

export default {};
