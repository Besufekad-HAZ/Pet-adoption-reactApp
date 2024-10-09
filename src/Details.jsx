import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();
  const results = useQuery({
    queryKey: ["details", id],
    queryFn: fetchPet,
  });
  // add showModal
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { _, setAdoptedPet } = useContext(AdoptedPetContext);

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
          {/* add onClick to */}
          <button onClick={() => setShowModal(true)} className="button_pet">
            Adopt {pet.name}
          </button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate("/");
                    }}
                  >
                    Yes
                  </button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </h2>
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
