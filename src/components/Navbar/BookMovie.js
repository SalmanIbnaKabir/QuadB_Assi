import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


function BookMovie({ data }) {

  // bookign modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // form data collect 
  const [state, setState] = useState({})
  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const movieId = data?.id;
  // console.log(movieId)
  const storeUser = () => {

    const injectMovieID = { ...state, movieId: movieId }
    
    // const getData = JSON.parse(localStorage.getItem("userDetails"))
    // if you want to user book multiple movie booking use filter for check movie name etc 
    const dataStringify = JSON.stringify(injectMovieID)
    // console.log(dataStringify)
    localStorage.setItem("userDetails", dataStringify)
    handleClose()
  }





  // console.log(state)
  return (
    <div className='container'>
      {
        data && <Card style={{ width: '30rem' }}>
          {data?.image ? <Card.Img style={{ height: '40rem' }} variant="top" src={data?.image?.original} /> : <Card.Img variant="top" src="https://static.tvmaze.com/uploads/images/medium_portrait/155/388118.jpg" />}


          <Card.Body>
            <Card.Title>Name: {data?.name} </Card.Title>

            <p className="text-primary fw-bold"> Rating: {data?.rating?.average ? data.rating?.average : "no rating"}</p>

            <p>
              <span className='text-primary fw-bold'>Summary:</span> {data?.summary.split('<p>')[1].split('</p>')[0]}
            </p>

            <p>Language: {data?.language}</p>
            <p>Movie Duration: {data?.runtime}</p>
            <a rel="noreferrer" className='fw-bold' href={data?.officialSite} target='_blank'> Official Site Link</a>
            <br />
            <br />

            <Button variant="primary" onClick={handleShow}>Book A Ticket</Button>
          </Card.Body>
        </Card>

      }

      {/* modal  */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Movie Name:  {data?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Time: {data?.schedule?.time}</p>
          <p>Days: {data?.schedule?.days}</p>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label >Full Name</Form.Label>
              <Form.Control className='mb-3' type="text" required placeholder="full Name" name='fullName' onChange={handleState} />
              <Form.Label>Email address</Form.Label>
              <Form.Control className='mb-3' type="email" required placeholder="name@example.com" name='email' onChange={handleState} />
              <Form.Label>Mobile Number </Form.Label>
              <Form.Control className='mb-3' type="number" required placeholder="+880" name='mobileNumber' onChange={handleState} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={storeUser}>Book Ticket</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default BookMovie