import React, { useState } from 'react';
import PostForm from '../../api/PostForm';
import MainFooter from '../../components/Footer/Footer';
import TopNav from '../../components/TopNav/TopNav';
import '../../css/style.css';

function Main() {
  return (
  <>
    <TopNav />
    <PostForm />
    <MainFooter />
  </>
  )
}

export default Main;