import React from 'react'

interface newsProp {
    news:any
    setSearch:any
    searchRef:any
    setMenu:any
}

const Footer = (props:newsProp) => {
  return (
    <div className='bg-black h-5/6 p-4'>
        <input ref={props.searchRef} onChange={(e)=> props.setSearch(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 outline-none text-black text-lg 
        rounded-sm  block w-full h-10 p-2.5 " placeholder="Search CNN clone..." required/>
        <hr className='mt-3'/>
        <div className='flex text-white pt-3 justify-between'>
        <h1 onClick={()=> props.setMenu("US")} className='cursor-pointer'>US</h1>
        <h1 onClick={()=> props.setMenu("world")} className='cursor-pointer'>World</h1>
        <h1 onClick={()=> props.setMenu("politics")} className='cursor-pointer'>Politics</h1>
        <h1 onClick={()=> props.setMenu("bussiness")} className='cursor-pointer'>Bussiness</h1>
        <h1 onClick={()=> props.setMenu("travel")} className='cursor-pointer'>Travel</h1>
        <h1 onClick={()=> props.setMenu("entertainment")} className='cursor-pointer'>Entertainment</h1>
        <h1 onClick={()=> props.setMenu("health")} className='cursor-pointer'>Health</h1>
        <h1 onClick={()=> props.setMenu("opinion")} className='cursor-pointer'>Opinion</h1>
        <h1 onClick={()=> props.setMenu("style")} className='cursor-pointer'>Style</h1>
        <h1 onClick={()=> props.setMenu("more")} className='cursor-pointer'>More</h1>
        <h1 onClick={()=> props.setMenu("audio")} className='cursor-pointer'>Audio</h1>
        <h1 onClick={()=> props.setMenu("live tv")} className='cursor-pointer'>Live TV</h1>
        </div>
        <hr className='mt-3'/>
        <h1 className='text-white text-4xl font-bold mt-4'>In Case You Missed It</h1>
        <div className='flex mt-3'>
        <img src={props.news[13]?.urlToImage} className='h-96 w-4/6 '/>
        <h1 className='text-white ml-3 font-medium'>{props.news[13]?.content}</h1>
        </div>
        <hr className='mt-3'/>
      <h1 className='text-white text-center mt-3'>© 2023 Cable News Network.All Rights Reserved.</h1>
    </div>
  )
}

export default Footer
