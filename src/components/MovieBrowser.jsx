import React from "react";
import "./MovieBrowser.css";
import MovieFilter from "./MovieFilter";
import { debounce } from "lodash";
import { useCallback } from "react";

function MovieBrowser({
  queryError,
  setError,
  getMovies,
  movieName,
  currentPage,
  sortByDate,
  sortByName,
  setSortByDate,
  setSortByName,
}) {
  const debouncedGetMovies = useCallback(
    debounce((newMovieName, page, sortByDate, sortByName) => {
      getMovies(newMovieName, page, sortByDate, sortByName);
    }, 500),
    []
  );

  function handleSubmit(event) {
    event.preventDefault();
    const newMovieName = event.target.movieName.value;
    movieName.current = newMovieName;
    currentPage.current = 1;
    if (correctMovieName(newMovieName))
      getMovies(newMovieName, currentPage.current, sortByDate, sortByName);
  }

  function handleMovieName(event) {
    const newMovieName = event.target.value;
    movieName.current = newMovieName;
    currentPage.current = 1;
    if (correctMovieName(newMovieName))
      debouncedGetMovies(
        newMovieName,
        currentPage.current,
        sortByDate,
        sortByName
      );
  }

  function correctMovieName(newMovieName) {
    if (newMovieName.startsWith(" ")) return;
    if (newMovieName.length < 3) {
      setError("The movie name must be at least 3 characters long");
      return false;
    }
    setError(null);
    return true;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="movie-search-form">
          <input
            name="movieName"
            className="input_movie"
            type="text"
            placeholder="Search for a movie..."
            onChange={handleMovieName}
          />
          <button className="btn_search" type="submit">
            Search
          </button>
        </div>
        {queryError && <p className="form-error">{queryError}</p>}
      </div>
      <MovieFilter
        currentPage={currentPage}
        setSortByDate={setSortByDate}
        setSortByName={setSortByName}
        sortByDate={sortByDate}
        sortByName={sortByName}
        movieName={movieName}
        getMovies={getMovies}
      />
    </form>
  );
}

export default MovieBrowser;
