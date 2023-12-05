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
              <p>As a final year Computer Science student I am highly motivated and dedicated to continuously improving my skills. My goal is to simplify the complexities of our world. I work well in teams. Have a talent, for
understanding technical environments. I am eager to learn from engineers and bridge the gap, between knowledge and real world industry dynamics.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About

