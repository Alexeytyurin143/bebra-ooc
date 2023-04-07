import React from "react";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <nav>Nav</nav>
        <div className="login">
          <img src="https://placehold.co/60x60" alt="" />
        </div>
      </header>
      <div className="post">
        <div className="post__content">
          <strong>адрес</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
