import { useState, useEffect } from 'react'
import './App.css';
import DAO from './backend/DAO.js'
import Navigationbar from './components/navbar';
import Movies from './components/movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const [movies, setMovies] = useState([])
  const [adding, setAdding] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromServer = await DAO.getMovies()
      setMovies(() => moviesFromServer)
    }
    getMovies()
  }, [])

  const updateMovie = async (movie) => {
    const data = await DAO.updateMovie(movie)
    const updatedMovies = [...movies.filter(item=>item.id!=movie.id), movie].sort((a,b)=> (
      a.id>b.id ? 1:-1
    ))
    setMovies(updatedMovies)
  }


  const deleteMovie = async (id) => {
    const res = await DAO.deleteMovie(id)
    if(res.data){
      setMovies((movies) => (
        movies.filter((movie) => (
          movie.id != id
        ))
      ))
    }else{
      res.error && console.error(res.error)
    }

    
  }
  const addMovie = async (movie) => {
    const data = await DAO.addMovie(movie)
    setMovies([...movies, data])
    setAdding(false)
  }

  const showAddMovie = async () => {
    setAdding(true)
  }
  return (
    <Router>
      <div className="container">
        <Navigationbar showAddMovie={showAddMovie} />
        <Movies updateMovie={updateMovie} onDelete={deleteMovie} addMovie={addMovie} add={adding} hideAdd={()=> setAdding(false)}  movies={movies} />
      </div>
    </Router>
  );
}
export default App;
