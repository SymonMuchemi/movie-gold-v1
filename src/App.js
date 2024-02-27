import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';

function App() {
  const [movie, setMovie] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/movies");
      const movieData = await response.json()
      console.log(movieData)
      setMovie(movieData);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
