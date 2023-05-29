import { useState, useEffect } from "react";
import { getMoviesList } from "../services/omdbapi.js";

export function useMoviesList() {
  const [moviesList, setMoviesList] = useState(null);
  const [factError, setFactError] = useState(false);

  const [prevMovieName, setPrevMovieName] = useState(null);
  const [prevPage, setPrevPage] = useState(1);
  const [prevSortByDate, setPrevSortByDate] = useState(false);
  const [prevSortByName, setPrevSortByName] = useState(false);

  async function getMovies(movieName, page, sortByDate, sortByName) {
    if (
      movieName === prevMovieName &&
      page === prevPage &&
      sortByDate === prevSortByDate &&
      sortByName === prevSortByName
    )
      return;
    setPrevMovieName(movieName);
    setPrevPage(page);
    setPrevSortByDate(sortByDate);
    setPrevSortByName(sortByName);

    setMoviesList(null);
    setFactError(false);
    try {
      const list = await getMoviesList(movieName, page);
      if (sortByDate) {
        list.movies.sort((a, b) => b.year - a.year);
      }
      if (sortByName) {
        list.movies.sort((a, b) => a.title.localeCompare(b.title));
      }
      setMoviesList(list);
    } catch (error) {
      setFactError(true);
    }
  }

  return { moviesList, factError, getMovies };
}
