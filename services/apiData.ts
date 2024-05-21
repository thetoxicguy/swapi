import axios, { AxiosError } from 'axios';

const client = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const getPeople = async (page = 1) => {
  try {
    const data = await client.get(`/people/?page=${page.toString()}`);
    // console.log('apiData:', data.data);
    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};
