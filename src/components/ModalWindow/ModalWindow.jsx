import React, { useEffect } from 'react';
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
  FlexWrapper,
  Functionalities,
  Img,
  PositionWrapper,
  RentBtn,
  RentalTitle,
  SpanLine,
  TextWrapper,
  Wrapper,
  WrapperInfo,
} from './ModalWindow.styled';
import { RxCross1 } from 'react-icons/rx';

function ModalWindow({ item, closeModal }) {
  const rentalConditions = item.rentalConditions.split('\n');
  const age = rentalConditions[0].split(':')[1].trim().split(' ')[0];

  const handleClickOutside = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [closeModal]);

  const handleGoToGitHub = () => {
    window.open('https://github.com/bodikzilvova', '_blank');
  };

  return (
    <Backdrop onClick={handleClickOutside}>
      <PositionWrapper>
        <Wrapper>
          <CloseBtn onClick={closeModal}>
            <RxCross1
              style={{ width: '12px', height: '12px', strokeWidth: '1px' }}
            />
          </CloseBtn>

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
              <ConditionWrapper>{rentalConditions[1]}</ConditionWrapper>
              <ConditionWrapper>{rentalConditions[2]}</ConditionWrapper>
              <ConditionWrapper>
                Mileage: <ColorText>{item.mileage}</ColorText>
              </ConditionWrapper>
              <ConditionWrapper>
                Price: <ColorText>{item.rentalPrice}</ColorText>
              </ConditionWrapper>
            </FlexWrapper>
          </Conditions>

          <RentBtn onClick={handleGoToGitHub}>Rental Car</RentBtn>
        </Wrapper>
      </PositionWrapper>
    </Backdrop>
  );
}

export default ModalWindow;
