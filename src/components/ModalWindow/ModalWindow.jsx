import React from 'react';
import {
  Accessories,
  Backdrop,
  CarModel,
  CarName,
  CarYear,
  CloseBtn,
  ColorText,
  ConditionWrapper,
  Conditions,
  Description,
  FlexWrapper,
  Functionalities,
  Img,
  RentBtn,
  RentalTitle,
  SpanLine,
  TextWrapper,
  Wrapper,
  WrapperInfo,
} from './ModalWindow.styled';

function ModalWindow({ item, closeModal }) {
  console.log(item);

  const rentalConditions = item.rentalConditions.split('\n');
 const age = rentalConditions[0].split(':')[1].trim().split(' ')[0];

  

  return (
    <Backdrop>
      <Wrapper>
        <CloseBtn onClick={closeModal}>X</CloseBtn>

        <Img src={item.img} />
        <WrapperInfo>
          <CarName>{item.make}</CarName>
          <CarModel>{item.model}</CarModel>,<CarYear>{item.year}</CarYear>
        </WrapperInfo>

        <TextWrapper>
          {item.city}
          <SpanLine />
          {item.country}
          <SpanLine />
          Year: {item.year}
          <SpanLine />
          Type: {item.type}
          <SpanLine />
          Fuel Consumption: {item.fuelConsumption} <SpanLine /> Engine Size:
          {item.engineSize}
        </TextWrapper>

        <Description>{item.description}</Description>

        <Functionalities>
          <Accessories>Accessories and functionalities:</Accessories>

          <TextWrapper>
            {item.accessories[0]}
            <SpanLine />
            {item.accessories[1]}
            <SpanLine />
            {item.accessories[2]}
            <SpanLine />
            {item.functionalities[0]}
            <SpanLine />
            {item.functionalities[1]}
            <SpanLine />
            {item.functionalities[2]}
          </TextWrapper>
        </Functionalities>

        <Conditions>
          <RentalTitle>Rental Conditions:</RentalTitle>
          <FlexWrapper>
            <ConditionWrapper>
              Mimimum age: <ColorText>{age}</ColorText>
            </ConditionWrapper>
            <ConditionWrapper>
              {rentalConditions[1]}
            </ConditionWrapper>
            <ConditionWrapper>
            {rentalConditions[2]}
            </ConditionWrapper>
            <ConditionWrapper>
            Mileage: <ColorText>{item.mileage}</ColorText>
            </ConditionWrapper>
            <ConditionWrapper>
              Price: <ColorText>{item.rentalPrice}</ColorText>
            </ConditionWrapper>
          </FlexWrapper>
        </Conditions>

        <RentBtn>Rental Car</RentBtn>
      </Wrapper>
    </Backdrop>
  );
}

export default ModalWindow;
