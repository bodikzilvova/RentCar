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
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
      </TextWrapper>

      <ButtonMore>Learn More</ButtonMore>
    </Wrapper>
  );
}

export default CatalogItem;
