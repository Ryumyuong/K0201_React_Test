import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const categories = [
  { name: 'food', text: '부산맛집정보 서비스' },
  { name: 'walking', text: '부산도보여행 정보 서비스' },
  { name: 'festival', text: '부산 축제정보 서비스' },
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

// const Category = styled.div`
//   font-size: 2rem;
//   cursor: pointer;
//   white-space: pre;
//   text-decoration: none;
//   color: inherit;
//   padding-botom: 0.2rem;

//   &:hover {
//     color: #495057;
//   }

// 리액트의 컴포넌트 css 작업할 때 styled(NavLink)
const Category = styled(NavLink)`
  font-size: 2rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-botom: 0.2rem;

  &.hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

// const Categories = ({ onSelect, category }) => {
//   return (
//     <CategoriesBlock>
//       {categories.map((c) => (
//         <Category
//           key={c.name}
//           active={category === c.name}
//           onClick={() => onSelect(c.name)}
//         >
//           {c.text}
//         </Category>
//       ))}
//     </CategoriesBlock>
//   );
// };

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to={c.name === 'food' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
