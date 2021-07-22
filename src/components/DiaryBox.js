import React from 'react';
import styled from 'styled-components';

const DiaryBoxBlock = styled.div`
  width: 600px;
  height: 800px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 30px;
  padding 30px 40px;
  overflow-y : auto;
  position : relative;
  z-index :1;
  margin-bottom : 100px;
`;

function DiaryBox({ children }) {
  return <DiaryBoxBlock>{children}</DiaryBoxBlock>;
}

export default DiaryBox;
