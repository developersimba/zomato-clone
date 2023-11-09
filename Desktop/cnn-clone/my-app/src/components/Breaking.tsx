import React from 'react'

interface newsProp {
    news:any
    menu:any
}

const Breaking = (props:newsProp) => {
  return (
    <div className='grid grid-cols-2'>
      <div className='p-5'>
        {props.menu == "Politics" ? "" : <h1 className='text-5xl font-bold'>{props.menu}</h1>}
      {props.menu == "Politics" ? <h1 className='text-5xl text-center font-bold'>{props.news[3]?.title}</h1> : ""}
      <img src={props.news[4]?.urlToImage} className='mt-7'/>
      </div>
      <div className='grid grid-cols-2 p-3'>
      <div>
      <img src={props.news[8]?.urlToImage}/>
      <h1 className='font-bold text-lg mt-3'>{props.news[8]?.title}</h1>
      <h1><span className='font-extrabold text-4xl'>.</span>{props.news[8]?.content}</h1>
      </div>
      <div>
      <img src={props.news[9]?.urlToImage} className='ml-3'/>
      <h1 className='font-bold text-lg mt-3'>{props.news[9]?.title}</h1>
      <h1><span className='font-extrabold text-4xl'>.</span>{props.news[9]?.content}</h1>
      </div>
      </div>
    </div>
  )
}

export default Breaking
