import React, { useEffect, useState } from 'react'
import lens from "../images/lens.png"
import Avatar from 'react-avatar'
import { auth } from '../firebase/setup'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import locations from "../images/location.png"
import drop from "../images/drop.png"
import out from "../images/logout.png"
import {toast,ToastContainer} from "react-toastify"

interface cityProp {
  city?:any
  setSearch?:any
}

const Navbar = (props:cityProp) => {

  const location = useLocation()

  const navigate = useNavigate()


    const [authStore,setAuthStore] = useState<any>([])

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          setAuthStore(user)
        })
    },[auth])

    const logout = async() =>{
        try{
            await signOut(auth)
            !auth.currentUser?.email && toast.success("LoggedOut successfully")
            setTimeout(()=>{
              !auth.currentUser?.email && navigate("/")
            },1000)
        }catch(err){
            console.error(err)
            toast.error("Something went wrong")
        }
    }

  

  return (
    <>
    <ToastContainer/>
      <div className='flex p-4'>
      <h1 className='text-3xl font-extrabold italic ml-20'>Zomato</h1>
      <div className='ml-6 shadow-lg flex items-center border border-gray-300 w-7/12 rounded-lg p-3 h-12'>
      <img src={locations} className='h-5 w-5 ml-2'/>
      <input  className="outline-none  text-gray-900 text-sm rounded-lg   block w-40 p-2.5" placeholder={props.city ?? "Location"} required />
      <img src={drop} className='h-3 w-3 ml-5'/>
      <h1 className='ml-3 text-gray-400'>|</h1>
        <img src={lens} className='h-5 w-5 ml-4'/>
        <input onChange={(e)=> props.setSearch(e.target.value)} className="outline-none  text-gray-900 text-sm rounded-lg   block w-96 p-2.5" placeholder="Search for restaurants" required />
      </div>
      <div className='flex items-center'>
      {authStore?.photoURL ? <img src={authStore?.photoURL} className='w-12 h-12 ml-28 rounded-full'/>
      : authStore?.email ? <Avatar name={authStore?.displayName ?? authStore?.email} round={true} size='40' className='ml-1'/>
      : ""}
      <h1 className='ml-2'>{authStore?.displayName?.substring(0,authStore?.displayName.indexOf(" ")) ?? authStore?.email?.substring(0,authStore?.email.indexOf("@"))}</h1>
      {!auth.currentUser?.email && <Link to="/login"><h1 className='text-gray-600 text-lg cursor-pointer ml-20'>Log in</h1></Link>}
      {!auth.currentUser?.email && <Link to="/signup"><h1 className='text-gray-600 text-lg ml-5 cursor-pointer'>Sign up</h1></Link>}
      {auth.currentUser && <img onClick={logout} src={out} className='ml-4 shadow-lg p-2 rounded-xl text-gray-600 cursor-pointer w-7 h-7'/>}
      </div>
    </div>
    </>
  
  )
}

export default Navbar
