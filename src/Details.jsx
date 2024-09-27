import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchQueries/fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ["details", id],
    fetchPet
  );

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-pane">
        <h2 className="error">Error: {error.message}</h2>
      </div>
    );
  }

  const pet = data?.pets?.[0];

  if (!pet) {
    return (
      <div className="error-pane">
        <h2 className="error">Pet not found</h2>
      </div>
    );
  }

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
