import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
  z-index: 1000;
`;

export const PositionWrapper = styled.div`
  position: relative;
  border-radius: 24px;
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  width: 541px;
  height: 95vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
     overflow-y: auto;

  @media (max-width: 768.98px) {
    width: 100%;
    padding: 20px;
     height: 90vh;
  }
`;

export const CloseBtn = styled.button`
width: 24px;
height: 24px;
position: absolute;
top: 20px;
left: 501px;
background-color: inherit;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
outline: none;

 @media (max-width: 768.98px) {
    left: auto;
    right: 20px;
    top: 0px;
  }

svg {
    stroke: transparent;
    transition: stroke 0.3s ease-in-out;
  }

  &:hover,
  &:focus {
    svg {
      stroke: #3470ff;
    }
  }
}
`;

export const Img = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;

  @media (max-width: 768.98px) {
    width: 100%;
    height: auto;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  color: #121417;
  font-family: Mamrope, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const CarName = styled.p`
  margin-right: 4px;

  @media (max-width: 768.98px) {
    margin-right: 0;
  }
`;

export const CarModel = styled.span`
  color: #3470ff;
`;

export const CarYear = styled.p`
  margin-left: 4px;

  @media (max-width: 768.98px) {
    margin-left: 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 14px;
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const SpanLine = styled.span`
  margin-left: 6px;
  margin-right: 6px;
  border-left: 1px solid rgba(18, 20, 23, 0.2);

  @media (max-width: 768.98px) {
    margin: 0 3px;
  }
`;

export const Description = styled.p`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42;
  margin-bottom: 24px;
`;

export const Functionalities = styled.div`
  margin-bottom: 10px;
`;

export const Accessories = styled.h2`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42;
  margin-bottom: 8px;
`;

export const Conditions = styled.div``;

export const RentalTitle = styled.h2`
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42;
  margin-bottom: 8px;
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;

   @media (max-width: 768.98px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ConditionWrapper = styled.div`
  background-color: #f9f9f9;
  height: 32px;
  border-radius: 32px;
  padding: 7px 14px;
  margin-bottom: 8px;

   @media (max-width: 768.98px) {
    width: 100%;
    text-align: center;
  }
`;

export const ColorText = styled.span`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #3470ff;
`;

export const RentBtn = styled.button`
  width: 168px;
  height: 44px;
  border-radius: 12px;
  border: none;
  background-color: #3470ff;
  cursor: pointer;

  font-family: Manrope, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42;
  color: #ffffff;

  @media (max-width: 768.98px) {
    width: 100%;
  }
`;
