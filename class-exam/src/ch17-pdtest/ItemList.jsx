import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PdItem from './PdItem';
import axios from 'axios';

const ItemListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// const sampleArticle = {
//   MAIN_TITLE: '제목',
//   ITEMCNTNTS: '내용',
//   MAIN_IMG_NORMAL: 'https://via.placeholder.com/160',
// };

const ItemList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'food' ? 'food' : `${category}`;

        switch (query) {
          case 'food':
            var response = await axios.get(
              'https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=GWKc8ei%2F%2Fv5E4r5nUQ%2F8w2nKYXGrpkpylgECo0l5n6Zpxi0M2E%2BuPssZksZpDrkZm1q3o0YCJSfA8XXcaarhFQ%3D%3D&numOfRows=10&pageNo=1&resultType=json',
            );
            console.log(response.data.getFoodKr.item);
            setArticles(response.data.getFoodKr.item);
            break;

          case 'walking':
            var response = await axios.get(
              'https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=GWKc8ei%2F%2Fv5E4r5nUQ%2F8w2nKYXGrpkpylgECo0l5n6Zpxi0M2E%2BuPssZksZpDrkZm1q3o0YCJSfA8XXcaarhFQ%3D%3D&numOfRows=10&pageNo=1&resultType=json',
            );
            console.log(response.data.getWalkingKr.item);
            setArticles(response.data.getWalkingKr.item);
            break;

            case 'festival':
            var response = await axios.get(
              'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=GWKc8ei%2F%2Fv5E4r5nUQ%2F8w2nKYXGrpkpylgECo0l5n6Zpxi0M2E%2BuPssZksZpDrkZm1q3o0YCJSfA8XXcaarhFQ%3D%3D&numOfRows=10&pageNo=1&resultType=json',
            );
            console.log(response.data.getFestivalKr.item);
            setArticles(response.data.getFestivalKr.item);
            break;

            

          default:
            alert('카테고리 선택 해주세요');
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <ItemListBlock>대기중.....</ItemListBlock>;
  }

  if (!articles) {
    console.log('articles 응답이 없습니다.');
    return null;
  }

  return (
    <ItemListBlock>
      {articles.map((article) => (
        <PdItem key={article.MAIN_TITLE} article={article} />
      ))}
    </ItemListBlock>
  );
};

export default ItemList;
