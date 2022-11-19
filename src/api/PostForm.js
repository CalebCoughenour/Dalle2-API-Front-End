import React, { Component } from 'react';
import axios from 'axios';
import { MainForm, MainInput, MainCard, MainFormButton, ImageResult } from './PostForm.elements';
import '../css/style.css';

class PostForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      prompt: '',
      n: 1,
      size: "512x512",
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: { Authorization: 'Bearer ' }
    };

    axios.post('https://api.openai.com/v1/images/generations', this.state, config)
    .then(response => {
      image.push(response.data.data[0]);
      console.log(image);
    })
    .catch(function(error){
      console.log(error);
    });

    return image;
  }
  render() {
    const{ prompt } = this.state;
    const image = this.image;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>Enter A Prompt</label>
          <input 
          type="text"
          name="prompt"
          value={prompt}
          onChange={this.handleChange}
           />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <img src={image} />
      </>
    )
  }
}

export default PostForm;