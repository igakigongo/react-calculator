import './app.css';
import React from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

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
