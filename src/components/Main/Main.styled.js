import styled from 'styled-components';
import BgImage from '../../images/bg-image.jpg';

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${BgImage});
  background-size: cover;
  background-position: center;
`;

export const MainTitle = styled.h1`
  color: white;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 72px;
  line-height: 1.36;
  text-align: end;
  text-transform: uppercase;
  margin-right: 50px;
  margin-left: auto;
`;

export const MainBtn = styled.button`
  width: 400px;
  height: 50px;
  color: white;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.36;
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 20px;
  border: 5px solid black;
  cursor: pointer;
  margin-right: 50px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  focus {
    color: tomato;
    background-color: black;
  }
`;
