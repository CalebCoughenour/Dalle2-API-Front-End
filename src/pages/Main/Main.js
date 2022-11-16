import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../../css/style.css';
import { MainForm, MainInput, MainCard, MainFormButton, ImageResult } from './Main.elements';

function Main() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: input }),
    });
    const data = await response.json();
    setResult(data.result);
    
  }

  return (
  <>
    <Container>
      <ImageResult src={result} />
      <MainCard>
        <MainForm onSubmit={onSubmit}>
          <MainInput
            type="text"
            name="input"
            placeholder='Enter descriptive text to receive an AI generated image'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <MainFormButton type="submit">Submit</MainFormButton>
        </MainForm>
      </MainCard>
    </Container>
  </>
  )
}

export default Main;