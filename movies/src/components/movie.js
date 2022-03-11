import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'

const Movie = ({ movie, onClick }) => {

  return (
    <div className="col-lg-4 pb-1">
      <button>
      <Card onClick={() => onClick(movie.id)} style={{ height: '100%', width: '18rem' }}>
        <Card.Img style={{ height: '25rem' }} variant="top" src={movie.imgUrl} />
        <Card.Body>
          <div className='container' >
            <Card.Title style={{ height: '3rem' }}>{movie.name}</Card.Title>
            <Card.Text style={{ height: '2rem' }}>{movie.year}</Card.Text>
          </div>

        </Card.Body>
      </Card>
      </button>
      
    </div>
  )
}

export default Movie