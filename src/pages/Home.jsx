import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/tmdb";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
  console.log("useEffect się odpalił");
  getPopularMovies()
    .then((data) => {
      console.log("Dane przyszły:", data);
      setMovies(data);
      setLoading(false);
    })
    .catch((err) => {
      console.log("Błąd:", err);
      setError("Nie udało się pobrać filmów");
      setLoading(false);
    });
}, []);

    if (loading) return <p>Ładowanie...</p>;
    if (error) return <p>{error}</p>


  return (
    <div>
        <h1>Popularne filmy</h1>
        <div className="movie-grid">
            {movies.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card"
                >
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt="{movie.title"
                    className="movie-poster"
                    />
                    <p className="movie-title">{movie.title}</p>
                </Link>
            ))}
        </div>
    </div>
  )



}

export default Home;