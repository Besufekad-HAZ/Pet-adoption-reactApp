import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Pet from "./Pet";

const x = 5;

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="havenese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mixed" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};
