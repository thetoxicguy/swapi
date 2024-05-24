export type PersonData = {
  birthYear: string;
  created: string;
  edited: string;
  eyeColor: string;
  films: string[];
  gender: string;
  hairColor: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skinColor: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

export type PeopleData = {
  count: number;
  next: string;
  previous: null;
  results: PersonData[];
};

export type SpaceshipData = {
  cargoCapacity: string;
  consumables: string;
  costInCredits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  hyperdriveRating: string;
  length: string;
  manufacturer: string;
  maxAtmospheringSpeed: string;
  mglt: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  starshipClass: string;
  url: string;
};

export type SpaceshipsData = {
  count: number;
  next: string;
  previous: string;
  results: SpaceshipData[];
};

export type PlanetData = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbitalPeriod: string;
  population: string;
  residents: string[];
  rotationPeriod: string;
  surfaceWater: string;
  terrain: string;
  url: string;
};

export type PlanetsData = {
  count: number;
  next: string;
  previous: string;
  results: PlanetData[];
};
