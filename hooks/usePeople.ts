import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPeople } from '../services/apiData';

export function usePeople(page: number | undefined) {
  const {
    isLoading,
    data: people,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['people'],
    queryFn: () => getPeople(page),
  });

  return {
    isFetchingPeople: isFetching,
    isLoadingPeople: isLoading,
    people,
    error,
    refetch,
  };
}
