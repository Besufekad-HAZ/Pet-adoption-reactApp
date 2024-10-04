const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="Location"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
