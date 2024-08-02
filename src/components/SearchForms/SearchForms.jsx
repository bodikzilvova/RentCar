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
    'GMC',
    'Hyundai',
    'Mercedes-Benz',
    'Audi',
    'BMW',
    'Chevrolet',
    'Kia',
    'Toyota',
    'Ford',
    'Jeep',
    'Honda',
    'Acura',
    'Lexus',
    'Mazda',
    
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
