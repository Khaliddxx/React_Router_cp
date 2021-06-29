import "./App.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import MovieList from "./Components/MovieList";
import { movies } from "./movies";
import AddMovieModal from "./Components/AddMovieModal";

function App() {
  const [data, setData] = useState(movies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [range, setRange] = useState(0);

  useEffect(() => {
    clearFilters();
  }, [movies]);

  const clearFilters = () => {
    setRange(0);
    setFilteredMovies([...movies]);
  };

  const filter = () => {
    let newMovies = movies;
    newMovies = newMovies.filter((m) => m.rating == range);
    setFilteredMovies([...newMovies]);
  };

  return (
    <div className="App">
      <AddMovieModal onAdd={setFilteredMovies} />
      <input
        style={{ marginBottom: 50 }}
        type="range"
        value={range * 10}
        class="slider"
        id="rate"
        onChange={(e) => setRange(Math.round(Number(e.target.value) / 10))}
      ></input>
      <Button className="mr-3" onClick={filter}>
        Apply Filter
      </Button>
      <Button className="mr-3" onClick={clearFilters}>
        Clear Filter
      </Button>
      <span className="m-auto">{range}</span>
      <MovieList data={filteredMovies} />
    </div>
  );
}

export default App;
