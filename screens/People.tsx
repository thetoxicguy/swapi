import { useState, useEffect } from 'react';
import { ActivityIndicator, DataTable } from 'react-native-paper';

import { usePeople } from '@/hooks/usePeople';

const People = () => {
  const [page, setPage] = useState<number>(0);
  const { isFetchingPeople, isLoadingPeople, people, error, refetch } =
    usePeople(page + 1);

  const from = page * 10;
  const to = Math.min((page + 1) * 10, Number(people?.count));

  useEffect(() => {
    refetch();
  }, [page, setPage]);

  useEffect(() => {
    console.log(
      'table:',
      // people
      people?.results?.map((item) => item.name)
    );
  }, [people]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Birth Year</DataTable.Title>
        <DataTable.Title>Gender</DataTable.Title>
      </DataTable.Header>

      {isLoadingPeople ? (
        <ActivityIndicator size={150} />
      ) : (
        people?.results?.map((item) => (
          <DataTable.Row key={item.name}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.birth_year}</DataTable.Cell>
            <DataTable.Cell>{item.gender}</DataTable.Cell>
          </DataTable.Row>
        ))
      )}

      {!isFetchingPeople && (
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(Number(people?.count) / 10)}
          onPageChange={(page) => {
            setPage(page);
          }}
          label={`${from + 1}-${to} of ${people?.count}`}
          numberOfItemsPerPage={10}
          showFastPaginationControls
        />
      )}
    </DataTable>
  );
};

export default People;
