import { useNavigate, useParams } from "react-router-dom";
import { lazy, useState, Suspense } from "react";
import { useDispatch } from "react-redux";
import { useGetPetQuery } from "./services/petApiService";
import { adopt } from "./redux/adoptedPetSlice";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";

const Modal = lazy(() => import("./Modal"));

const Details = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error("no id, Please Give me an ID???");
  }
  const { isLoading, data: pet } = useGetPetQuery(id);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  if (!pet) {
    throw new Error("pet not found!!");
  }

  return (
    <div className="container mx-auto flex flex-col gap-20 p-4 lg:gap-1">
      <Carousel images={pet.images} />
      <div className="mt-12 text-center">
        <h1 className="my-2 text-5xl text-gray-800">{pet.name}</h1>
        <h2 className="my-2 mb-5 text-xl">{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          Adopt {pet.name}
        </button>
        <p className="px-4 leading-6">{pet.description}</p>
        {showModal ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Modal>
              <div className="rounded bg-white p-8 text-center shadow-lg">
                <h1 className="mb-4 text-2xl">
                  Would you like to adopt {pet.name}?
                </h1>
                <div className="buttons flex justify-center space-x-4">
                  <button
                    className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
                    onClick={() => {
                      dispatch(adopt(pet));
                      // console.log("Adopted pet:", pet);
                      navigate("/");
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
                    onClick={() => setShowModal(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
          </Suspense>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}
