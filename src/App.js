
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Joel Torneros Portfolio Webpage</h1>
        <p>Take a look at some of my best projects below, ranging from figma prototypes to coding projects, and aswell as team based design research  </p>
      </header>
      <div className="gallery">
        <div className="box">
          <h2>Coding Projects</h2>
        </div>
        <div className="box">
          <h2>Figma</h2>
        </div>
        <div className="box">
          <h2>Research</h2>
        </div>
      </div>
      <footer className="App-footer">
        <p>UC San Diego  |  UX/UI Designer  |  tornerojoel@gmail.com  |  626-848-3349  </p>
      </footer>
    </div>
  );
}

export default App