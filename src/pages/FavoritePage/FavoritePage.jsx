import React from 'react';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux/adverts/advertsSlice';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import {
  FavoriteList,
  NoFavorites,
  Title,
  Wrapper,
} from './FavoritePage.styled';

function FavoritePage() {
  const favorites = useSelector(getFavorites);

  return (
    <Wrapper>
      <Title>Your Favorites</Title>
      <FavoriteList>
        {favorites.length > 0 ? (
          favorites.map(item => <CatalogItem key={item.id} item={item} />)
        ) : (
          <NoFavorites>No favorites yet. Start adding some!</NoFavorites>
        )}
      </FavoriteList>
    </Wrapper>
  );
}

export default FavoritePage;
