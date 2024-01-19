import React, { useEffect, useState } from 'react';
import { Container } from './RentPage.styled';
import SearchForms from 'components/SearchForms/SearchForms';
import CatalogList from 'components/CatalogList/CatalogList';
import { fetchAdverts } from '../../redux/adverts/advertsOperations';
import { useDispatch, useSelector } from 'react-redux';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import { getHasMore } from '../../redux/adverts/advertsSlice';


function RentPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const hasMore = useSelector(getHasMore);


  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);


  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Container>
        <SearchForms />
        <CatalogList />
        {hasMore && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      </Container>
    </>
  );
}

export default RentPage;
