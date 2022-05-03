import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import ImgModal from '../../components/imgModal/ImgModal';
// import { PostData } from './PostScreen';

const PostHolder = styled.div`
  border: none;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 30px;
  margin: 10px 0;
  overflow-y: scroll;
  height: 100vh;
`;
const Heading = styled.h4`
  color: darkorange;
`;

const Date = styled.p`
  color: red;
`;
const Description = styled.p`
  color: #000;
`;
const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Img = styled.div`
  /* flex: 0 0 33%; */
  overflow: hidden;
  img {
    cursor: pointer;
    transition: ease 0.4s all;
    max-width: 400px;
    max-height: 400px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

// interface Data extends PostData {}

const OnePostScreen = () => {
  const dataFromHomeScreen = useAppSelector(
    (state) => state.postsState.redirectPostData,
  );
  const [imgState, setImgState] = useState<string>('');
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (url: string) => {
    setImgState(url);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <PostHolder>
      {openModal && <ImgModal url={imgState} closeModal={handleCloseModal} />}
      <Date>{dataFromHomeScreen.date}</Date>
      <Heading
        dangerouslySetInnerHTML={{ __html: dataFromHomeScreen.heading }}
      />
      <Description
        dangerouslySetInnerHTML={{ __html: dataFromHomeScreen.description }}
      />

      <ImgWrapper>
        <Img onClick={() => handleOpenModal(dataFromHomeScreen.img)}>
          {dataFromHomeScreen.img && (
            <img src={dataFromHomeScreen.img} alt="img" />
          )}
        </Img>
        <Img onClick={() => handleOpenModal(dataFromHomeScreen.img_2)}>
          {dataFromHomeScreen.img_2 && (
            <img src={dataFromHomeScreen.img_2} alt="img2" />
          )}
        </Img>
        <Img onClick={() => handleOpenModal(dataFromHomeScreen.img_3)}>
          {dataFromHomeScreen.img_3 && (
            <img src={dataFromHomeScreen.img_3} alt="img3" />
          )}
        </Img>
        <Img onClick={() => handleOpenModal(dataFromHomeScreen.img_4)}>
          {dataFromHomeScreen.img_4 && (
            <img src={dataFromHomeScreen.img_4} alt="img4" />
          )}
        </Img>
        <Img onClick={() => handleOpenModal(dataFromHomeScreen.img_5)}>
          {dataFromHomeScreen.img_5 && (
            <img src={dataFromHomeScreen.img_5} alt="img5" />
          )}
        </Img>
        <Img onClick={() => handleOpenModal(dataFromHomeScreen.img_6)}>
          {dataFromHomeScreen.img_6 && (
            <img src={dataFromHomeScreen.img_6} alt="img6" />
          )}
        </Img>
        <Img onClick={() => handleOpenModal(dataFromHomeScreen.img_7)}>
          {dataFromHomeScreen.img_7 && (
            <img src={dataFromHomeScreen.img_7} alt="img7" />
          )}
        </Img>
        <Img onClick={() => handleOpenModal(dataFromHomeScreen.img_8)}>
          {dataFromHomeScreen.img_8 && (
            <img src={dataFromHomeScreen.img_8} alt="img8" />
          )}
        </Img>
        <Img onClick={() => handleOpenModal(dataFromHomeScreen.img_9)}>
          {dataFromHomeScreen.img_9 && (
            <img src={dataFromHomeScreen.img_9} alt="img9" />
          )}
        </Img>
        <Img onClick={() => handleOpenModal(dataFromHomeScreen.img_10)}>
          {dataFromHomeScreen.img_10 && (
            <img src={dataFromHomeScreen.img_10} alt="img10" />
          )}
        </Img>
      </ImgWrapper>
    </PostHolder>
  );
};

export default OnePostScreen;
