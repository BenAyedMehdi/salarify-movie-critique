import React from 'react'
import { Card , ListGroup, ListGroupItem} from 'react-bootstrap'

const Details = ({movie}) => {

    const rates = Object.keys(movie.ratings).map((key) => [(key), movie.ratings[key]])
    const avg = rates.reduce((prev,cur)=>{
        return prev+cur[1]
    }, 0)/rates.length
    //console.log(avg);

  return (
    <div className="col pb-1">
      <Card style={{width: '100%'}}>
        <Card.Img  variant="top" src={movie.imgUrl} />
            <button>
        <Card.Header>
        <Card.Title  >
            <div>
            {movie.name}
            </div>
            <div>
            {movie.year}
            </div>
            </Card.Title>
        </Card.Header>
            </button>
        <Card.Body>
          <div className='container' >
              <h4>
                  
            <div>
                {`Director: ${movie.director}`}
            </div>
            <div>
                {`Stars: ${movie.stars}`}
            </div>
            <div>
                {`Writers: ${movie.writers}`}
            </div>
            <div>
                {`Review: ${movie.review}`}
            </div>
            <div>
                {`Overall score: ${avg.toFixed(1)}`}
            </div>
            </h4>
            <>{
                rates.map((item)=>(
                    <div>
                    {`${item[0]} : ${item[1]}/5`}
                    </div>
                ))
            }</>
          </div>

        </Card.Body>
      </Card>
      
    </div>
  )
}

export default Details
