import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    let timeoutId: number;

    if (query) {
      timeoutId = setTimeout(() => {
        // Example: Fetch API call to search for results
        fetch(`https://api.example.com/search?query=${query}`)
          .then((response) => response.json())
          .then((data) => setResults(data.results))
          .catch((error) => console.error(error));
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
