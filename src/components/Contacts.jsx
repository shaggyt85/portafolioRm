import React from 'react'
import { SocialLinks } from '../data/data'
import { motion } from "framer-motion";

const Contacts = () => {
  const socials = SocialLinks.map((n) => {
    return (
          <motion.a  whileTap={{scale: 0.5}} target="_blank" rel="noopener noreferrer" key={n.id} href={n.link} className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3 ' >
            {n.iconsSrc}
            <p className='text-lg text-textBase'>{n.name}</p>
          </motion.a>
    )
  })
  return (
    <div id="contact" className="flex  flex-wrap items-center justify-evenly relative bg-primary pb-10">
      <section  className='flex flex-wrap items-center justify-center my-24 md:max-w-screen-xl bg-primary p-4'>
        <p className='text-2xl text-gray-400 capitalize'>
          follow me on
        </p>
        <div 
        
        className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
      {socials}
      </div>
      </section>
      </div>
  )
}

export default Contacts