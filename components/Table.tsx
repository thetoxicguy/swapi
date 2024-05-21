import { getPeople } from '@/services/apiData';
import { useState, useEffect } from 'react';
import { DataTable, Text, ActivityIndicator } from 'react-native-paper';

type Data = {
  count: string;
  next: string;
  previous: string;
  results: object[];
};

const Table = () => {
  const [data, setData] = useState<Data | undefined>();
  const [page, setPage] = useState<number>(0);
  const from = page * 10;
  const to = Math.min((page + 1) * 10, Number(data?.count));

  useEffect(() => {
    const fetchPeople = async () => {
      const people = await getPeople(page + 1);
      setData(people);
    };
    fetchPeople();

    console.log('Page:', page);
  }, [page, setPage]);

  useEffect(() => {
    console.log(
      'table:',
      data
      // data?.results?.map((item) => item.name)
    );
  }, [data, setData]);

  if (!data) {
    return <ActivityIndicator size={150} />;
  }

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Species</DataTable.Title>
        <DataTable.Title>Birth Year</DataTable.Title>
        <DataTable.Title>Homeworld</DataTable.Title>
      </DataTable.Header>

      {data?.results?.map((item) => (
        <DataTable.Row key={item.name}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.species}</DataTable.Cell>
          <DataTable.Cell>{item.birth_year}</DataTable.Cell>
          <DataTable.Cell>{item.homeworld}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(Number(data?.count) / 10)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${data?.count}`}
        numberOfItemsPerPage={10}
        showFastPaginationControls
      />
    </DataTable>
  );
};

export default Table;
