import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './movie';
import View from './view';
import Edit from './edit';
import Add from './add.js';
import DAO from '../backend/DAO.js'
import { useState, useEffect } from 'react'


const Movies = ({ updateMovie, onDelete, add, movies ,hideAdd, addMovie}) => {
  const [modalShow, setModalShow] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [showAdd, setShowAdd] = useState(add)
  const [movieToShow, setMovieToShow] = useState()
  useEffect(() => {
    
    console.log(movieToShow)
  }, [movieToShow])

  const onClick = async (id) => {
    const movieClicked = await DAO.getMovie(id)
    setMovieToShow(movieClicked)
    setModalShow(true)
  }
  const editMovie = async (id) => {
    const movieClicked = await DAO.getMovie(id)
    setMovieToShow(movieClicked)
    setModalShow(false)
    setModalEdit(true)
  }
  const onUpdate = (movie)=>{
    setMovieToShow()
    setModalEdit(false)
    updateMovie(movie)
  }

  const deleteMovie =  (id) => {
    setMovieToShow()
    setModalShow(false)
    onDelete(id)
  }
  return (
    <div className="row" >

      {movies.map((movie) => {
        return (
          <Movie onClick={onClick} key={movie.id} movie={movie} />
        );
      })}

      <Add show={add} onHide={hideAdd} addMovie={addMovie}/>
      {
        movieToShow && 
        <>
        <View onDelete={deleteMovie} edit={editMovie} movie={movieToShow} show={modalShow} onHide={() => setModalShow(false)} />
        <Edit updateMovie={onUpdate} movie={movieToShow} show={modalEdit} onHide={() => setModalEdit(false)} />
        </>
        
      }
      
    </div>
  )
}

export default Movies