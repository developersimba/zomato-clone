import React from 'react'
import logo from "../images/cnn-logo.png"
import menu from "../images/menu.jpg"
import lens from "../images/lens.png"
import {Link} from "react-router-dom"
import { auth } from '../firebase/setup'
import { signOut } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

interface menuProp {
    setMenu:any
    searchRef:any
}

const Navbar = (props:menuProp) => {

  const logout = async() =>{
    try{
      await signOut(auth)
      !auth.currentUser?.email && toast.success("LoggedOut successfully")
    }catch(err){
      console.error(err)
      let error:any = err
      toast.error(error)
    }
  }

  return (
    <>
    <ToastContainer/>
    <div className='bg-black w-full text-white flex h-10'>
        <img src={menu} onClick={()=> props.searchRef.current.focus()} className='w-12 h-10 ml-6 cursor-pointer'/>
        <img src={logo} onClick={()=> props.setMenu("Politics")} className='w-12 h-10 cursor-pointer'/>
        <div className='flex  p-2'>
        <h1 onClick={()=> props.setMenu("US")} className='ml-5 cursor-pointer'>US</h1>
      <h1 onClick={()=> props.setMenu("World")} className='ml-5 cursor-pointer'>World</h1>
      <h1 onClick={()=> props.setMenu("Politics")} className='ml-5 cursor-pointer'>Politics</h1>
      <h1 onClick={()=> props.setMenu("Bussiness")} className='ml-5 cursor-pointer'>Bussiness</h1>
      <h1 onClick={()=> props.setMenu("Opinion")} className='ml-5 cursor-pointer'>Opinion</h1>
      <h1 onClick={()=> props.setMenu("Health")} className='ml-5 cursor-pointer'>Health</h1>
      <h1 onClick={()=> props.setMenu("Entertainment")} className='ml-5 cursor-pointer'>Entertainment</h1>
      <h1 onClick={()=> props.setMenu("Style")} className='ml-5 cursor-pointer'>Style</h1>
      <h1 onClick={()=> props.setMenu("Travel")} className='ml-5 cursor-pointer'>Travel</h1>
      <h1 onClick={()=> props.setMenu("more")} className='ml-5 cursor-pointer'>More</h1>
      <h1 onClick={()=> props.setMenu("audio")} className='ml-44 cursor-pointer'>Audio</h1>
      <h1 onClick={()=> props.setMenu("live tv")} className='ml-5 cursor-pointer'>Live TV</h1>
      <img onClick={()=> props.searchRef.current.focus()} src={lens} className='ml-3 w-9 h-6 cursor-pointer'/>
      {auth.currentUser?.emailVerified ? <h1 onClick={logout} className='border border-spacing-1 rounded-lg ml-3 pl-2 font-semibold w-16 cursor-pointer'>Logout</h1> : 
      <Link to="/login"><h1 className='border border-spacing-1 rounded-lg ml-3 pl-2 font-semibold w-16 cursor-pointer'>Log In</h1></Link>}
        </div>
    </div>
    </>
   
  )
}

export default Navbar
