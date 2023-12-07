import React from 'react'


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#CDF5FD] text-black-300 md:text-2xl'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-700'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hey, I'm Deven .</p>
            </div>
            <div>
              <p>Passionate final-year B.Tech Computer Science Engineering student at PES University, eager to embark on a transformative internship. Proficient in diverse programming languages and dedicated to innovative problem-solving. Ready to contribute my skills, learn, and grow in a dynamic professional environment</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About

