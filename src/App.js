import React from 'react';

import { BrowserRouter } from "react-router-dom";

import './style.css';
import Main from './Main';

const App = () => {

  return (
    <>    
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </>
  );
}

export default App;
