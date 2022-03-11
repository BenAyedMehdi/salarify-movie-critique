import {Modal,Image,  Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import Movie from './movie'
import Details from './Details'



const View = ({movie, show, onHide, edit, onDelete}) => {
    
    const rates = Object.keys(movie.ratings).map((key) => [(key), movie.ratings[key]])
    console.log(rates.keys());
    let avg = rates.reduce((prev,cur)=>{
        return prev+cur[1]
    }, 0)/rates.length
    console.log(avg);
    

    return (
        <>
            <Modal
                show = {show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header onClick={onHide} closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                <Details movie={movie}/>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=> onDelete(movie.id)}>Delete</Button>
                    <Button onClick={()=> edit(movie.id)}>Edit</Button>
                    <Button onClick={onHide}>Close</Button>
                    
                </Modal.Footer>
                </Modal>
        </>
    )
  }
  
  export default View
  