import axios, { AxiosError } from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const client = applyCaseMiddleware(
  axios.create({
    baseURL: 'https://swapi.dev/api',
  })
);

export const getPeople = async (page = 1) => {
  try {
    const res = await client.get(`/people/?page=${page.toString()}`);
    const peopleData = res.data;
    return peopleData;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};

export const getSpaceships = async (page = 1) => {
  try {
    const res = await client.get(`/starships/?page=${page.toString()}`);
    const spaceshipsData = res.data;
    return spaceshipsData;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};

export const getPlanets = async (page = 1) => {
  try {
    const res = await client.get(`/planets/?page=${page.toString()}`);
    const planetsData = res.data;
    return planetsData;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};
