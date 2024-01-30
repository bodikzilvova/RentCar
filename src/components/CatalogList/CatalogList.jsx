import CatalogItem from 'components/CatalogItem/CatalogItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './CatalogList.styled';
import { getFilteredAdverts } from '../../redux/adverts/advertsSlice';

function CatalogList() {
  const filteredAdverts = useSelector(getFilteredAdverts);

  if (!filteredAdverts || filteredAdverts.length === 0) {
    return <>No results found</>;
  }

  return (
    <>
      <List>
        {filteredAdverts.map(advert => (
          <CatalogItem key={advert.id} item={advert} />
        ))}
      </List>
    </>
  );
}

export default CatalogList;
