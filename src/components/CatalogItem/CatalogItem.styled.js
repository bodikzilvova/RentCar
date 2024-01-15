import styled from 'styled-components';

export const Wrapper = styled.li`
  max-width: 274px;
`;

export const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  background-image: linear-gradient(to bottom, #121417 0%, #121417 50%);
  margin-bottom: 14px;
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
`;

export const CarModel = styled.span`
  color: #3470ff;
`;

export const CarYear = styled.p`
  margin-left: 4px;
`;

export const CarPrice = styled.p`
  margin-left: auto;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 274px;
  margin-bottom: 28px;
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
`;

export const ButtonMore = styled.button`
  width: 274px;
  height: 44px;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: Manrope, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;
  padding: 12px 99px 12px 99px;
`;
