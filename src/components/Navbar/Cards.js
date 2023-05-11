import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards({ data }) {
  


  return (
    <Col className='mb-5'>
      <Card style={{ width: '22rem' }}>
        {data.image ? <Card.Img style={{ height: '30rem' }} variant="top" src={data.image?.original} /> : <Card.Img variant="top" src="https://static.tvmaze.com/uploads/images/medium_portrait/155/388118.jpg" />}


        <Card.Body>
          <Card.Title>Name: {data.name} </Card.Title>

          <p className="text-primary"> Rating: {data.rating?.average ? data.rating?.average : "no rating"}</p>

          <Link to={`/show/${data.id}`} state={{ data: `${data.id}` }}>
            <Button variant="primary">Full Details</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Cards