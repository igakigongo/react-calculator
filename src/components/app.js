import './app.css';
import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';

const App = () => (
  <div className="app">
    <header className="app-header">
      <h1>Calculator</h1>
    </header>
    <main className="calculator">
      <Display />
      <ButtonPanel />
    </main>
  </div>
);

export default App;
