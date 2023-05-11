import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Container, Row } from 'react-bootstrap'

function Home() {

  const [datas, setDatas] = useState([])

  // console.log(datas)
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(data => setDatas(data))

  }, [])

  return (
    <Container><Row>
      {datas?.map((data) => <Cards data={data.show} key={data.show.id}></Cards>)}
    </Row>
    </Container>
  )
}

export default Home