import styled from 'styled-components';

export const ImageResult = styled.img`
  margin: auto;
  border-radius: 8px;
  border: 2px solid black;
  width: 512px;


  animation: imageFadeInAnimation ease 5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes imageFadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    }


  @media screen and (min-width: 1200px){
    width: 60%;
  }
`;