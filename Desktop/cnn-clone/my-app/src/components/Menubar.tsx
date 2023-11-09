import React from 'react'

interface newsProps {
    news:any
}


const Menubar = (props:newsProps) => {

  return (
    <div className='p-7 text-center'>
      <h1>{props?.news[0]?.title}   |   {props?.news[1]?.title}   |   {props?.news[2]?.title}   |   {props?.news[3]?.title}</h1>
    </div>
  )
}

export default Menubar
