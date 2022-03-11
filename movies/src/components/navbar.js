import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navigationbar = ({showAddMovie}) => {
  return (
      <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand >Movies</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>showAddMovie()}>Add</Nav.Link>

                        <Nav.Link >Home</Nav.Link>
               
                
                </Nav>
            </Container>
        </Navbar> <br />
      </>
  )
}

export default Navigationbar
