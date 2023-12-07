import React from 'react';
import {
  HeaderContainer,
  Headerlogo,
  HeaderNav,
  HeaderText
} from './Header.styled';
import Logo from '../../images/images.png';

function Header() {
  return (
    <HeaderContainer>
      <Headerlogo src={Logo} alt="logo" />
      <HeaderNav>
        <HeaderText>Home</HeaderText>
        <HeaderText>Rent</HeaderText>
        <HeaderText>Favorite</HeaderText>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;
