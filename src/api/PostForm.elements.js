import styled from "styled-components";

export const MainForm = styled.form`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 70%;
  margin: auto;
  border-radius: 5px;
  border: 1px solid black;
  padding-left: 10px;

  @media screen and (max-width: 484px) {
    width: 100%;
  }
`;

export const FormCard = styled.div`
  margin: auto;
  width: 80%;
  padding: 50px;
  border: 2px solid black;
  border-radius: 10px;
  background: #666666;
  

  @media screen and (max-width: 1200px){
    padding: 25px;
  }
`;

export const MainFormButton = styled.button`
  margin: auto;
  margin-top: 20px;
  background-color: #666666;
  width: 30%;
  height: 40px;
  border: solid 1px black;
  border-radius: 3px;
  
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


export const FormSelect = styled.select`
  margin: auto;
  margin-right: 15px;
  border-radius: 5px;
  height: 30px;
  width: 120px;
`;

export const SelectOption = styled.option`
  text-align: center;
`;

export const FormInputLabel = styled.label`
  color: black;
  margin-right: 10px;
`;

export const DefaultImg = styled.img`
  margin: auto;
  width: 512px;
  border-radius: 8px;
  border: 2px solid black;

  @media screen and (max-width: 1200px){
    width: 60%;
  }
`;

export const ToolTipWrapper = styled.div`
  visibility: hidden;
  @media screen and (min-width: 993px){
    float:right;
    visibility: visible;
  }
`;