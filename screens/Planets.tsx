import { useState, useEffect } from 'react';
import { ActivityIndicator, DataTable } from 'react-native-paper';

import { usePlanets } from '@/hooks/usePlanets';

const Planets = () => {
  const [page, setPage] = useState<number>(0);
  const { isFetchingPlanets, isLoadingPlanets, planets, error, refetch } =
    usePlanets(page + 1);

  const from = page * 10;
  const to = Math.min((page + 1) * 10, Number(planets?.count));

  useEffect(() => {
    refetch();
  }, [page, setPage]);

  useEffect(() => {
    console.log(
      'table:',
      // planets
      planets?.results?.map((item) => item.name)
    );
  }, [planets]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Population</DataTable.Title>
        <DataTable.Title>Gravity</DataTable.Title>
        <DataTable.Title>Climate</DataTable.Title>
      </DataTable.Header>

      {isLoadingPlanets ? (
        <ActivityIndicator size={150} />
      ) : (
        planets?.results?.map((item) => (
          <DataTable.Row key={item.name}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.population}</DataTable.Cell>
            <DataTable.Cell>{item.gravity}</DataTable.Cell>
            <DataTable.Cell>{item.climate}</DataTable.Cell>
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
  );
};

export default Planets;
