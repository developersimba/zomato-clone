import React, { useEffect, useState } from 'react'
import welcome from "../images/welcome.jpg"
import arrow from "../images/right-arrow.png"
import { Link } from 'react-router-dom'

const Welcome = () => {

  const [rest,setRest] = useState([])

                        const getRestaurants = async() =>{
                          try{
                            await fetch("https://api.spoonacular.com/food/restaurants/search?apiKey=6bd49cd96d0c4f7d98c3b48b3d428676")
                            .then(res => res.json())
                            .then(json => setRest(json.restaurants))
                          }catch(err){
                            console.error(err)
                          }
                         }

                         
                         useEffect(()=>{
                           getRestaurants()
                         },[])

  return (
    <>
     <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url(${welcome})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='h-screen'>
      <div className='text-white text-center text-xl ml-64 pt-5'>
        <Link to="/login">
        <button className='ml-96'>Log in</button>
        </Link>
        <Link to="/signup">
        <button className='ml-9'>Sign up</button>
        </Link>
      </div>
      <div className='text-center text-white mt-36'>
      <h1 className='text-6xl italic font-extrabold'>Zomato clone</h1>
      <h1 className='text-4xl mt-7'>Find the best restaurants, cafés<br/> around the World</h1>
      </div>
    </div>
    <div className='text-center'>
      <h1 className='text-4xl mt-7'>Popular locations around the World</h1>
      <h1 className='text-2xl mt-9 text-gray-600'>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food,<br/> Zomato clone covers it all. Explore menus, and millions of restaurant photos and reviews from users<br/> just like you, to find your next great meal.</h1>
    </div>
    <div className='grid grid-cols-3'>
    {rest?.map((data:any)=>{
      return <>
     <Link to="/main" state={{city:data.address?.city}}>
     <div className='flex shadow-lg rounded-xl w-80 items-center p-4 mt-20 ml-16 border border-spacing-1'>
      <h1 className='text-xl'>{data.address?.city}</h1>
      <img src={arrow} className='w-3 h-3 ml-40'/>
    </div>
     </Link>
      </>
    })}
    </div>
   
    </>
  )
}

export default Welcome
