import { useQuery } from '@tanstack/react-query';
import { getPlanets } from '../services/apiData';

export function usePlanets(page: number | undefined) {
  const {
    isLoading,
    data: planets,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['planets'],
    queryFn: () => getPlanets(page),
  });

  return {
    isFetchingPlanets: isFetching,
    isLoadingPlanets: isLoading,
    planets,
    error,
    refetch,
  };
}
