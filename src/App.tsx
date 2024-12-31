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


// explain code 
// The selected code snippet is a React function component named App. This component manages the state of a simple application that includes a counter, a dark mode toggle, a random number generator, and a prime number generator.

// Here's a breakdown of the code:

// 1.
// Import statements: The component imports necessary modules from React, as well as local assets like reactLogo and viteLogo.
// 2.
// useState hooks: The component uses three useState hooks to manage its state. count keeps track of the counter value, darkMode determines whether the dark mode is enabled, and randomNumber stores the generated random number.
// 3.
// toggleDarkMode function: This function is used to toggle the dark mode. It updates the darkMode state by negating its current value.
// 4.
// findPrimesOptimized function: This function calculates and returns an array of prime numbers up to a given number n. It uses an optimized algorithm to efficiently find prime numbers.
// 5.
// The return statement: This is the render function of the component. It returns a JSX expression that represents the UI of the application. The UI includes a header with Vite and React logos, a dark mode toggle button, a main section with a counter, a random number generator, and a prime number generator.


// Overall, the selected code snippet is a well-structured and functional React component that demonstrates the use of state management, event handling, and a prime number generator.