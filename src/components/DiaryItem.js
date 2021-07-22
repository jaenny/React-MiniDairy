import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const DiaryItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-family: 'Cafe24SsurroundAir';
  }
  hr {
    opacity: 0.3;
  }
  &: hover {
    ${Remove} {
      display: initial;
    }
  }
`;

function DiaryItem({ diary, diaries, id, setDiaries }) {
  const onRemove = (id) => {
    setDiaries((prev) => diaries.filter((item) => item.id !== id));
  };

  return (
    <>
      <DiaryItemBlock>
        <div>
          <h3>{diary.date}</h3>
          <p>
            {diary.title}
            <span>{diary.weather}</span>
          </p>
        </div>
        <Remove onClick={() => onRemove(diary.id)}>
          <MdDelete />
        </Remove>
      </DiaryItemBlock>
      <hr />
    </>
  );
}

export default React.memo(DiaryItem);
