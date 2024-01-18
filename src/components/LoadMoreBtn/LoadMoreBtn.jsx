import React from 'react';
import { Button } from './LoadMoreBtn.styled';

function LoadMoreBtn({handleLoadMore}) {

  return (
      <>
      <Button onClick={handleLoadMore}>Load More</Button>
    </>
   
  );
}

export default LoadMoreBtn;
