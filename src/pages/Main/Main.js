import React, { useState } from 'react';
import PostForm from '../../api/PostForm';
import TopNav from '../../components/TopNav/TopNav';
import '../../css/style.css';

function Main() {
  return (
  <>
    <TopNav />
    <PostForm />
  </>
  )
}

export default Main;