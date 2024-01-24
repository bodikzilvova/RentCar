import CatalogItem from 'components/CatalogItem/CatalogItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './CatalogList.styled';

function CatalogList() {
  const adverts = useSelector(state => state.adverts.items);

  return (
    <>
      <List>
        {adverts.map(advert => (
          <CatalogItem key={advert.id} item={advert} />
        ))}
      </List>
    </>
  );
}

export default CatalogList;
