import React from "react";
import MovieCard from "./MovieCard.jsx";
import "./MovieGrid.css";

function MovieGrid(props) {
  return (
    <div className="movie-grid">
      {props.factError && (
        <div className="fact-error">
          <h3>Something went wrong</h3>
        </div>
      )}
      {props.moviesList?.totalResults === 0 && (
        <div className="no-results">
          <h3>No results found</h3>
        </div>
      )}
      {props.moviesList?.response &&
        props.moviesList.movies.map((movie) => {
          return (
            <MovieCard
              key={movie.imdbID}
              title={movie.title}
              year={movie.year}
              imdbID={movie.imdbID}
              type={movie.type}
              poster={movie.poster}
            />
          );
        })}
    </div>
  );
}

export default MovieGrid;
