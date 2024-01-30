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

export const SelectBrand = styled.select`
  width: 224px;
  height: 48px;
  border: none;
  border-radius: 14px;
  padding: 14px 18px;
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
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
