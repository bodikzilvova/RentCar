import React from 'react';
import {
  Form,
  InputMeterFrom,
  Label,
  SelectBrand,
  SelectPrice,
  InputMeterTo,
  Wrapper,
  WrapperMeter,
  BtnSearch,
  Totalwrapper,
} from './SearchForms.styled';

function SearchForms() {
  return (
    <Form>
        <Totalwrapper>
      <Wrapper>
        <Label>Car brand</Label>
        <SelectBrand placeholder='Enter the text'></SelectBrand>
      </Wrapper>
      <Wrapper>
        <Label>Price/1 hour</Label>
        <SelectPrice></SelectPrice>
      </Wrapper>
      <Wrapper>
        <Label>Сar mileage / km</Label>
        <WrapperMeter>
        <InputMeterFrom></InputMeterFrom>
        <InputMeterTo></InputMeterTo>
        </WrapperMeter>
      </Wrapper>
      <BtnSearch type='submit'>Search</BtnSearch>
      </Totalwrapper>
    </Form>
  );
}

export default SearchForms;
