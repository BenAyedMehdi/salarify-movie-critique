import {Modal, Button} from 'react-bootstrap'
import EditForm from "./edit-form"

const Edit = ({movie, show, onHide, updateMovie}) => {

  return (
    <Modal
      show = {show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header onClick={onHide} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {movie.name}
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className='row'>
              <EditForm movie={movie} updateMovie={updateMovie}/>
          </div>
      </Modal.Body>
      <Modal.Footer>
          
          <Button onClick={onHide}>Close</Button>
          
      </Modal.Footer>
      </Modal>
  )
}

export default Edit