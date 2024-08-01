import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 72px;
  line-height: 1.36;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;

  @media(max-width: 375.98px){
  font-size: 48px;
  line-height: 1.24;
  }
`;

export const FavoriteList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const NoFavorites = styled.p`
font-family: sans-serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  text-align: center;
  
`
