/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp } from '@firebase/firestore';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TextField } from '@mui/material';
// import { v4 as uuid } from 'uuid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppSelector } from '../../store/hooks';
import { db } from '../../firebase-config';
// import DraftTextEditor from '../../components/draft-js/DraftTextEditor';
// import NewChessImg from '../../assets/chess-img.jpeg';

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

  @media (max-width: 767px) {
    min-width: auto;
  }
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
const RulesWrap = styled.div``;

const Rules = styled.p``;

const AdminPanel = () => {
  const history = useHistory();
  // const dispatch = useAppDispatch();
  const { username1, password1 } = useAppSelector((state) => state.adminState);
  const { adminPanelData } = useAppSelector((state) => state.adminState);
  const [heading, setHeading] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tag, setTag] = useState<string>('');

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

  const aktivnostiCollectionRef = collection(db, 'aktivnosti');
  const najaveCollectionRef = collection(db, 'najave');
  const skolaCollectionRef = collection(db, 'skola');

  const handleTagChange = (e: SelectChangeEvent) => {
    setTag(e.target.value as string);
  };

  const addNewPostToDatabaseAktivnostiCollection = async () => {
    await addDoc(aktivnostiCollectionRef, {
      // id: uuid(),
      date: new Date().toLocaleString(),
      createdAt: serverTimestamp(),
      tag,
      heading,
      description,
      img: '',
      img_2: '',
      img_3: '',
      img_4: '',
      img_5: '',
      img_6: '',
      img_7: '',
      img_8: '',
      img_9: '',
      img_10: '',
    });
  };

  const addNewPostToDatabaseSkolaCollection = async () => {
    await addDoc(skolaCollectionRef, {
      // id: uuid(),
      date: new Date().toLocaleString(),
      createdAt: serverTimestamp(),
      tag,
      heading,
      description,
      img: '',
      img_2: '',
      img_3: '',
      img_4: '',
      img_5: '',
      img_6: '',
      img_7: '',
      img_8: '',
      img_9: '',
      img_10: '',
    });
  };

  const addNewPostToDatabaseNajaveCollection = async () => {
    await addDoc(najaveCollectionRef, {
      // id: uuid(),
      date: new Date().toLocaleString(),
      createdAt: serverTimestamp(),
      tag,
      heading,
      description,
      img: '',
      img_2: '',
      img_3: '',
      img_4: '',
      img_5: '',
      img_6: '',
      img_7: '',
      img_8: '',
      img_9: '',
      img_10: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tag === 'aktivnosti') {
      addNewPostToDatabaseAktivnostiCollection();
    } else if (tag === 'najave') {
      addNewPostToDatabaseNajaveCollection();
    } else {
      addNewPostToDatabaseSkolaCollection();
    }

    setHeading('');
    setDescription('');
    setTag('');
  };

  return (
    <>
      <Wrapper>
        WELCOME TO ADMIN PANEL
        <RulesWrap>
          <Rules>Break line: &lt;/br&gt;</Rules>
          <Rules>
            Bold text: &lt;b&gt; tekst koji treba biti boldiran ide ovdje u
            sredinu &lt;/b&gt;
          </Rules>
          <Rules>
            Link: &lt;a href=&apos;url linka ovdje&apos;&gt; u sredinu tekst
            koji ce biti prikazan umjesto linka ili ponovo zalijepiti link
            &lt;/a&gt;
          </Rules>
        </RulesWrap>
        <FormHolder>
          <Form onSubmit={handleSubmit}>
            <Para>Objavi novi post</Para>

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Tag objave
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tag}
                  label="Tag Objave"
                  onChange={handleTagChange}
                >
                  <MenuItem value="najave">Najave turnira</MenuItem>
                  <MenuItem value="aktivnosti">Nase aktivnosti</MenuItem>
                  <MenuItem value="skola">Skola saha</MenuItem>
                </Select>
              </FormControl>
            </Box>

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

            {/* <div>Text editor wrapper</div>
            <DraftTextEditor />
            <div>Text editor end wrapping</div> */}

            <Button>Objavi</Button>
          </Form>
        </FormHolder>
      </Wrapper>
    </>
  );
};

export default AdminPanel;
