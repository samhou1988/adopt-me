import React from 'react';

import Pet from '@/components/Pet';

import { PetProps } from './type';

type ResultsProps = {
  pets: PetProps[]
}

const Results = (props: ResultsProps) => {
  const {
    pets
  } = props;
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
