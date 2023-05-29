import "./App.css";
import Footer from "./components/Footer";
import MovieBrowser from "./components/MovieBrowser";
import MovieGrid from "./components/MovieGrid";
import MoviePagination from "./components/MoviePagination";
import { useMoviesList } from "./hooks/useMoviesList";
import { useState, useRef, useEffect } from "react";


function App() {
  const { moviesList, factError, getMovies } = useMoviesList("Avengers", 1, false);
  const totalResults = Math.ceil((moviesList?.totalResults ?? 10) / 10);
  const [queryError, setError] = useState(null);
  const currentPage = useRef(1);
  const movieName = useRef(null);
  const [sortByDate, setSortByDate] = useState(false);
  const [sortByName, setSortByName] = useState(false);

  useEffect(() => {
    getMovies("Avengers", 1, false, false);
    movieName.current = "Avengers";
  }, []);

  function handlePageChange(page) {
    currentPage.current = page;
    window.scrollTo(0, 0);
    getMovies(movieName.current, page, sortByDate, sortByName);
  }

  return (
    <>
      <div className="app">
        <h1 className="tittle">Movie Finder</h1>
        <MovieBrowser 
        queryError={queryError}
        setError={setError}
        getMovies={getMovies}
        movieName={movieName}
        currentPage={currentPage}
        sortByDate={sortByDate}
        sortByName={sortByName}
        setSortByDate={setSortByDate}
        setSortByName={setSortByName}
         />
        <MovieGrid moviesList={moviesList} factError={factError} />
        <MoviePagination
          currentPage={currentPage.current}
          handlePageChange={handlePageChange}
          totalPages={totalResults}
          factError={factError}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
