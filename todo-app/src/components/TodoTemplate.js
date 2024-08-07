import styled from 'styled-components';
import React from 'react';

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative; // 박스 하단에 추가 버튼
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 04);

  margin: 0 auto;

  margin-top: 96px;
  margin-right: 32px;
  display: flex;
  flex-direction: column;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
