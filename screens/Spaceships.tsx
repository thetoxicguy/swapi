import { useState, useEffect } from 'react';
import { ActivityIndicator, DataTable } from 'react-native-paper';

import { useSpaceships } from '@/hooks/useSpaceships';

const Spaceships = () => {
  const [page, setPage] = useState<number>(0);
  const {
    isFetchingSpaceships,
    isLoadingSpaceships,
    spaceships,
    error,
    refetch,
  } = useSpaceships(page + 1);

  const from = page * 10;
  const to = Math.min((page + 1) * 10, Number(spaceships?.count));

  useEffect(() => {
    refetch();
  }, [page, setPage]);

  useEffect(() => {
    console.log(
      'table:',
      // spaceships
      spaceships?.results?.map((item) => item.name)
    );
  }, [spaceships]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Crew</DataTable.Title>
        <DataTable.Title>Passengers</DataTable.Title>
      </DataTable.Header>

      {isLoadingSpaceships ? (
        <ActivityIndicator size={150} />
      ) : (
        spaceships?.results?.map((item) => (
          <DataTable.Row key={item.model}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.crew}</DataTable.Cell>
            <DataTable.Cell>{item.passengers}</DataTable.Cell>
          </DataTable.Row>
        ))
      )}

      {!isFetchingSpaceships && (
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(Number(spaceships?.count) / 10)}
          onPageChange={(page) => {
            setPage(page);
          }}
          label={`${from + 1}-${to} of ${spaceships?.count}`}
          numberOfItemsPerPage={10}
          showFastPaginationControls
        />
      )}
    </DataTable>
  );
};

export default Spaceships;
