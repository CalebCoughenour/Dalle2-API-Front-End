import styled from 'styled-components';

export const NavWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 5px;
  text-align: center;
`;

export const NavTitle = styled.h1`
  margin: auto;
  width: 18%;
  font-family: 'Megrim', cursive;
  font-weight: bold;
  font-size: 30px;

  @media screen and (max-width: 901px) {
    width: 30%;
  }

  @media screen and (max-width: 601px) {
    font-size: 40px;
  }
`;