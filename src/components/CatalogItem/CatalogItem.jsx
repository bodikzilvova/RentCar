import React, { useState } from 'react';
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
import ModalWindow from 'components/ModalWindow/ModalWindow';

function CatalogItem({ item }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLearnMoreClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Wrapper>
      <HeartIcon></HeartIcon>
      <Image src={item.img} />
      <WrapperInfo>
        <CarName>{item.make}</CarName>
        <CarModel>{item.model}</CarModel>,<CarYear>{item.year}</CarYear>
        <CarPrice>{item.rentalPrice}</CarPrice>
      </WrapperInfo>

      <TextWrapper>
        {item.city}
        <SpanLine />
        {item.country}
        <SpanLine />
        {item.rentalCompany}
        <SpanLine />
        {item.type}
        <SpanLine />
        {item.model}
        <SpanLine />
        {item.mileage}
        <SpanLine />
        {item.accessories[0]}
      </TextWrapper>

      <ButtonMore onClick={handleLearnMoreClick}>Learn More</ButtonMore>

      {isModalVisible && (
        <ModalWindow item={item} closeModal={handleCloseModal} />
      )}
    </Wrapper>
  );
}

export default CatalogItem;
