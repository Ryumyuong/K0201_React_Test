import React from 'react';
// URL 매핑 할 때, path 경로의 변수를 동적으로 사용
import { useParams } from 'react-router-dom';
import Categories from '../Components/Categories';
import ItemList from '../ItemList';

const ItemsPage = (match) => {
    const params = useParams()
    // params.category 값이 있으면 사용하고 없다면 디폴트로 'food' 사용
    const category = params.category || 'food'
    return (
        <>
          <Categories />
          <ItemList category={category} />  
        </>
    );
};

export default ItemsPage;