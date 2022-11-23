import styled from 'styled-components';

export const FooterSection = styled.div`
  padding-top: 10px;
`;

export const FooterText = styled.p`
  margin: auto;
  display:inline;
  font-size: 20px;
  text-align: center;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #242422;

  &:hover {
    cursor: pointer;
    color: #61b38f;
    transition: color 0.3s ease-in-out;
  }
`;

export const DalleAsterik = styled.p`
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  color: #242422;
  &:hover {
    color: #61b38f;
    transition: color 0.3s ease-in-out;
  }
`;