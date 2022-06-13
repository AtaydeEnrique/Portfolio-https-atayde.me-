import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';

import './App.css';
import { ResultContextProvider } from './contexts/ResultContextProvider';

const App = () => {
  
  return (
    <ResultContextProvider>
      <div className="App">
        <div>
          <Navbar/>
          <Routes/>
          <Footer/>
        </div>
      </div>
    </ResultContextProvider>
  );
}

export default App;
