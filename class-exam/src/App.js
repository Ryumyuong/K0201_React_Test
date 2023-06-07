import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import Categories from './ch17-pdtest/Components/Categories';
import ItemList from './ch17-pdtest/ItemList';
import { Route, Routes } from 'react-router-dom';
import ItemsPage from './ch17-pdtest/pages/ItemsPage';

function App() {
  // const [category, setCategory] = useState('food');
  // const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div>
      {/* <Categories category={category} onSelect={onSelect} />
      <ItemList category={category} /> */}
      <Routes>
        <Route path='/' element={<ItemsPage />} />
        <Route path="/:category" element={<ItemsPage />} />
      </Routes>
    </div>
  );
}

export default App;
