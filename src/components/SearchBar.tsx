const SearchBar = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-center text-3xl font-bold mb-4">Search Bar</h1>
        <div className="flex items-center">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <button className="px-4 py-2 border-l-0 rounded-r-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
