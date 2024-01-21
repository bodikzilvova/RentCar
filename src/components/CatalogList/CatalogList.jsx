import CatalogItem from 'components/CatalogItem/CatalogItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './CatalogList.styled';
import ModalWindow from 'components/ModalWindow/ModalWindow';

function CatalogList() {
  const adverts = useSelector(state => state.adverts.items);

  return (
    <>
    <List>
      {adverts.map(advert => (
        <CatalogItem 
        key={advert.id}
        imgUrl={advert.img}
        name={advert.make}
        model={advert.model}
        year={advert.year}
        price={advert.rentalPrice}
        city={advert.city}
        country={advert.country}
        company={advert.rentalCompany}
        type={advert.type}
        mileage={advert.mileage}
        accessories={advert.accessories[0]}
        />
      ))}
    </List>
    <ModalWindow></ModalWindow>
   </>
  );
}

export default CatalogList;
