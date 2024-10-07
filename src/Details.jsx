import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return <div>The Animal Id is {id}</div>;
};

export default Details;
