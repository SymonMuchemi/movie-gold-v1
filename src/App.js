import './App.css';
import { useState, useEffect } from 'react';
import Layout from './components/layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';


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
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
