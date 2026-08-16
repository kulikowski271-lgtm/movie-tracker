import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/tmdb";
import { Link } from "react-router-dom";

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
        <div style={{display: "flex", flexWrap: "wrap", gap: "16px"}}>
            {movies.map((movie) => (
                <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                style={{width: "150px", textDecoration: "none", color: "inherit"}}
                >
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt="{movie.title"
                    style={{width: "100%", borderRadius: "8px"}}
                    />
                    <p>{movie.title}</p>
                </Link>
            ))}
        </div>
    </div>
  )



}

export default Home;