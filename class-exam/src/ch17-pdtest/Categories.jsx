import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
  { name: 'food', text: '부산맛집정보 서비스' },
  { name: 'walking', text: '부산도보여행 정보 서비스' },
  { name: 'festival', text: '부산 축제정보 서비스'}
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 2rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-botom: 0.2rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600px;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: 3#bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;
const Categories = ({onSelect, category}) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
