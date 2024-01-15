import CatalogItem from 'components/CatalogItem/CatalogItem';
import React from 'react';
import { useSelector } from 'react-redux';

function CatalogList() {
  const adverts = useSelector(state => state.adverts.items);
  console.log(adverts);

  return (
    <ul>
      {adverts.map(advert => (
        <CatalogItem 
        key={advert.id}
        imgUrl={advert.img}
        name={advert.make}
        model={advert.model}
        price={advert.rentalPrice}
        adress={advert.adress}
        company={advert.rentalCompany}
        type={advert.type}
        mileage={advert.mileage}
        accessories={advert.accessories[0]}
        />
      ))}
    </ul>
  );
}

export default CatalogList;
