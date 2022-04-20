import { styled } from '@mui/material/styles';
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface IButton extends ButtonProps {
  myColor: string;
}

const MyButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== '#cdcdcd',
})<IButton>(({ myColor, theme }) => ({
  width: 300,
  margin: 1,
  background: myColor,
  color: theme.palette.primary.main,
}));

export const CustomButton = ({ onClick, children }: any) => (
  <MyButton onClick={onClick} myColor="#334993">
    {children}
  </MyButton>
);

export default {};
