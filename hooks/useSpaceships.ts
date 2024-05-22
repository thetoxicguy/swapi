import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSpaceships } from '../services/apiData';

export function useSpaceships(page: number | undefined) {
  const {
    isLoading,
    data: spaceships,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['spaceships'],
    queryFn: () => getSpaceships(page),
  });

  return {
    isFetchingSpaceships: isFetching,
    isLoadingSpaceships: isLoading,
    spaceships,
    error,
    refetch,
  };
}
