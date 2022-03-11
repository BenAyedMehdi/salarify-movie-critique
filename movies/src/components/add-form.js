import { useState , useEffect} from 'react'
import { Row ,Col, Form} from 'react-bootstrap'
import Rating from './Rating'

const AddForm = ({addMovie }) => {

  const [name, setname] = useState('')
  const [year, setYear] = useState('')
  const [director, setDirector] = useState('')
  const [stars, setStars] = useState('')
  const [writers, setwriters] = useState('')
  const [imgUrl, setimgUrl] = useState('')
  const [review, setReview] = useState('')
  
  
  const [directing , setDirecting ] = useState(0)
  const [acting , setActing ] = useState(0)
  const [costumeDesign , setCostumeDesign ] = useState(0)
  const [editing , setEditing ] = useState(0)
  const [music , setMusic ] = useState(0)
  const [visualEffects , setVisualEffects ] = useState(0)
  const [screenplay , setScreenplay ] = useState(0)
  
  useEffect (()=> {
    console.log(music)
  },[music])
  const onSubmit = (e) => {
    
    e.preventDefault()
    if (!name) {
      alert('Please add a title')
      return
    }
    
    const movie = {
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
    
    addMovie(movie)
  }
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
    }
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
                    
                      <Rating name='directing' handleChange={changeRating}/>
                      <Rating name='acting' handleChange={changeRating}/>
                      <Rating name='costumeDesign' handleChange={changeRating}/>
                      <Rating name='editing' handleChange={changeRating}/>
                      <Rating name='music' handleChange={changeRating}/>
                      <Rating name='visualEffects' handleChange={changeRating}/>
                      <Rating name='screenplay' handleChange={changeRating}/>


                    <div className="form-group">
                    <button style={{margin:'10px'}} className="btn btn-primary" type="submit">Add movie</button>
                    </div>
                </Form>
            </div> 
  )
}

export default AddForm