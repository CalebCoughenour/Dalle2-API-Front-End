import styled from "styled-components";

export const HomeBody = styled.div`
  margin: 0;
`;

export const HomeButton = styled.button`
  margin: auto;
  background-color: transparent;
  width: 40%;
  height: 50px;
  border: solid 1px black;

  &:hover {
    color: #61b38f;
    background-color: #242422;
    transition: background-color .4s ease-in-out;
  }  
`;

export const HomeTitle = styled.h1`
  text-align: center;
  align-items: center;
  margin: 0;
  font-size: 200px;
  text-shadow: 1px 1px #000000;
  /* font-family: 'Rubik Glitch'; */
  /* font-family: 'Monoton', cursive; */
  font-family: 'Megrim', cursive;

  @media screen and (max-width: 1200px) {
   font-size: 150px; 
  }

  @media screen and (max-width: 500px) {
   font-size: 100px; 
   margin-bottom: 10px;
  }

  @media screen and (max-width: 350px) {
   font-size: 50px; 
   margin-bottom: 10px;
  }
`;

export const HomeLink = styled.a`
  text-align: center;
  align-items: center;
  margin: 0;
  text-decoration: none;
`;

export const HomeCard = styled.div`
  margin-top: 10vh;
  padding: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HomeImage = styled.img`
  border-radius: 50%;
  width: 10%;

  @media screen and (max-width: 990px) {
    width: 20%;
  }

  @media screen and (max-width: 500px) {
    width: 30%;
  }

  @media screen and (max-width: 350px) {
    width: 40%;
  }
`;