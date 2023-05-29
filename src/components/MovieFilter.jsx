import React from "react";
import "./MovieFilter.css";

function MovieFilter({
  currentPage,
  setSortByDate,
  setSortByName,
  sortByDate,
  sortByName,
  movieName,
  getMovies,
}) {
  function handleSort(event) {
    if (event.target.id === "order-by-date") {
      setSortByDate(event.target.checked);
      setSortByName(false);
      getMovies(
        movieName.current,
        currentPage.current,
        event.target.checked,
        false
      );
    }
    if (event.target.id === "order-by-name") {
      setSortByDate(false);
      setSortByName(event.target.checked);
      getMovies(
        movieName.current,
        currentPage.current,
        false,
        event.target.checked
      );
    }
  }

  return (
    <div className="movie-search-filters">
      <input
        type="checkbox"
        id="order-by-date"
        onChange={handleSort}
        checked={sortByDate}
      ></input>
      <label htmlFor="Order by date">Order by date</label>
      <input
        type="checkbox"
        id="order-by-name"
        onChange={handleSort}
        checked={sortByName}
      ></input>
      <label htmlFor="Order by name">Order by name</label>
    </div>
  );
}

export default MovieFilter;
