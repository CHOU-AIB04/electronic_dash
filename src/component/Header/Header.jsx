import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GrAnnounce } from "react-icons/gr";
import { IoTimerSharp } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";
import { RiQuestionAnswerFill } from "react-icons/ri";
import logo from "../../assets/logo.png"
const Header = () => {
    let Active = {
        backgroundColor : "rgba(11, 18, 147, 0.753)",
        color : "white"
    }
  return (
    <>
    <article className='sh'>
         <header className='h-[60px] flex items-center pl-10'>
            <Link to="" className='flex items-center gap-2'>
               <img src={logo} alt="logo" className='w-[200px]'/>
            </Link>
        </header>
        <section className='grid grid-cols-4 h-14 gap-1'>
            <NavLink to="" style={({isActive})=> isActive ? Active : null}  className='text-[9px] md:text-[16px] w-full h-full font-bold flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 bg-white text-blue-900 duration-500 transition-all hover:text-white hover:bg-blue-900 border border-blue-900 rounded-md cursor-pointer'>
                <p>Add_Product</p>
                <GrAnnounce size={20}/>
            </NavLink>
            <NavLink to="/Products" style={({isActive})=> isActive ? Active : null} className='text-[9px] md:text-[16px] w-full h-full font-bold flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 bg-white text-blue-900 duration-500 transition-all hover:text-white hover:bg-blue-900 border border-blue-900 rounded-md cursor-pointer'>
                <p>All_Product</p>
                <GrAnnounce size={20}/>
            </NavLink>
            <NavLink to="/Orders" style={({isActive})=> isActive ? Active : null} className='text-[9px] md:text-[16px] w-full h-full font-bold flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 bg-white text-blue-900 duration-500 transition-all hover:text-white hover:bg-blue-900 border border-blue-900 rounded-md cursor-pointer'>
                <p>Order</p>
                <MdLocalOffer size={20}/>
            </NavLink>
            <NavLink to="/Messages" style={({isActive})=> isActive ? Active : null} className='text-[9px] md:text-[16px] w-full h-full font-bold flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 bg-white text-blue-900 duration-500 transition-all hover:text-white hover:bg-blue-900 border border-blue-900 rounded-md cursor-pointer'>
                    <p>Message</p>
                    <RiQuestionAnswerFill size={20}/>
            </NavLink>
        </section>
    </article>
       
    </>
  )
}

export default Header