import React, { useState } from 'react';
import {
  Form,
  Label,
  SelectBrand,
  Wrapper,
  BtnSearch,
  Totalwrapper,
} from './SearchForms.styled';
import { useDispatch } from 'react-redux';
import { setBrandFilter } from '../../redux/adverts/advertsSlice';

function SearchForms() {
  const allBrands = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Kia',
    'Land',
  ];

  const [selectedBrand, setSelectedBrand] = useState('');

  const dispatch = useDispatch();

  const handleBrandChange = event => {
    setSelectedBrand(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    dispatch(setBrandFilter(selectedBrand));
  };

  return (
    <Form onSubmit={handleSearch}>
      <Totalwrapper>
        <Wrapper>
          <Label>Car brand</Label>
          <SelectBrand
            value={selectedBrand}
            onChange={handleBrandChange}
            placeholder="Select car brand"
          >
            <option value="">All Brands</option>
            {allBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </SelectBrand>
        </Wrapper>
        <BtnSearch type="submit">Search</BtnSearch>
      </Totalwrapper>
    </Form>
  );
}

export default SearchForms;
