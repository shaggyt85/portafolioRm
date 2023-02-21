/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Spline from "@splinetool/react-spline";
import Typewrite_effect from './Typewrite_effect';

const Splines = () => {
  return (
    <div id="home" className="flex w-screen h-auto min-h-screen flex-col items-center justify-center relative bg-primary pb-10">
        <section 
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-xl"
        
      >
        <Typewrite_effect/>
        <div className="relative md:max-w-screen-xl">
        <Spline
          className="canvas"
          scene="https://prod.spline.design/Wzr6M4vYWVvzEgYD/scene.splinecode"
        />
        <div className="absolute  w-full justify-center items-center flex">
          <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
            <p className="text-textBase noselect">Press and drag</p>
            
          </div>
        </div>
      </div>
      </section>
      </div>
  )
}

export default Splines


