import styled from 'styled-components';

export const List = styled.ul`
list-style-type: none;
display: flex;
flex-wrap: wrap;
gap: 29px;


li:nth-child(4n) {
    gap: 0px;
  }
`;
