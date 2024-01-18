import React from 'react';
import {
  Wrapper,
  HeartIcon,
  Image,
  WrapperInfo,
  CarName,
  CarModel,
  CarYear,
  CarPrice,
  TextWrapper,
  SpanLine,
  ButtonMore,
} from './CatalogItem.styled';

function CatalogItem({ imgUrl, name, model, price, year, city, country, company, type, mileage, accessories}) {

  return (
    <Wrapper>
      <HeartIcon></HeartIcon>
      <Image src={imgUrl}/>
      <WrapperInfo>
        <CarName>{name}</CarName>
        <CarModel>{model}</CarModel>,<CarYear>{year}</CarYear>
        <CarPrice>{price}</CarPrice>
      </WrapperInfo>

      <TextWrapper>
        {city}
<SpanLine />
{country}
<SpanLine />
{company}
<SpanLine />
{type}
<SpanLine />
{model}
<SpanLine />
{mileage}
<SpanLine />
{accessories}
      </TextWrapper>

      <ButtonMore>Learn More</ButtonMore>
    </Wrapper>
  );
}

export default CatalogItem;
