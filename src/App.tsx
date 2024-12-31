import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <header>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Increase Count: {count}
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            Decrease Count
          </button>
          <button onClick={() => setCount(0)}>Reset Count</button>
        </div>
        <div className="card">
          <button
            onClick={() => setRandomNumber(Math.floor(Math.random() * 100))}
          >
            Generate Random Number
          </button>
          {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </div>
  );
}

export default App;
