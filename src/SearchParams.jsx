import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(event) => setLocation(event.target.value)}
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
