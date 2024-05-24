import { useState, useEffect } from 'react';
import { ActivityIndicator, Appbar, DataTable } from 'react-native-paper';

import { usePlanets } from '@/hooks/usePlanets';

import { PlanetData, PlanetsData } from '@/types/model';
import Header from '@/components/Header';

const Planets = () => {
  const [page, setPage] = useState<number>(0);
  const { isFetchingPlanets, isLoadingPlanets, planets, error, refetch } =
    usePlanets(page + 1);

  const from = page * 10;
  const to = Math.min((page + 1) * 10, Number(planets?.count));

  useEffect(() => {
    refetch();
  }, [page, setPage]);

  return (
    <>
      <Header topic='Planets' page={page} />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>🌐 Name</DataTable.Title>
          <DataTable.Title>👥 Pop</DataTable.Title>
          <DataTable.Title>⏬ Gravity</DataTable.Title>
          <DataTable.Title>🌤️ Climate</DataTable.Title>
          <DataTable.Title>💫 Period</DataTable.Title>
        </DataTable.Header>

        {isLoadingPlanets ? (
          <ActivityIndicator size={150} />
        ) : (
          planets?.results?.map((item: PlanetData) => (
            <DataTable.Row key={item.name}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell>{item.population}</DataTable.Cell>
              <DataTable.Cell>{item.gravity}</DataTable.Cell>
              <DataTable.Cell>{item.climate}</DataTable.Cell>
              <DataTable.Cell>{item.rotationPeriod}</DataTable.Cell>
            </DataTable.Row>
          ))
        )}

        {!isFetchingPlanets && (
          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(Number(planets?.count) / 10)}
            onPageChange={(page) => {
              setPage(page);
            }}
            label={`${from + 1}-${to} of ${planets?.count}`}
            numberOfItemsPerPage={10}
            showFastPaginationControls
          />
        )}
      </DataTable>
    </>
  );
};

export default Planets;
