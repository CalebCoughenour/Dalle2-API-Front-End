import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/MakeItArt' element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
