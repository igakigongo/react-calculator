import React from 'react';
import './app.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Calculator</h1>
      </header>
      <main>
        <Display />
        <ButtonPanel />
      </main>
    </div>
  );
}

export default App;
