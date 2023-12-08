import styled from 'styled-components';

export const Form = styled.form`
margin-bottom: 50px;
  display: flex;
  flex-direction: row;
`;

export const Totalwrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  margin-bottom: 8px;
`;

export const SelectBrand = styled.input`
  width: 224px;
  height: 48px;
  border: none;
  border-radius: 14px;
  padding: 14px 89px 14px 18px;
  background: #f7f7fb;
  margin-right: 18px;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;

  &::placeholder {
    color: #121417;
    font-family: Manrope, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;

export const SelectPrice = styled.input`
  width: 125px;
  height: 48px;
  border: none;
  border-radius: 14px;
  padding: 14px, 18px, 14px, 18px;
  background: #f7f7fb;
  margin-right: 18px;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;

export const WrapperMeter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputMeterFrom = styled.input`
  width: 160px;
  height: 48px;
  border: none;
  border-radius: 14px 0 0 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;

export const InputMeterTo = styled.input`
  width: 160px;
  height: 48px;
  border: none;
  border-radius: 0 14px 14px 0;
  background: #f7f7fb;
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;

export const BtnSearch = styled.button`
  width: 136px;
  height: 48px;
  border: none;
  border-radius: 12px;
  margin-left: 18px;
  padding: 14px, 44px, 14px, 44px;
  background-color: #3470ff;
  color: white;
  font-family: Manrope;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42;
  cursor: pointer;
`;
