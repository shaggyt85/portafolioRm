import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

const Typewrite_effect = () => {

  return (
    <div className="w-full h-220 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl text-textBase text-left p-4 ">
            <TypeWriterEffect
            textStyle={{ fontFamily: 'Poppins' }}
            startDelay={100}
            cursorColor="black"
            text="Hello, I am"
            typeSpeed={50}
            />
          </h1>
          <h2 className="text-lg text-textBase text-left p-4">
          <TypeWriterEffect
            textStyle={{ fontFamily: 'Poppins', color: 'white', fontSize: '2rem' }}
            startDelay={1000}
            cursorColor="black"
            text="Robert Medina"
            typeSpeed={50}
            />
          </h2>
          <h2 className="text-lg text-textBase text-left p-4">
            <TypeWriterEffect 
            textStyle={{
                fontFamily: 'Poppins',
                color: '#8f9091',
                fontWeight: 400,
                fontSize: '1.5rem',
              }}
              startDelay={2000}
              cursorColor="#fff"
              multiText={[
                'Software Developer',
                'Web Developer',
                'Full Stack'
              ]}
              multiTextDelay={1000}
              typeSpeed={50}
              multiTextLoop
            />
          </h2>
          </div>
  )
}

export default Typewrite_effect