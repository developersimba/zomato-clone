import React,{useState} from 'react'
import logo from "../images/cnn.png"
import {createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification} from "firebase/auth"
import { auth } from '../firebase/setup'
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const signup = async() =>{
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            onAuthStateChanged(auth,async(user:any)=>{
                await sendEmailVerification(user)
                toast.success("Link has been sent to your mail")
            })
        }catch(err){
            console.error(err)
            let error : any = err
            toast.error(error)
        }
    }

  return (
    <>
    <ToastContainer/>
     <div className='bg-red-100 h-screen flex flex-col items-center justify-center'>
            <div className='bg-white flex flex-col
             items-center justify-center w-5/12 h-5/6 rounded-lg  shadow-lg'>
                <img src={logo} className='w-16 h-14' />
                <h1 className='text-2xl font-bold mt-3'>Create your CNN account</h1>
                <h1 className='mt-2'>Already have an account?<Link to="/login"><span className='underline'>Sign in</span></Link>.</h1>
                <input onChange={(e)=> setEmail(e.target.value)} type="text" id="first_name" className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-96 p-2.5 " placeholder="Email address" required />
                <input  onChange={(e)=> setPassword(e.target.value)} type="password" id="first_name" className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-96 p-2.5 " placeholder="Password" required />
                <h1 className='text-sm mt-3'>By clicking 'Create account', a new account will be created in <br/>CNN clone website.</h1>
                <button onClick={signup} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96 mt-4 h-12">
                    Create Account
                </button>

            </div>
        </div>
    </>
   
  )
}

export default Signup
