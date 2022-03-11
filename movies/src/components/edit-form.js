import { useState ,useEffect} from 'react'
import { Row ,Col, Form} from 'react-bootstrap'
import Rating from './Rating'

const EditForm = ({updateMovie ,movie}) => {
  console.log(movie)
  const [name, setname] = useState(movie.name)
  const [year, setYear] = useState(movie.year)
  const [director, setDirector] = useState(movie.director)
  const [stars, setStars] = useState(movie.stars)
  const [writers, setwriters] = useState(movie.writers)
  const [imgUrl, setimgUrl] = useState(movie.imgUrl)
  const [review, setReview] = useState(movie.review)
  
  
  const [directing , setDirecting ] = useState(movie.ratings.directing)
  const [acting , setActing ] = useState(movie.ratings.acting)
  const [costumeDesign , setCostumeDesign ] = useState(movie.ratings.costumeDesign)
  const [editing , setEditing ] = useState(movie.ratings.editing)
  const [music , setMusic ] = useState(movie.ratings.music)
  const [visualEffects , setVisualEffects ] = useState(movie.ratings.visualEffects)
  const [screenplay , setScreenplay ] = useState(movie.ratings.screenplay)

  const id = movie.id
  const changeRating = (name, value) => {
    switch (name) {
      case 'directing':
        setDirecting(value);
        break;
      case 'acting':
        setActing(value);
        break;
      case 'costumeDesign':
        setCostumeDesign(value);
        break;
      case 'editing':
        setEditing(value)
        break;
        case 'music':
          setMusic(value)
          break;
        case 'visualEffects':
          setVisualEffects(value)
          break;
          case 'screenplay':
            setScreenplay(value)
            break;
      default:
    }}
  const onSubmit = (e) => {
    
    e.preventDefault()

    if (!name) {
      alert('Please add a title')
      return
    }
    const updatedMovie = {
      id:movie.id,
      name,
      year,
      director,
      stars,
      writers,
      imgUrl,
      review,
      ratings :{
        directing,
        acting,
        costumeDesign,
        editing,
        music,
        visualEffects,
        screenplay
      }
    }
    updateMovie(updatedMovie)
  }

  return (
    <div style={{marginTop: 10}}>
                <Form onSubmit={onSubmit}>
                    <Row>
                      <Col>
                        <div className="form-group">
                          <label>Title: </label>
                          <input type="text" className="form-control"value={name} onChange={(e) => setname(e.target.value)}/>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group">
                            <label>Year: </label>
                            <input type="text" className="form-control" value={year} onChange={(e) => setYear(e.target.value)}/>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="form-group">
                          <label>Director: </label>
                          <input type="text" className="form-control"value={director} onChange={(e) => setDirector(e.target.value)}/>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group">
                          <label>Stars: </label>
                          <input type="text" className="form-control"value={stars} onChange={(e) => setStars(e.target.value)}/>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="form-group">
                          <label>Writers: </label>
                          <input type="text" className="form-control"value={writers} onChange={(e) => setwriters(e.target.value)}/>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-group">
                          <label>Image URL: </label>
                          <input type="text" className="form-control" value={imgUrl} onChange={(e) => setimgUrl(e.target.value)}/>
                        </div>
                      </Col>
                    </Row>

                    <div className="form-group">
                        <label>Review: </label>
                        <input type="text" className="form-control"value={review} onChange={(e) => setReview(e.target.value)}/>
                    </div>
                    
                      <Rating name='directing' value={directing} handleChange={changeRating}/>
                      <Rating name='acting' value={acting} handleChange={changeRating}/>
                      <Rating name='costumeDesign' value={costumeDesign} handleChange={changeRating}/>
                      <Rating name='editing' value={editing} handleChange={changeRating}/>
                      <Rating name='music' value={music} handleChange={changeRating}/>
                      <Rating name='visualEffects' value={visualEffects} handleChange={changeRating}/>
                      <Rating name='screenplay' value={screenplay} handleChange={changeRating}/>


                    <div className="form-group">
                    <button style={{margin:'10px'}} className="btn btn-primary" type="submit">Edit movie</button>
                    </div>
                </Form>
            </div> 
  )
}

export default EditForm