import {Modal, Button} from 'react-bootstrap'
import AddForm from "./add-form"

const Add = ({ show, onHide, addMovie}) => {

  return (
    <Modal
      show = {show }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header onClick={()=>onHide()} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Add a new review
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className='row'>
            <AddForm addMovie={addMovie} />
          </div>
      </Modal.Body>
      <Modal.Footer>
          
          <Button onClick={()=>onHide()}>Close</Button>
          
      </Modal.Footer>
      </Modal>
  )
}

export default Add