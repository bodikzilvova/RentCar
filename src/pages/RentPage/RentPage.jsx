import React, { useEffect } from 'react';
import { Container } from './RentPage.styled';
import SearchForms from 'components/SearchForms/SearchForms';
import CatalogList from 'components/CatalogList/CatalogList';
import { fetchAdverts } from '../../redux/adverts/advertsOperations';
import { useDispatch } from 'react-redux';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

function RentPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  });
  return (
    <>
      <Container>
        <SearchForms />
        <CatalogList />
        <LoadMoreBtn />
      </Container>
    
    </>
  );
}

export default RentPage;
