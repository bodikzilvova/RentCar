import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: -1px;
  z-index: 500;
`;

export const Headerlogo = styled.img`
  width: 80px;
  height: 50px;
  margin-left: 25px;
`;

export const HeaderNav = styled.div`
  display: flex;
  margin-right: 40px;
`;
export const HeaderText = styled.p`
  color: white;
  margin-right: 15px;
  font-size: 20px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  focus {
    color: tomato;
  }

  &:nth-child(3) {
    margin-right: 0px;
  }
`;
