import React, { useEffect, useState } from 'react';
import { Container } from './RentPage.styled';
import SearchForms from 'components/SearchForms/SearchForms';
import CatalogList from 'components/CatalogList/CatalogList';
import { fetchAdverts } from '../../redux/adverts/advertsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts, getHasMore } from '../../redux/adverts/advertsSlice';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

function RentPage() {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  const hasMore = useSelector(getHasMore);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (adverts.length === 0) dispatch(fetchAdverts(page));
  }, [dispatch, page, adverts]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
    dispatch(fetchAdverts(page + 1));
  };

  const handleSearch = selectedBrand => {
    console.log('Selected Brand:', selectedBrand);
  };

  return (
    <>
      <Container>
        <SearchForms onSearch={handleSearch} />
        <CatalogList />
        {hasMore && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      </Container>
    </>
  );
}

export default RentPage;
