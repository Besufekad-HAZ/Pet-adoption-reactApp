import Pet from "./Pet";
import { Pet as PetType } from "./APIResponsesTypes";

const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <div className="flex h-screen w-screen items-center justify-center">
          <h2 className="spin text-8xl">🐶</h2>
        </div>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
