import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  function findPrimesOptimized(n: number) {
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }

    return isPrime
      .map((prime, index) => (prime ? index : null))
      .filter((x) => x !== null);
  }

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

        <p>test: {findPrimesOptimized(100)}</p>
      </main>
    </div>
  );
}

export default App;
