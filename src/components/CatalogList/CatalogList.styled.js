import styled from 'styled-components';

export const List = styled.ul`
list-style-type: none;
margin-bottom: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 29px;


li:nth-child(4n) {
    gap: 0px;
  }
`;
