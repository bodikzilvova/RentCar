import React from 'react';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux/adverts/advertsSlice';
import CatalogItem from 'components/CatalogItem/CatalogItem';

function FavoritePage() {
  const favorites = useSelector(getFavorites);

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(item => <CatalogItem key={item.id} item={item} />)
      ) : (
        <p>No favorites yet. Start adding some!</p>
      )}
    </div>
  );
}

export default FavoritePage;
