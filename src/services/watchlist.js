const STORAGE_KEY = "watchlist";

export const getWatchlist = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const addToWatchlist = (movie) => {
  const current = getWatchlist();
  const alreadyExists = current.some(
    (savedMovie) => savedMovie.id === movie.id
  );
  if (alreadyExists) return current;
  
  const updated = [...current, movie];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const removeFromWatchlist = (id) => {
  const current = getWatchlist();
  const updated = current.filter((savedMovie) => savedMovie.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const isInWatchlist = (id) => {
    const cirremt = getWatchlist();
    return current.some((savedMovie) => savedMovie.id === id);
};