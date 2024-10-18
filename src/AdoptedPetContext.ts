import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: 1363,
    name: "Lunad",
    animal: "dog",
    breed: "Labrador",
    images: [],
    city: "New York",
    state: "NY",
    description: "Lunad is a good dog",
  },
  () => {}
]);

export default AdoptedPetContext;
