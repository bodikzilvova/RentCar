import React from 'react';
import { MainTitle, MainBtn, MainContainer } from './Main.styled';
import { NavLink } from 'react-router-dom';

function Main() {
  return (
    <MainContainer>
      <MainTitle>Enjoy Your best journey <br/> to best price</MainTitle>
      <NavLink to="rent">
        <MainBtn>Rent now</MainBtn>
      </NavLink>
    </MainContainer>
  );
}

export default Main;
