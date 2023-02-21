import React, { useState } from 'react'
import {IoMenu} from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import cv from '../cvpdf/RobertMedina.pdf'

const Nav = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    
    <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:max-w-screen-xl bg-navBar p-4 rounded-2xl flex items-center' >
            <p className='text-lg text-slate-200 font-medium'>Robert Medina</p>
            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
                <a href="#home" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Home</a>
                <a href="#about" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>About</a>
                <a href="#projects" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Projects</a>
                <a href="#contact" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Contact</a>
                <a href={cv} target="_blank" rel="noopener noreferrer" className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out'>Download CV</a>
            </div>  
            <motion.div 
            whileTap={{scale: 0.5}}
            className='block md:hidden ml-auto cursor-pointer' onClick={()=> setIsActive(!isActive)}>
                <IoMenu className='text-2xl text-textBase' />
            </motion.div>  
            <AnimatePresence initial={false}>
            {isActive && (
                <motion.div 
                
                animate={{opacity : 1, scale : 1.20 }}
                initial={{opacity : 0, scale : 0.5 }}
                exit={{opacity : 0, scale : 0.5 }}
                transition={{ type: "spring", delay: 0.1 }}
                className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-14 flex flex-col justify-center items-center gap-6'>
                <a href="#home" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={ () => setIsActive(false)} >Home</a>
                <a href="#about" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={ () => setIsActive(false)}>About</a>
                <a href="#projects" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={ () => setIsActive(false)}>Projects</a>
                <a href="#contact" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={ () => setIsActive(false)}>Contact</a>
                <a href={cv} target="_blank" rel="noopener noreferrer" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out'>Download CV</a>
                </motion.div>

)}
</AnimatePresence>
        </div>
    </nav>
  )
}

export default Nav