import { styled } from '@mui/material/styles';

const RootStyle = styled('div')(({ theme }) => ({
  boxShadow: 'initial',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  margin: '10px',
  width: 'maxWidth',
  color: theme.palette.error.dark,
  backgroundColor: theme.palette.grey.A400,
  borderRadius: 15,
}));

export default RootStyle;
