async function fetchBreedList({ queryKey }): Promise<[]> | never {
  const animal: string = queryKey[1];

  if (!animal) return [];

  const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

  if (!res.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  return res.json();
}

export default fetchBreedList;
