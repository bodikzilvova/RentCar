import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import RentPage from 'pages/RentPage/RentPage'
import FavoritePage from 'pages/FavoritePage/FavoritePage'

export const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/catalog" element={<RentPage />} />
    <Route path="/favorites" element={<FavoritePage />} />
    </Route>
   </Routes>
  );
};
