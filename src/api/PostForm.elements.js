import styled from "styled-components";

export const MainForm = styled.form`
  margin: auto;
  text-align: center;
  display: block;
`;

export const FormInput = styled.input`
  width: 70%;
  margin: auto;
  border-radius: 5px;
  border: 1px solid black;
  padding-left: 10px;
`;

export const FormCard = styled.div`
  margin: auto;
  width: 100%;
  padding: 50px;
  border: 2px solid black;
  border-radius: 10px;
`;

export const MainFormButton = styled.button`
  margin: auto;
  margin-top: 20px;
  background-color: transparent;
  width: 30%;
  height: 35px;
  border: solid 1px black;

  &:hover {
    color: #61b38f;
    background-color: #242422;
    transition: background-color .4s ease-in-out;
  }  
`;

export const ImgWrapper = styled.div`
  margin: auto;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
`;

export const ImageResult = styled.img`
  margin: auto;
  width: 400px;
  border-radius: 5px;
  border: 2px solid black;

  @media screen and (max-width: 1200px){
    width: 80%;
  }
`;


export const FormSelect = styled.select`
  margin: auto;
  border-radius: 5px;
`;

export const SelectOption = styled.option`
  text-align: center;
`;