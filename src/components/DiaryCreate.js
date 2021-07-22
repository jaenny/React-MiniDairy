import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';

const DiaryCreateBlock = styled.div`
  display: none;
  width: 680px;
  height: 110px;
  background: #be79df;
  z-index: 1;
  margin: 0 auto;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;

  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const InsertForm = styled.form`
  width: 100%;
`;
const Input = styled.input`
  display: block;
  width: 90%;
  height: 45px;
  margin: 0 30px;
  border-radius: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;

function DiaryCreate({ diaries, setDiaries, open, setOpen }) {
  const nextId = useRef(5);

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const weathers = ['🌞', '⛄', '☔', '⚡'];
    const ranNum = Math.floor(Math.random() * 4);
    const weather = weathers[ranNum];

    const newD = {
      id: nextId.current,
      date: dateString,
      weather,
      title: value,
    };

    setDiaries((prev) => [...prev, newD]);

    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      <DiaryCreateBlock open={open}>
        {open && (
          <InsertFormPositioner>
            <InsertForm onSubmit={onSubmit}>
              <Input
                autoFocus
                placeholder='일기를 쓰고, Enter 를 누르세요'
                value={value}
                onChange={onChange}
              />
            </InsertForm>
          </InsertFormPositioner>
        )}
      </DiaryCreateBlock>
    </>
  );
}

export default DiaryCreate;
