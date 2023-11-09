import React from 'react'
import {useLocation} from "react-router-dom"

const Details = () => {

    const location = useLocation()

    console.log(location)

  return (
    <div className='p-3'>
        <h1 className='text-5xl font-bold'>{location.state.data.title}</h1>
        <h1 className='text-gray-500 mt-5'>By{location.state.data.author}</h1>
      <img src={location.state?.data?.urlToImage} className='h-96 w-full mt-3'/>
      <h1>{location.state?.data?.content}</h1>
      <h1>{location.state?.data?.description}</h1>
    </div>
  )
}

export default Details
