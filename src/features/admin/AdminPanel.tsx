/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { AddNewPost } from '../sk-posts/PostsSlice';
import NewChessImg from '../../assets/chess-img.jpeg';

const Wrapper = styled.div`
  max-width: 80%;
  margin: 20px auto;
`;
const FormHolder = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  min-width: 1000px;
  margin: 100px 0;
  display: flex;
  flex-direction: column;
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

const AdminPanel = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { username1, password1 } = useAppSelector((state) => state.adminState);
  const { adminPanelData } = useAppSelector((state) => state.adminState);
  const [heading, setHeading] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleRedirectAdmin = () => {
    if (
      adminPanelData.username !== username1 ||
      adminPanelData.password !== password1
    ) {
      history.push('/admin');
    }
  };

  useEffect(() => {
    handleRedirectAdmin();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      AddNewPost({
        id: uuid(),
        date: new Date().toLocaleString(),
        heading,
        description,
        img: NewChessImg,
      }),
    );

    setHeading('');
    setDescription('');
  };

  return (
    <Wrapper>
      WELCOME TO ADMIN PANEL
      <FormHolder>
        <Form onSubmit={handleSubmit}>
          <Para>Objavi novi post</Para>
          <TextField
            placeholder="Dodaj Naslov"
            type="text"
            label="Dodaj Naslov"
            variant="outlined"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
            rows={2}
            multiline
            InputLabelProps={inputLabelColor}
            sx={{
              minWidth: '600px',
              margin: '10px 0',
            }}
          />

          <TextField
            placeholder="Dodaj opis"
            type="text"
            label="Dodaj opis"
            variant="outlined"
            multiline
            rows={20}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            InputLabelProps={inputLabelColor}
            sx={{ minWidth: '600px', margin: '10px 0' }}
          />
          <Button>Objavi</Button>
        </Form>
      </FormHolder>
    </Wrapper>
  );
};

export default AdminPanel;
