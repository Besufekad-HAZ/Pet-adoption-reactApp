import React from "react";
import PropTypes from "prop-types";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
};

export default Pet;
