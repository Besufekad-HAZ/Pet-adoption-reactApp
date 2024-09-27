const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) {
    return [];
  }

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`Error: breeds/${animal} fetch not ok`);
  }

  const data = await apiRes.json();
  return data;
};

export default fetchBreedList;
