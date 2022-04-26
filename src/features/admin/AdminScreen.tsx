/* eslint-disable no-alert */
import React, { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { validationData } from './AdminSlice';

const FormHolder = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  max-width: 500px;
  margin: 100px 0;
`;
const Para = styled.p`
  text-transform: uppercase;
  font-weight: 600;
`;

const inputLabelColor = {
  style: {
    color: '#000',
  },
};
const Button = styled.button`
  background: #a2d1e0;
  border: none;
  padding: 12px 42px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  font-size: 18px;

  :hover {
    background: #93b8c4;
  }
`;

const AdminScreen: FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { username1, password1 } = useAppSelector((state) => state.adminState);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleAdminValidation = () => {
    if (username1 === username && password1 === password) {
      setUsername('');
      setPassword('');
      history.push('/admin-panel');
    } else {
      alert('Not a valid username or password');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(validationData({ username, password }));
    handleAdminValidation();
  };

  return (
    <>
      <FormHolder>
        <Form onSubmit={handleSubmit}>
          <Para>Log in to Admin Panel</Para>
          <TextField
            placeholder="Username"
            type="text"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            InputLabelProps={inputLabelColor}
            sx={{
              minWidth: '470px',
              borderBottom: '#000',
            }}
          />

          <TextField
            placeholder="Password"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputLabelProps={inputLabelColor}
            sx={{ minWidth: '470px', borderBottom: '#000', margin: '10px 0' }}
          />
          <Button>Log In</Button>
        </Form>
      </FormHolder>
    </>
  );
};

export default AdminScreen;
