import React, { useEffect } from 'react'
import dish from "../images/dish.jpg"
import { Link } from 'react-router-dom'

interface restProp {
  rest: any
  city:any
  search:any
}

const Home = (props: restProp) => {

console.log(props.rest)

  return (
    <div className='p-4 pl-20'>
      <h1 className='font-semibold text-3xl'>Best Food in Location</h1>
      {props.city ? <div className='grid grid-cols-3'>
      {props.rest?.filter((data:any)=> data.address.city.includes(props.city) ).filter((data:any) => data.name.includes(props.search)).map((data:any) => {
        return <>
          <Link to="/details" state={{data:data,city:data.address.city}}>
          <div className="max-w-xs rounded-xl overflow-hidden shadow-sm mt-12 p-4">
            <img className="w-full rounded-2xl h-60" src={data.food_photos[0] ?? data.store_photos[0]} />
            <div className="py-4">
              <div className="font-semibold text-lg mb-2">{data.name}</div>
              <p className="text-gray-400 text-base">
                {data.cuisines[0]}, {data.cuisines[1]}...
              </p>
            </div>
          </div>
          </Link>
        </>
      })}
      </div>
      : 
      <div className='grid grid-cols-3'>
      {props.rest?.filter((data:any)=> data.name.includes(props.search)).map((data:any) => {
        return <>
          <div className="max-w-xs rounded-xl overflow-hidden shadow-sm mt-12 p-4">
            <img className="w-full rounded-2xl h-60" src={data.food_photos[0] ?? data.store_photos[0]} />
            <div className="py-4">
              <div className="font-semibold text-sm mb-2">{data.name}</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </>
      })}
      </div>}
    </div>

  )
}

export default Home
