// import moviesList from "../mocks/movies_mock.json"; //Mock

const ENDPOINT_MOVIE_LIST = "https://www.omdbapi.com";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_ID = import.meta.env.VITE_API_ID;

class Movie {
  constructor({ title, year, imdbID, type, poster }) {
    this.title = title;
    this.year = year;
    this.imdbID = imdbID;
    this.type = type;
    this.poster = poster;
  }
}

class MovieList {
  constructor({ movies, totalResults, response }) {
    this.movies = movies.map(
      (movie) =>
        new Movie({
          title: movie.Title,
          year: movie.Year.substring(0, 4), // movie.Year,
          imdbID: movie.imdbID,
          type: movie.Type,
          poster: movie.Poster,
        })
    );
    this.totalResults = totalResults;
    this.response = response;
  }
}

export async function getMoviesList(movieName, page = 1) {
  // const responseJSON = moviesList; //Mock
  const response = await fetch(
    ENDPOINT_MOVIE_LIST +
      "?I=" +
      API_ID +
      "&apikey=" +
      API_KEY +
      "&s=" +
      movieName +
      "&page=" +
      page
  );
  if (!response.ok) {
    throw new Error("Error fetching movie list");
  }
  const responseJSON = await response.json();
  const movieList = new MovieList({
    movies: responseJSON.Search ?? [],
    totalResults: responseJSON.totalResults ?? 0,
    response: responseJSON.Response ?? "false",
  });
  return movieList;
}
