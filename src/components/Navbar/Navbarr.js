import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarr() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className='mb-5'>
        <Container>
          <Navbar.Brand href='/'>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/'>Features</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbarr