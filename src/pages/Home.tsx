import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';

import fetchSearch from '@/apis/fetchSearch';
import Results from '@/components/Results';
import AdoptedPetContext from '@/contexts/AdoptedPetContext';
import useBreedList from '@/hooks/useBreedList';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [animal, setAnimal] = useState('');
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);
  const [requestParams, setRequestParams] = useState<any>({
    location: '',
    animal: '',
    breed: '',
  });

  const results = useQuery(['search', requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setRequestParams({
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? '',
            location: formData.get('location') ?? '',
          });
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" name="breed">
            <option>Please choose...</option>
            {breeds.map((breed: any) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
