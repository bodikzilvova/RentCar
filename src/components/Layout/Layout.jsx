import React from 'react';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';


function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
