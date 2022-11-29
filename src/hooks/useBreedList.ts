import { useQuery } from '@tanstack/react-query';

import fetchBreedList from '@/apis/fetchBreedList';

export default function useBreedList(animal: string): [any, any] {
  const results = useQuery(['breeds', animal], fetchBreedList) as any;

  return [results?.data?.breeds ?? [], results.status];
}
