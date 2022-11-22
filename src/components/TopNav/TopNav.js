import React from 'react';
import { NavWrapper, NavTitle } from './TopNav.elements';
import './nav-styles.css';

export default function TopNav() {
  return(
    <>
      <NavWrapper>
        <NavTitle><a className='nav-title' href="https://twitter.com/makeitartai" target="_blank" rel="noopener noreferrer">MAKE IT ART</a></NavTitle>
      </NavWrapper>
    </>
  )
};
