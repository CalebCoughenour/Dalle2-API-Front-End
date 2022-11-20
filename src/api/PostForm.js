import React, { useState } from 'react';
import axios from 'axios';
import { MainForm, MainInput, MainCard, MainFormButton, ImageResult } from './PostForm.elements';


export default function PostForm() {
  // useState will be called when the form is entered and when the API response changes the image
  const [prompt, setPrompt] = useState(' ');
  // const [n, setN] = useState(1);
  // const [size, setSize] = useState('512x512');
  const [image, setImage] = useState(null);

  // Function containing the API call
  async function useGetImage() {
    // API Bearer token
    const config = {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}` }
    };
    // Body for API call
    const body = {
      prompt: prompt,
      n: 1,
      size: "1024x1024"
    }
    // Axios API call to openai image generated, takes in body and bearer token(config)
    await axios.post('https://api.openai.com/v1/images/generations', body, config)
    .then(response => {
      // Once we receive the response we call setImage to change the state of the image being displayed
      setImage(response.data.data[0].url);
    })
    .catch(function(error){
      // Display error if there is a problem with the call
      console.log(error);
    });
  }
  
  // On form submit, call useGetImage function
  function handleSubmit(e) {
    e.preventDefault();
    useGetImage();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter A Prompt</label>
          <input 
          type="text"
          name="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <img src={image} />
    </div>
  )
}