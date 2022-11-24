import React, { useState } from 'react';
import 'bootstrap/js/src/modal';
import axios from 'axios';
import { MainForm, FormInput, FormCard, MainFormButton, ImgWrapper, FormSelect, SelectOption, FormInputLabel, DefaultImg, ToolTipWrapper } from './PostForm.elements';
import Container from 'react-bootstrap/Container';
import TriggerRendererProp from '../components/Tooltip/TooltipComp.js';
import ImageZoom from '../components/ImageZoom/ImageZoom';

export default function PostForm() {
  // useState will be called when the form is entered
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('Select A Size');
  const [responseSize, setResponseSize] = useState('');

  // image is null until respone from API
  const [image, setImage] = useState(null);

  // Function containing the API call
  async function useGetImage() {
    // API Bearer token
    const config = {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}` }
    };
    // Body for API call; prompt & size get change with set state when form is entered
    const body = {
      prompt: prompt,
      n: 1,
      size: size
    }
    // Set state of responseSize so it can be passed as prop to ImageZoom component
    setResponseSize(size);
    // Axios API call to openai image generated, takes in body and bearer token(config)
    await axios.post('https://api.openai.com/v1/images/generations', body, config)
    .then(response => {
      // Once we receive the response we call setImage to change the state of the image being displayed
      setImage(response.data.data[0].url);
    })
    .catch(function(error){
      // Display error if there is a problem with the call
      console.log(error);
      alert("There was a problem with the call, please try again or change your prompt");
    });
  }
  
  // On form submit, call useGetImage function
  function handleSubmit(e) {
    e.preventDefault();
    //trim prompt to check if empty string was entered
    const imagePrompt = prompt.trim();
    if (imagePrompt === ''){
      alert("Please enter a prompt");
      return;
    // check if size is set
    } else if (size === 'Select A Size'){
      alert("Please select a size");
      return;
    }
    useGetImage();
  };
  
  return (
    <div>
      <Container>
        <MainForm onSubmit={handleSubmit}>
          <FormCard>
            {/* Tooltip component place below here */}
            <ToolTipWrapper><TriggerRendererProp /></ToolTipWrapper>
            <FormInputLabel> Enter A Detailed Prompt</FormInputLabel>
            <FormInput  
            type="text"
            name="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="ex: Cat's having a tea party in space, light, 4k, high quality, realistic"
            />
            <FormSelect 
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            >
              <SelectOption value="Select A Size" onChange={(e) => setSize(e.target.value)}>Select A Size</SelectOption>
              <SelectOption value='512x512' onChange={(e) => setSize(e.target.value)}>512x512</SelectOption>
              <SelectOption value='1024x1024' onChange={(e) => setSize(e.target.value)}>1024x1024</SelectOption>
            </FormSelect>
            <MainFormButton className='form-button' type='submit'>Submit</MainFormButton>
          </FormCard>
        </MainForm>
        <ImgWrapper>
          {image === null ? <DefaultImg src='images/y00t/yoot9040.webp' alt='Y00ts NFT #9040'/> : <ImageZoom imageResponse={image} imageSize={responseSize} /> }
          
        </ImgWrapper>
      </Container>
    </div>
  )
}