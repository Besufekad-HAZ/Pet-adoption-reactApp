import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";

const Details = ({ importantNumber }) => {
  const { id } = useParams();
  const results = useQuery({
    queryKey: ["details", id],
    queryFn: fetchPet,
  });

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⚙️</h2>
      </div>
    );
  }

  if (results.isError) {
    return <div>Error loading details</div>;
  }

  if (!results.data || !results.data.pets || results.data.pets.length === 0) {
    return <div>No pet details found</div>;
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button className="button_pet">Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
        <h1 className="">Important Number: {importantNumber}</h1>
      </div>
    </div>
  );
};

const DetailsErrorBoundary = (props) => (
  <ErrorBoundary>
    <Details {...props} />
  </ErrorBoundary>
);

export default DetailsErrorBoundary;
