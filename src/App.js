import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DiaryBox from './components/DiaryBox';
import DiaryItem from './components/DiaryItem';
import { MdClose } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import DiaryCreate from './components/DiaryCreate';

const GlobalStyle = createGlobalStyle`
  body{
    background : #CFF1EF;
    box-sizing : border-box;
  }
`;
const Box = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 100px;
  display: flex;
  align-items: center;
`;

const Pencil = styled.div`
  background: #be79df;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 50%);
  border: 1px solid white;
  z-index: 5;
`;

function App() {
  const [open, setOpen] = useState(false);

  const [diaries, setDiaries] = useState([
    {
      id: 1,
      date: '2021년 07월 20일',
      weather: '🌞',
      title: '맑은 날!',
    },
    {
      id: 2,
      date: '2021년 07월 21일',
      weather: '⛄',
      title: '눈 온다',
    },
    {
      id: 3,
      date: '2021년 07월 22일',
      weather: '☔',
      title: '비 온다',
    },
    {
      id: 4,
      date: '2021년 07월 23일',
      weather: '⚡',
      title: '벼락',
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <Box>
        <DiaryBox>
          {diaries.map((diary) => (
            <DiaryItem
              diary={diary}
              key={diary.id}
              id={diary.id}
              diaries={diaries}
              setDiaries={setDiaries}
            />
          ))}
        </DiaryBox>
        <DiaryCreate
          diaries={diaries}
          setDiaries={setDiaries}
          open={open}
          setOpen={setOpen}
        />
        <Pencil
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <MdClose /> : <BsPencil />}
        </Pencil>
      </Box>
    </>
  );
}

export default App;
