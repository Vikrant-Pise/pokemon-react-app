
const SearchBar = ({ onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search Your favorite Pokemon Here...."
        onChange={(e) => onSearch(e.target.value)}
        className="search-bar"
      />
    );
  };
  
  export default SearchBar;
  