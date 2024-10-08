export const fetchSearch = async ({ queryKey }) => {
  const [_, animal, search] = queryKey;

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&name=${search}`
  );

  if (!apiRes.ok) {
    throw new Error(`search/${animal}/${search} fetch not ok`);
  }

  return apiRes.json();
};
