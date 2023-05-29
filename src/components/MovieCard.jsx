import React from "react";
import "./MovieCard.css";
import nullPoster from "/null_poster.png";

function MovieCard(props) {
  let poster = props.poster;
  if (poster === "N/A") {
    poster = nullPoster;
  }

  return (
    <div className="movie-card">
      <a href={"http://www.google.com/search?q="+props.title.replace(" ","+")+"+"+props.year} target="_blank">
        <h3>{props.title}</h3>
        <img className="hvr-float-shadow" src={poster} alt={props.title} />
        </a>
        <p>{props.year}</p>
      
    </div>
  );
}

export default MovieCard;
