import React from 'react';
import {
  HeaderContainer,
  Headerlogo,
  HeaderNav,
  HeaderText,
} from './Header.styled';
import Logo from '../../images/images.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Headerlogo src={Logo} alt="logo" />
      </NavLink>

      <HeaderNav>
        <NavLink to="/">
          <HeaderText>Home</HeaderText>
        </NavLink>
        <NavLink to="rent">
          <HeaderText>Rent</HeaderText>
        </NavLink>
        <NavLink to="favorite">
          <HeaderText>Favorite</HeaderText>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;
