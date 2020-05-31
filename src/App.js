import React from 'react';

import { HashRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'

import './App.css';

function App() {
  return (
    <HashRouter baseRoute="/">
      <div className="app">
        <Route component={Home} exact path="/" />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </HashRouter >
  );
}

export default App;
