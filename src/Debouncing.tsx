import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    if (query) {
      setLoading(true);
      timeoutId = setTimeout(() => {
        // Example: Fetch API call to search for results
        fetch(`https://api.example.com/search?query=${query}`)
          .then((response) => response.json())
          .then((data) => {
            setResults(data.results);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      }, 500);
    } else {
      setLoading(false);
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
