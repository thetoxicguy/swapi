import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPeople } from '../services/apiData';

// import AppContext from '../contexts/AppContext';
// import { getUnits } from '../services/apiFacility';

export function usePeople(page: number | undefined) {
  // const { selectedBuilding } = useContext(AppContext);
  const {
    isLoading,
    data: people,
    error,
    refetch,
  } = useQuery({
    queryKey: ['people'],
    queryFn: () => getPeople(page),
  });

  return { isLoadingPeople: isLoading, people, error, refetch };
}
