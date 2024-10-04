import React from "react";
import { createRoot } from "react-dom/client";
import PropTypes from "prop-types";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};
