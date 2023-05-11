import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import BookMovie from './BookMovie';

function CardDetails() {
  let { state } = useLocation();
  const [datas, setDatas] = useState([])
  // console.log(state.data)
  
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(data => setDatas(data))

  }, [])

const filterDetails = datas.find(data => data.show.id === Number(state?.data))
const filterData = filterDetails?.show ;
// console.log(filterData)

  return (
    <div>
      <BookMovie data={filterData}></BookMovie>
    </div>
  )
}

export default CardDetails