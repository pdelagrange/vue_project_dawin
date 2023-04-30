export interface IMovie {
  id: string;
  title: string
  releaseDate: string;
  language: string;
  Director: Director;
  gender: string;
  image: string;
}

export interface Director {
  firstName: string;
  lastName: string;
  nationality: string;
  birthdate: string;
}
