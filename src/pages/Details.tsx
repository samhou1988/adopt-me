import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import fetchPet from '@/apis/fetchPet';
import Carousel from '@/components/Carousel';
import ErrorBoundary from '@/components/ErrorBoundary';
import Modal from '@/components/Modal';
import AdoptedPetContext from '@/contexts/AdoptedPetContext';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const results = useQuery(['details', id], fetchPet);
  const [showModal, setShowModal] = useState(false);
  const [, setAdoptedPet] = useContext(AdoptedPetContext);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate('/');
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
