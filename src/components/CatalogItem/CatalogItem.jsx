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

function CatalogItem() {
  return (
    <Wrapper>
      <HeartIcon></HeartIcon>
      <Image></Image>
      <WrapperInfo>
        <CarName>Buick</CarName>
        <CarModel>Enclave</CarModel>,<CarYear>2008</CarYear>
        <CarPrice>$40</CarPrice>
      </WrapperInfo>

      <TextWrapper>
        Lviv
<SpanLine />
Ukraine
<SpanLine />
Auto Rentals
<SpanLine />
Premium
<SpanLine />
Suv
<SpanLine />
Volvo
<SpanLine />
9584
<SpanLine />
Premium Sound System
      </TextWrapper>

      <ButtonMore>Learn More</ButtonMore>
    </Wrapper>
  );
}

export default CatalogItem;
