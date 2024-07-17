import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { IoTimerSharp } from "react-icons/io5";
import { Data } from '../../context/watch';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from "../../assets/logo.png"

const Auth = () => {
    let navigate = useNavigate()
    let  {Handlechange,Formconfirmation,secretKey,encryptId,decryptId} = useContext(Data)
    let [login,setlogin] = useState({
        email : "",
        pass : "",
    })
    const Change = (event)=>{
        Handlechange(event,setlogin,login)
    }
    const Confirm = (event)=>{
        event.preventDefault()
        if (Formconfirmation(login) === 2) {
            const data = new FormData()
            data.append("email",login.email)
            data.append("pass",login.pass)
            axios.post("http://localhost/MY_PROJECTS/electronic_project2/auth.php",data).then((res)=>{
                if (!res.data === false) {
                    navigate("/")
                    toast.success("welcome to then dashboard")
                    const encrypt = encryptId(res.data.Id.toString(),secretKey)
                    window.sessionStorage.setItem("token",encrypt)

                } else {
                    toast.error("the email or password are incorrect try again")
                }
            })
        }
    }
  return (
    <>
    <section className='absolute left-1/2 top-1/2 h-96 w-[400px] -translate-x-1/2 -translate-y-1/2 sh rounded-md flex flex-col items-center justify-between'>
        <div className='flex items-center'>
            <img src={logo} alt="pic" className='w-[170px] mix-blend-multiply object-cover'/>
        </div>
        <form onSubmit={Confirm} className="h-[85%] w-full  flex flex-col items-center justify-center gap-7">
            <TextField name='email' className='w-[90%]' label="Email" type="email" variant="standard" onChange={Change}/>
            <TextField name='pass' className='w-[90%]' label="Password" type="password" variant="standard" onChange={Change}/>
            <button type='submit' className='w-[100px] h-10 text-sm rounded-md sh bg-white text-yellow-900 duration-500 transition-all hover:text-white hover:bg-yellow-900'>Log In</button>
        </form>
    </section>
    </>
  )
}

export default Auth